module PLAlgProcessors exposing (processDPLLGraphPL, processHornBwChPL, processHornFwChPL, processResolutionGraphPL, processResolutionPL, processSemanticTableauPL, processTruthTableFPL, processTruthTablePL)

import Dict
import Json.Decode as JSOND
import Json.Encode as JSONE
import List.Extra as LE
import LogicUS.PL.Clauses as LUS_CS
import LogicUS.PL.DPLL as LUS_DPLL
import LogicUS.PL.HornRS as LUS_HRS
import LogicUS.PL.Resolution as LUS_RES
import LogicUS.PL.SemanticTableaux as LUS_ST
import LogicUS.PL.SyntaxSemantics as LUS_SS exposing (FormulaPL(..), SetPL)



-- SemanticTableauPL Node


processTruthTableFPL : String -> Dict.Dict ( Int, Int ) LUS_SS.FormulaPL -> { errorCode : Int, message : JSONE.Value }
processTruthTableFPL input outputsFPL =
    let
        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString inputDecoder input of
        Ok source ->
            case Dict.get ( source.origin_id, source.origin_slot ) outputsFPL of
                Just f ->
                    { errorCode = 0
                    , message = JSONE.string <| LUS_SS.fplTruthTableString f
                    }

                Nothing ->
                    { errorCode = 2
                    , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                    }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processTruthTablePL : String -> Dict.Dict ( Int, Int ) FormulaPL -> Dict.Dict ( Int, Int ) SetPL -> { errorCode : Int, message : JSONE.Value }
processTruthTablePL content outputsFPL outputsSPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case c.option of
                        "FPL" ->
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsFPL of
                                Just f ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_SS.fplTruthTableString f
                                    }

                                Nothing ->
                                    { errorCode = 2
                                    , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                                    }

                        "SPL_full" ->
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                                Just s ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_SS.splTruthTableString s
                                    }

                                Nothing ->
                                    { errorCode = 2
                                    , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                                    }

                        "SPL_lite" ->
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                                Just s ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_SS.splCompactTruthTableString s
                                    }

                                Nothing ->
                                    { errorCode = 2
                                    , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                                    }

                        _ ->
                            { errorCode = 4
                            , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for TruthTable")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processSemanticTableauPL : String -> Dict.Dict ( Int, Int ) SetPL -> { errorCode : Int, resultMode : Int, result : { sspl : List SetPL, fpl : FormulaPL }, message : JSONE.Value }
processSemanticTableauPL content outputsSPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                        Just s ->
                            case c.option of
                                "full_nosimp" ->
                                    let
                                        st =
                                            LUS_ST.semanticTableau s
                                    in
                                    let
                                        res =
                                            LUS_ST.semanticTableauOpenLeaves st
                                    in
                                    { errorCode = 0
                                    , resultMode = 1
                                    , result = { sspl = res, fpl = Insat }
                                    , message =
                                        JSONE.object
                                            [ ( "result", JSONE.string (String.join "." <| List.map LUS_SS.splToString res) )
                                            , ( "graph", JSONE.string <| LUS_ST.semanticTableauToDOT st )
                                            ]
                                    }

                                "full_minimal" ->
                                    let
                                        st =
                                            LUS_ST.semanticTableau s
                                    in
                                    let
                                        res =
                                            LUS_ST.semanticTableauRelevantLeaves st
                                    in
                                    { errorCode = 0
                                    , resultMode = 1
                                    , result = { sspl = res, fpl = Insat }
                                    , message =
                                        JSONE.object
                                            [ ( "result", JSONE.string (String.join "." <| List.map LUS_SS.splToString res) )
                                            , ( "graph", JSONE.string <| LUS_ST.semanticTableauToDOT st )
                                            ]
                                    }

                                "full_asformula" ->
                                    let
                                        st =
                                            LUS_ST.semanticTableau s
                                    in
                                    let
                                        res =
                                            LUS_SS.splDisjunction <| List.map LUS_SS.splConjunction <| LUS_ST.semanticTableauRelevantLeaves st
                                    in
                                    { errorCode = 0
                                    , resultMode = 2
                                    , result = { sspl = [], fpl = res }
                                    , message =
                                        JSONE.object
                                            [ ( "result", JSONE.string (LUS_SS.fplToString res) )
                                            , ( "graph", JSONE.string <| LUS_ST.semanticTableauToDOT st )
                                            ]
                                    }

                                _ ->
                                    { errorCode = 4
                                    , resultMode = 0
                                    , result = { sspl = [], fpl = Insat }
                                    , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for PLSemanticTableau")
                                    }

                        Nothing ->
                            { errorCode = 2
                            , resultMode = 0
                            , result = { sspl = [], fpl = Insat }
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, resultMode = 0, result = { sspl = [], fpl = Insat }, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, resultMode = 0, result = { sspl = [], fpl = Insat }, message = JSONE.string (JSOND.errorToString e) }


processResolutionPL : String -> Dict.Dict ( Int, Int ) LUS_CS.ClausePLSet -> { errorCode : Int, message : JSONE.Value }
processResolutionPL content outputsCSPL =
    let
        contentDecoder =
            JSOND.map3 (\x y z -> { option = x, input = y, choiceOrder = z }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "choiceOrder" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsCSPL of
                        Just cs ->
                            case c.option of
                                "saturation" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionProcessListToStringTable <| Tuple.second <| LUS_RES.csplSaturationResolution <| cs
                                    }

                                "regular" ->
                                    let
                                        choiceOrder =
                                            List.concat <| List.map (LUS_SS.fplSymbols << LUS_SS.fplRead) <| LE.unique <| String.split "," c.choiceOrder

                                        symbols =
                                            LUS_CS.csplSymbols cs
                                    in
                                    if List.sort choiceOrder == symbols then
                                        { errorCode = 0
                                        , message = JSONE.string <| LUS_RES.resolutionProcessListToStringTable <| Tuple.second <| LUS_RES.csplRegularResolution choiceOrder cs
                                        }

                                    else
                                        { errorCode = 6
                                        , message = JSONE.string ("Invalid value for choice order (" ++ c.option ++ ") for SPLTruthTable")
                                        }

                                _ ->
                                    { errorCode = 4
                                    , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ResolutionPL")
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processResolutionGraphPL : String -> Dict.Dict ( Int, Int ) LUS_CS.ClausePLSet -> { errorCode : Int, message : JSONE.Value }
processResolutionGraphPL content outputsCSPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsCSPL of
                        Just cs ->
                            case c.option of
                                "standard" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionTableauToDOT <| Tuple.second <| LUS_RES.csplSCFResolution <| cs
                                    }

                                "linear" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionTableauToDOT <| Tuple.second <| LUS_RES.csplSCFLinearResolution <| cs
                                    }

                                "positive" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionTableauToDOT <| Tuple.second <| LUS_RES.csplSCFPositiveResolution <| cs
                                    }

                                "negative" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionTableauToDOT <| Tuple.second <| LUS_RES.csplSCFNegativeResolution <| cs
                                    }

                                "unitary" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionTableauToDOT <| Tuple.second <| LUS_RES.csplSCFUnitaryResolution <| cs
                                    }

                                "by entries" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_RES.resolutionTableauToDOT <| Tuple.second <| LUS_RES.csplSCFByEntriesResolution <| cs
                                    }

                                _ ->
                                    { errorCode = 4
                                    , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ResolutionGraphPL")
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processDPLLGraphPL : String -> Dict.Dict ( Int, Int ) LUS_CS.ClausePLSet -> { errorCode : Int, message : JSONE.Value }
processDPLLGraphPL input outputsCSPL =
    let
        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString inputDecoder input of
        Ok source ->
            case Dict.get ( source.origin_id, source.origin_slot ) outputsCSPL of
                Just cs ->
                    { errorCode = 0
                    , message = JSONE.string <| LUS_DPLL.dpllTableauToDOT <| LUS_DPLL.dpll cs
                    }

                Nothing ->
                    { errorCode = 2
                    , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                    }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processHornFwChPL : String -> Dict.Dict ( Int, Int ) (List LUS_HRS.HornRule) -> Dict.Dict ( Int, Int ) LUS_HRS.HornKB -> Dict.Dict ( Int, Int ) LUS_HRS.HornFact -> { errorCode : Int, message : JSONE.Value }
processHornFwChPL content outputsRSHRS outputsKBHRS outputsFHRS =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map6 (\rid rsl kbid kbsl gid gsl -> { originr_id = rid, originr_slot = rsl, originkb_id = kbid, originkb_slot = kbsl, origing_id = gid, origing_slot = gsl }) (JSOND.at [ "originr_id" ] JSOND.int) (JSOND.at [ "originr_slot" ] JSOND.int) (JSOND.at [ "originkb_id" ] JSOND.int) (JSOND.at [ "originkb_slot" ] JSOND.int) (JSOND.at [ "origing_id" ] JSOND.int) (JSOND.at [ "origing_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case ( Dict.get ( source.originr_id, source.originr_slot ) outputsRSHRS, Dict.get ( source.originkb_id, source.originkb_slot ) outputsKBHRS, Dict.get ( source.origing_id, source.origing_slot ) outputsFHRS ) of
                        ( Nothing, _, _ ) ->
                            { errorCode = 2, message = JSONE.string ("Unknown source rule set: (" ++ String.fromInt source.originr_id ++ ", " ++ String.fromInt source.originr_slot ++ ")") }

                        ( _, Nothing, _ ) ->
                            { errorCode = 2, message = JSONE.string ("Unknown source KB (fact set): (" ++ String.fromInt source.originkb_id ++ ", " ++ String.fromInt source.originkb_slot ++ ")") }

                        ( _, _, Nothing ) ->
                            { errorCode = 2, message = JSONE.string ("Unknown source goal (fact): (" ++ String.fromInt source.origing_id ++ ", " ++ String.fromInt source.origing_slot ++ ")") }

                        ( Just rs, Just kb, Just g ) ->
                            case c.option of
                                "remIrrel" ->
                                    let
                                        resCh =
                                            LUS_HRS.forwardChaining2 rs kb g
                                    in
                                    { errorCode = 0
                                    , message = JSONE.object <| List.map2 Tuple.pair [ "info", "process" ] <| List.map JSONE.string <| LUS_HRS.forwardChainingResultToString resCh
                                    }

                                "remUsed" ->
                                    let
                                        resCh =
                                            LUS_HRS.forwardChaining1 rs kb g
                                    in
                                    { errorCode = 0
                                    , message = JSONE.object <| List.map2 Tuple.pair [ "info", "process" ] <| List.map JSONE.string <| LUS_HRS.forwardChainingResultToString resCh
                                    }

                                _ ->
                                    { errorCode = 4
                                    , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for HornFwChPL")
                                    }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processHornBwChPL : String -> Dict.Dict ( Int, Int ) (List LUS_HRS.HornRule) -> Dict.Dict ( Int, Int ) LUS_HRS.HornKB -> Dict.Dict ( Int, Int ) LUS_HRS.HornFact -> { errorCode : Int, message : JSONE.Value }
processHornBwChPL content outputsRSHRS outputsKBHRS outputsFHRS =
    let
        contentDecoder =
            JSOND.map6 (\rid rsl kbid kbsl gid gsl -> { originr_id = rid, originr_slot = rsl, originkb_id = kbid, originkb_slot = kbsl, origing_id = gid, origing_slot = gsl }) (JSOND.at [ "originr_id" ] JSOND.int) (JSOND.at [ "originr_slot" ] JSOND.int) (JSOND.at [ "originkb_id" ] JSOND.int) (JSOND.at [ "originkb_slot" ] JSOND.int) (JSOND.at [ "origing_id" ] JSOND.int) (JSOND.at [ "origing_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok source ->
            case ( Dict.get ( source.originr_id, source.originr_slot ) outputsRSHRS, Dict.get ( source.originkb_id, source.originkb_slot ) outputsKBHRS, Dict.get ( source.origing_id, source.origing_slot ) outputsFHRS ) of
                ( Nothing, _, _ ) ->
                    { errorCode = 2, message = JSONE.string ("Unknown source rule set: (" ++ String.fromInt source.originr_id ++ ", " ++ String.fromInt source.originr_slot ++ ")") }

                ( _, Nothing, _ ) ->
                    { errorCode = 2, message = JSONE.string ("Unknown source KB (fact set): (" ++ String.fromInt source.originkb_id ++ ", " ++ String.fromInt source.originkb_slot ++ ")") }

                ( _, _, Nothing ) ->
                    { errorCode = 2, message = JSONE.string ("Unknown source goal (fact): (" ++ String.fromInt source.origing_id ++ ", " ++ String.fromInt source.origing_slot ++ ")") }

                ( Just rs, Just kb, Just g ) ->
                    let
                        resCh =
                            LUS_HRS.backwardChaining1 rs kb g
                    in
                    { errorCode = 0
                    , message = JSONE.object <| List.map2 Tuple.pair [ "info", "process" ] <| List.map JSONE.string <| LUS_HRS.backwardChainingResultToString resCh
                    }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }
