module FOLAlgProcessors exposing (..)

import Dict
import Json.Decode as JSOND
import Json.Encode as JSONE
import LogicUS.FOL.Clauses exposing (ClauseFOLSet)
import LogicUS.FOL.Resolution as LUSF_RES
import LogicUS.FOL.SemanticTableauxEQ as LUSF_PLSTEQ
import LogicUS.FOL.SyntaxSemantics exposing (SetFOL)


processSemanticTableauFOL : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, message : JSONE.Value }
processSemanticTableauFOL content outputsSFOL =
    let
        contentDecoder =
            JSOND.map3 (\y z u -> { input = y, maxConstants = z, maxSize = u }) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "maxConstants" ] JSOND.int) (JSOND.at [ "maxSize" ] JSOND.int)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                        Just s ->
                            { errorCode = 0
                            , message = JSONE.string <| LUSF_PLSTEQ.semanticTableauToDOT (LUSF_PLSTEQ.semanticTableauEq s c.maxConstants c.maxSize) ""
                            }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processResolutionGraphFOL : String -> Dict.Dict ( Int, Int ) ClauseFOLSet -> { errorCode : Int, message : JSONE.Value }
processResolutionGraphFOL content outputsCSFOL =
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
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsCSFOL of
                        Just cs ->
                            case c.option of
                                "standard" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUSF_RES.resolutionTableauToDOT <| Tuple.second <| LUSF_RES.csfolSCFResolution <| cs
                                    }

                                "linear" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUSF_RES.resolutionTableauToDOT <| Tuple.second <| LUSF_RES.csfolSCFResolution <| cs
                                    }

                                "positive" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUSF_RES.resolutionTableauToDOT <| Tuple.second <| LUSF_RES.csfolSCFResolution <| cs
                                    }

                                "negative" ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUSF_RES.resolutionTableauToDOT <| Tuple.second <| LUSF_RES.csfolSCFResolution <| cs
                                    }

                                _ ->
                                    { errorCode = 4
                                    , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ResolutionGraphFOL")
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }
