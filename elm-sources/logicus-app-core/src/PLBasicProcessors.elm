module PLBasicProcessors exposing (processCSPPL, processCSPPLToDIMACS, processClausePLNode, processClauseSetPLNode, processConnectivePLNode, processFormulaPLNode, processHornFactPLNode, processHornFactSetPLNode, processHornRulePLNode, processHornRuleSetPLNode, processSetPLNode, processTransformFPLNode, processTransformSetPLNode)

-- import LogicUS.PL.SemanticTableaux as LUS_ST

import Auxiliar as Aux
import Dict
import Json.Decode as JSOND
import Json.Encode as JSONE
import List.Extra as ListE
import LogicUS.PL.CSP as LUS_CSP exposing (BigFPL)
import LogicUS.PL.Clauses as LUS_CS exposing (ClausePL, ClausePLSet)
import LogicUS.PL.HornRS as LUS_HRS
import LogicUS.PL.NormalForms as LUS_NF
import LogicUS.PL.SyntaxSemantics as LUS_SS exposing (FormulaPL(..), SetPL)
import Maybe.Extra as MaybeE
import Set



-- FormulaPL Node


processFormulaPLNode : String -> { errorCode : Int, result : FormulaPL, message : JSONE.Value }
processFormulaPLNode content =
    case LUS_SS.fplReadFromString content of
        ( Nothing, _, errDetails ) ->
            { errorCode = 1, result = Insat, message = JSONE.string errDetails }

        ( Just f, _, _ ) ->
            { errorCode = 0, result = f, message = JSONE.string (LUS_SS.fplToString f) }



-- SetPL Node


processSetPLNode : String -> Dict.Dict ( Int, Int ) LUS_SS.FormulaPL -> Dict.Dict ( Int, Int ) LUS_SS.SetPL -> { errorCode : Int, result : SetPL, message : JSONE.Value }
processSetPLNode content outputsFPL outputsSPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.list <| JSOND.map2 Tuple.pair (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case c.option of
                "fromFile" ->
                    let
                        parsedSet =
                            case ListE.unconsLast <| String.split "." c.input of
                                Just ( "", [] ) ->
                                    List.map LUS_SS.fplReadFromString [ "" ]

                                Just ( "", ls ) ->
                                    List.map LUS_SS.fplReadFromString ls

                                Just ( s, ls ) ->
                                    List.map LUS_SS.fplReadFromString (ls ++ [ s ])

                                Nothing ->
                                    List.map LUS_SS.fplReadFromString [ "" ]
                    in
                    if List.any (\( f, _, _ ) -> MaybeE.isNothing f) parsedSet then
                        { errorCode = 1
                        , result = []
                        , message =
                            JSONE.string
                                (String.join "." <|
                                    List.indexedMap
                                        (\i ( _, _, m ) ->
                                            if m /= "" then
                                                "f" ++ String.fromInt i ++ " : " ++ m

                                            else
                                                ""
                                        )
                                        parsedSet
                                )
                        }

                    else
                        let
                            fs =
                                ListE.unique <| List.map (\( f, _, _ ) -> Maybe.withDefault Insat f) parsedSet
                        in
                        { errorCode = 0, result = fs, message = JSONE.string (LUS_SS.splToString fs) }

                "collect" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                fs =
                                    List.map (\x -> ( x, Dict.get x outputsFPL )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) fs of
                                [] ->
                                    let
                                        fs_ =
                                            ListE.unique <| List.map (Maybe.withDefault LUS_SS.Insat << Tuple.second) fs
                                    in
                                    { errorCode = 0, result = fs_, message = JSONE.string (LUS_SS.splToString fs_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "union" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                fss =
                                    List.map (\x -> ( x, Dict.get x outputsSPL )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) fss of
                                [] ->
                                    let
                                        fs_ =
                                            ListE.unique <| List.foldl (\( _, fs ) gs -> Aux.uniqueConcatList gs (Maybe.withDefault [] fs)) [] fss
                                    in
                                    { errorCode = 0, result = fs_, message = JSONE.string (LUS_SS.splToString fs_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = [], message = JSONE.string "undefined option for node of type SetPL" }

        Err e ->
            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }



-- ConnectivePL Node


processConnectivePLNode : String -> Dict.Dict ( Int, Int ) LUS_SS.FormulaPL -> { errorCode : Int, result : FormulaPL, message : JSONE.Value }
processConnectivePLNode content outputsFPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map4 (\x y z u -> { origin1_id = x, origin1_slot = y, origin2_id = z, origin2_slot = u }) (JSOND.at [ "origin1_id" ] JSOND.int) (JSOND.at [ "origin1_slot" ] JSOND.int) (JSOND.at [ "origin2_id" ] JSOND.int) (JSOND.at [ "origin2_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok sources ->
                    case c.option of
                        "neg" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsFPL of
                                Just f ->
                                    let
                                        f_ =
                                            LUS_SS.fplNegation f
                                    in
                                    { errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                Nothing ->
                                    { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                        "conj" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsFPL of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just f2 ->
                                            let
                                                f =
                                                    Conj f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUS_SS.fplToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        "disj" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsFPL of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just f2 ->
                                            let
                                                f =
                                                    Disj f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUS_SS.fplToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        "impl" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsFPL of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just f2 ->
                                            let
                                                f =
                                                    Impl f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUS_SS.fplToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        "equi" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsFPL of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just f2 ->
                                            let
                                                f =
                                                    Equi f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUS_SS.fplToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFPL of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        _ ->
                            { errorCode = 4, result = Insat, message = JSONE.string "undefined option for node of type ConnectivePL" }

                Err e ->
                    { errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }


processTransformSetPLNode : String -> Dict.Dict ( Int, Int ) LUS_SS.SetPL -> { errorCode : Int, id : ( Int, Int ), succ_code : Int, result : { f : FormulaPL, s : SetPL, cs : ClausePLSet }, message : JSONE.Value }
processTransformSetPLNode content outputsSPL =
    let
        result =
            { f = Insat, s = [], cs = [] }

        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok sources ->
                    case Dict.get ( sources.origin_id, sources.origin_slot ) outputsSPL of
                        Just fs ->
                            case c.option of
                                "neg_all" ->
                                    let
                                        fs_ =
                                            LUS_SS.splNegation fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 1, result = { result | s = fs_ }, message = JSONE.string (LUS_SS.splToString fs_) }

                                "conj_all" ->
                                    let
                                        fs_ =
                                            LUS_SS.splConjunction fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 2, result = { result | f = fs_ }, message = JSONE.string (LUS_SS.fplToString fs_) }

                                "disj_all" ->
                                    let
                                        fs_ =
                                            LUS_SS.splDisjunction fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 3, result = { result | f = fs_ }, message = JSONE.string (LUS_SS.fplToString fs_) }

                                "to_cnf" ->
                                    let
                                        fs_ =
                                            List.map LUS_NF.fplToCNF fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 4, result = { result | s = fs_ }, message = JSONE.string (LUS_SS.splToString fs_) }

                                "to_dnf" ->
                                    let
                                        fs_ =
                                            List.map LUS_NF.fplToDNF fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 5, result = { result | s = fs_ }, message = JSONE.string (LUS_SS.splToString fs_) }

                                "to_clauses" ->
                                    let
                                        fs_ =
                                            LUS_CS.splToClauses fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 6, result = { result | cs = fs_ }, message = JSONE.string (LUS_CS.csplToString fs_) }

                                _ ->
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 4, succ_code = 0, result = result, message = JSONE.string "undefined option for node of type transformSetPL" }

                        Nothing ->
                            { id = ( -1, -1 ), errorCode = 2, succ_code = 0, result = result, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin_id ++ ", " ++ String.fromInt sources.origin_slot ++ ")") }

                Err e ->
                    { id = ( -1, -1 ), errorCode = 3, succ_code = 0, result = result, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { id = ( -1, -1 ), errorCode = 3, succ_code = 0, result = result, message = JSONE.string (JSOND.errorToString e) }


processTransformFPLNode : String -> Dict.Dict ( Int, Int ) LUS_SS.FormulaPL -> { errorCode : Int, id : ( Int, Int ), result : FormulaPL, message : JSONE.Value }
processTransformFPLNode content outputsFPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok sources ->
                    case Dict.get ( sources.origin_id, sources.origin_slot ) outputsFPL of
                        Just f ->
                            case c.option of
                                "replaceEquiv" ->
                                    let
                                        f_ =
                                            LUS_NF.fplRemoveAllEquiv f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "replaceImpl" ->
                                    let
                                        f_ =
                                            LUS_NF.fplRemoveAllImpl f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "interiorizeNegs" ->
                                    let
                                        f_ =
                                            Aux.fplInteriorizeAllNeg2 f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "interiorizeConjs" ->
                                    let
                                        f_ =
                                            Aux.fplInteriorizeAllConj2 f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "interiorizeDisjs" ->
                                    let
                                        f_ =
                                            Aux.fplInteriorizeAllDisj2 f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "toNNF" ->
                                    let
                                        f_ =
                                            LUS_NF.fplToNNF f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "toCNF" ->
                                    let
                                        f_ =
                                            LUS_NF.fplToCNF f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                "toDNF" ->
                                    let
                                        f_ =
                                            LUS_NF.fplToDNF f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUS_SS.fplToString f_) }

                                _ ->
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 4, result = Insat, message = JSONE.string "undefined option for node of type transformSetPL" }

                        Nothing ->
                            { id = ( -1, -1 ), errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin_id ++ ", " ++ String.fromInt sources.origin_slot ++ ")") }

                Err e ->
                    { id = ( -1, -1 ), errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { id = ( -1, -1 ), errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }


processClausePLNode : String -> { errorCode : Int, result : ClausePL, message : JSONE.Value }
processClausePLNode content =
    case LUS_CS.cplReadFromString content of
        ( Nothing, _, errDetails ) ->
            { errorCode = 1, result = [], message = JSONE.string errDetails }

        ( Just c, _, _ ) ->
            { errorCode = 0, result = c, message = JSONE.string (LUS_CS.cplToString c) }


processClauseSetPLNode : String -> Dict.Dict ( Int, Int ) ClausePL -> Dict.Dict ( Int, Int ) SetPL -> Dict.Dict ( Int, Int ) LUS_CS.ClausePLSet -> { errorCode : Int, result : ClausePLSet, message : JSONE.Value }
processClauseSetPLNode content outputsCPL outputsSPL outputsCSPL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case c.option of
                "fromFile" ->
                    let
                        parsedSet =
                            case ListE.unconsLast <| String.split "." c.input of
                                Just ( "", [] ) ->
                                    []

                                Just ( "", ls ) ->
                                    List.map LUS_CS.cplReadFromString ls

                                Just ( s, ls ) ->
                                    List.map LUS_CS.cplReadFromString (ls ++ [ s ])

                                Nothing ->
                                    []
                    in
                    if List.any (\( cl, _, _ ) -> MaybeE.isNothing cl) parsedSet then
                        { errorCode = 1
                        , result = []
                        , message =
                            JSONE.string
                                (String.join "." <|
                                    List.indexedMap
                                        (\i ( _, _, m ) ->
                                            if m /= "" then
                                                "cl" ++ String.fromInt i ++ " : " ++ m

                                            else
                                                ""
                                        )
                                        parsedSet
                                )
                        }

                    else
                        let
                            cs =
                                ListE.unique <| List.map (\( cl, _, _ ) -> Maybe.withDefault [] cl) parsedSet
                        in
                        { errorCode = 0, result = cs, message = JSONE.string (LUS_CS.csplToString cs) }

                "collect" ->
                    let
                        inputDecoder =
                            JSOND.list <| JSOND.map2 Tuple.pair (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
                    in
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                cls =
                                    List.map (\x -> ( x, Dict.get x outputsCPL )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) cls of
                                [] ->
                                    let
                                        cls_ =
                                            ListE.unique <| List.map (Maybe.withDefault [] << Tuple.second) cls
                                    in
                                    { errorCode = 0, result = cls_, message = JSONE.string (LUS_CS.csplToString cls_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "union" ->
                    let
                        inputDecoder =
                            JSOND.list <| JSOND.map2 Tuple.pair (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
                    in
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                clss =
                                    List.map (\x -> ( x, Dict.get x outputsCSPL )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) clss of
                                [] ->
                                    let
                                        cls_ =
                                            List.foldl (\( _, cls ) ac -> Aux.uniqueConcatList ac (Maybe.withDefault [] cls)) [] clss
                                    in
                                    { errorCode = 0, result = cls_, message = JSONE.string (LUS_CS.csplToString cls_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "fromCNFSet" ->
                    let
                        inputDecoder =
                            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
                    in
                    case JSOND.decodeString inputDecoder c.input of
                        Ok source ->
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                                Just s ->
                                    let
                                        cls =
                                            List.map2 Tuple.pair s (List.map LUS_CS.csplFromCNF s)
                                    in
                                    case List.filter (MaybeE.isNothing << Tuple.second) cls of
                                        [] ->
                                            let
                                                cls_ =
                                                    LUS_CS.csplRemoveTautClauses <| LUS_CS.csplRemoveSubsumedClauses <| List.concat <| List.map (Maybe.withDefault [] << Tuple.second) cls
                                            in
                                            { errorCode = 0, result = cls_, message = JSONE.string (LUS_CS.csplToString cls_) }

                                        xs ->
                                            { errorCode = 1
                                            , result = []
                                            , message =
                                                JSONE.string
                                                    ("These formulas from the set are not in CNF"
                                                        ++ (String.join ". " <| List.map (LUS_SS.fplToString << Tuple.first) xs)
                                                    )
                                            }

                                Nothing ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ "," ++ String.fromInt source.origin_slot ++ ")") }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "fromSetPL" ->
                    let
                        inputDecoder =
                            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
                    in
                    case JSOND.decodeString inputDecoder c.input of
                        Ok source ->
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                                Just s ->
                                    let
                                        cls_ =
                                            LUS_CS.splToClauses s
                                    in
                                    { errorCode = 0, result = cls_, message = JSONE.string (LUS_CS.csplToString cls_) }

                                Nothing ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ "," ++ String.fromInt source.origin_slot ++ ")") }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = [], message = JSONE.string "undefined option for node of type SetPL" }

        Err e ->
            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }



-- HornFact Node


processHornFactPLNode : String -> { errorCode : Int, result : LUS_HRS.HornFact, message : JSONE.Value }
processHornFactPLNode content =
    case LUS_HRS.hornFactReadFromString content of
        ( Nothing, _, errDetails ) ->
            { errorCode = 1, result = ( "⟂", [] ), message = JSONE.string errDetails }

        ( Just f, _, _ ) ->
            { errorCode = 0, result = f, message = JSONE.string (LUS_SS.fplToString (Atom f)) }



-- Set Horn Fact Node


processHornFactSetPLNode : String -> Dict.Dict ( Int, Int ) LUS_HRS.HornFact -> Dict.Dict ( Int, Int ) LUS_HRS.HornKB -> { errorCode : Int, result : LUS_HRS.HornKB, message : JSONE.Value }
processHornFactSetPLNode content outputsFHRS outputsKBHRS =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.list <| JSOND.map2 Tuple.pair (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case c.option of
                "spec" ->
                    let
                        parsedSet =
                            String.split "," c.input |> List.map LUS_HRS.hornFactReadFromString
                    in
                    if List.any (\( f, _, _ ) -> MaybeE.isNothing f) parsedSet then
                        { errorCode = 1
                        , result = Set.empty
                        , message =
                            JSONE.string
                                (String.join "." <|
                                    List.filter String.isEmpty <|
                                        List.indexedMap
                                            (\i ( _, _, m ) ->
                                                if m /= "" then
                                                    "f" ++ String.fromInt i ++ " : " ++ m

                                                else
                                                    ""
                                            )
                                            parsedSet
                                )
                        }

                    else
                        let
                            fs =
                                Set.fromList <| List.map LUS_HRS.hornFactReadExtraction parsedSet
                        in
                        { errorCode = 0, result = fs, message = JSONE.string (LUS_HRS.hornKBToStringComma fs) }

                "collect" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                fs =
                                    List.map (\x -> ( x, Dict.get x outputsFHRS )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) fs of
                                [] ->
                                    let
                                        fs_ =
                                            Set.fromList <| List.map (Maybe.withDefault ( "⟂", [] ) << Tuple.second) fs
                                    in
                                    { errorCode = 0, result = fs_, message = JSONE.string (LUS_HRS.hornKBToStringComma fs_) }

                                undefSources ->
                                    { errorCode = 2, result = Set.empty, message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = Set.empty, message = JSONE.string (JSOND.errorToString e) }

                "union" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                fss =
                                    List.map (\x -> ( x, Dict.get x outputsKBHRS )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) fss of
                                [] ->
                                    let
                                        fs_ =
                                            List.foldl (\( _, fs ) ac -> Set.union ac (Maybe.withDefault Set.empty fs)) Set.empty fss
                                    in
                                    { errorCode = 0, result = fs_, message = JSONE.string (LUS_HRS.hornKBToStringComma fs_) }

                                undefSources ->
                                    { errorCode = 2, result = Set.empty, message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = Set.empty, message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = Set.empty, message = JSONE.string "undefined option for node of type HornFactSetPL" }

        Err e ->
            { errorCode = 3, result = Set.empty, message = JSONE.string (JSOND.errorToString e) }


processHornRulePLNode : String -> Dict.Dict ( Int, Int ) LUS_HRS.HornFact -> Dict.Dict ( Int, Int ) LUS_HRS.HornKB -> { errorCode : Int, result : LUS_HRS.HornRule, message : JSONE.Value }
processHornRulePLNode content outputsFHRS outputsKBHRS =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.map4 (\x y u v -> { origin1_id = x, origin1_slot = y, origin2_id = u, origin2_slot = v }) (JSOND.at [ "origin1_id" ] JSOND.int) (JSOND.at [ "origin1_slot" ] JSOND.int) (JSOND.at [ "origin2_id" ] JSOND.int) (JSOND.at [ "origin2_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case c.option of
                "spec" ->
                    case LUS_HRS.hornRuleReadFromString c.input of
                        ( Nothing, _, errDetails ) ->
                            { errorCode = 1, result = ( Set.empty, ( "⟂", [] ) ), message = JSONE.string errDetails }

                        ( Just r, _, _ ) ->
                            { errorCode = 0, result = r, message = JSONE.string (LUS_HRS.hornRuleToString r) }

                "inputs" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            case ( Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsKBHRS, Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsFHRS ) of
                                ( Nothing, _ ) ->
                                    { errorCode = 2, result = ( Set.empty, ( "⟂", [] ) ), message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ "," ++ String.fromInt sources.origin1_slot ++ ")") }

                                ( _, Nothing ) ->
                                    { errorCode = 2, result = ( Set.empty, ( "⟂", [] ) ), message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ "," ++ String.fromInt sources.origin2_slot ++ ")") }

                                ( Just fs, Just f ) ->
                                    { errorCode = 0, result = ( fs, f ), message = JSONE.string (LUS_HRS.hornRuleToString ( fs, f )) }

                        Err e ->
                            { errorCode = 3, result = ( Set.empty, ( "⟂", [] ) ), message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = ( Set.empty, ( "⟂", [] ) ), message = JSONE.string "undefined option for node of type HornRulePL" }

        Err e ->
            { errorCode = 3, result = ( Set.empty, ( "⟂", [] ) ), message = JSONE.string (JSOND.errorToString e) }



-- -- Set Horn Rule Node


processHornRuleSetPLNode : String -> Dict.Dict ( Int, Int ) LUS_HRS.HornRule -> Dict.Dict ( Int, Int ) (List LUS_HRS.HornRule) -> { errorCode : Int, result : List LUS_HRS.HornRule, message : JSONE.Value }
processHornRuleSetPLNode content outputsRHRS outputsRSHRS =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { option = x, input = y }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string)

        inputDecoder =
            JSOND.list <| JSOND.map2 Tuple.pair (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case c.option of
                "fromFile" ->
                    let
                        parsedSet =
                            case ListE.unconsLast <| String.split "." c.input of
                                Just ( "", [] ) ->
                                    List.map LUS_HRS.hornRuleReadFromString [ "" ]

                                Just ( "", ls ) ->
                                    List.map LUS_HRS.hornRuleReadFromString ls

                                Just ( s, ls ) ->
                                    List.map LUS_HRS.hornRuleReadFromString (ls ++ [ s ])

                                Nothing ->
                                    List.map LUS_HRS.hornRuleReadFromString [ "" ]
                    in
                    if List.any (\( r, _, _ ) -> MaybeE.isNothing r) parsedSet then
                        { errorCode = 1
                        , result = []
                        , message =
                            JSONE.string
                                (String.join "." <|
                                    List.indexedMap
                                        (\i ( _, _, m ) ->
                                            if m /= "" then
                                                "R-" ++ String.fromInt i ++ " : " ++ m

                                            else
                                                ""
                                        )
                                        parsedSet
                                )
                        }

                    else
                        let
                            rs =
                                ListE.unique <| List.map (\( r, _, _ ) -> Maybe.withDefault ( Set.empty, ( "⟂", [] ) ) r) parsedSet
                        in
                        { errorCode = 0, result = rs, message = JSONE.string (LUS_HRS.hornRulesToString rs) }

                "collect" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                rs =
                                    List.map (\x -> ( x, Dict.get x outputsRHRS )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) rs of
                                [] ->
                                    let
                                        rs_ =
                                            ListE.unique <| List.map (Maybe.withDefault ( Set.empty, ( "⟂", [] ) ) << Tuple.second) rs
                                    in
                                    { errorCode = 0, result = rs_, message = JSONE.string (LUS_HRS.hornRulesToString rs_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "union" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                rss =
                                    List.map (\x -> ( x, Dict.get x outputsRSHRS )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) rss of
                                [] ->
                                    let
                                        rs_ =
                                            List.foldl (\( _, rs ) ac -> Aux.uniqueConcatList ac (Maybe.withDefault [] rs)) [] rss
                                    in
                                    { errorCode = 0, result = rs_, message = JSONE.string (LUS_HRS.hornRulesToString rs_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = [], message = JSONE.string "undefined option for node of type HornRuleSetPL" }

        Err e ->
            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }


processCSPPL : String -> { errorCode : Int, result : List BigFPL, message : JSONE.Value }
processCSPPL content =
    let
        contentDecoder =
            JSOND.map3
                (\x y z -> { option = x, index = y, input = z })
                (JSOND.at [ "option" ] JSOND.string)
                (JSOND.at [ "index" ] JSOND.int)
                (JSOND.at [ "input" ] JSOND.string)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case c.option of
                "checkBFPL" ->
                    case LUS_CSP.bfplReadFromString c.input of
                        ( Just bf, _ ) ->
                            let
                                ( outputF, outputC ) =
                                    LUS_CSP.bfplToMathString2 bf
                            in
                            { errorCode = 0
                            , result = []
                            , message =
                                JSONE.object
                                    [ ( "input", JSONE.string c.input )
                                    , ( "index", JSONE.int c.index )
                                    , ( "outputFormula", JSONE.string outputF )
                                    , ( "outputConditions", JSONE.string outputC )
                                    , ( "errorState", JSONE.int 0 )
                                    , ( "option", JSONE.string "checkBFPL" )
                                    ]
                            }

                        ( Nothing, errDetails ) ->
                            { errorCode = 1
                            , result = []
                            , message =
                                JSONE.object
                                    [ ( "input", JSONE.string c.input )
                                    , ( "index", JSONE.int c.index )
                                    , ( "outputFormula", JSONE.string errDetails )
                                    , ( "outputConditions", JSONE.string errDetails )
                                    , ( "errorState", JSONE.int 1 )
                                    , ( "option", JSONE.string "checkBFPL" )
                                    ]
                            }

                "readCSP" ->
                    case JSOND.decodeString (JSOND.list JSOND.string) c.input of
                        Ok ls ->
                            let
                                parsedSet =
                                    List.indexedMap
                                        (\index input ->
                                            case LUS_CSP.bfplReadFromString input of
                                                ( Just bf, _ ) ->
                                                    let
                                                        ( outputF, outputC ) =
                                                            LUS_CSP.bfplToMathString2 bf
                                                    in
                                                    ( ( True, bf )
                                                    , [ ( "input", JSONE.string input )
                                                      , ( "index", JSONE.int index )
                                                      , ( "outputFormula", JSONE.string outputF )
                                                      , ( "outputConditions", JSONE.string outputC )
                                                      , ( "errorState", JSONE.int 0 )
                                                      ]
                                                    )

                                                ( Nothing, errDetails ) ->
                                                    ( ( False, LUS_CSP.Insat )
                                                    , [ ( "input", JSONE.string input )
                                                      , ( "index", JSONE.int index )
                                                      , ( "outputFormula", JSONE.string errDetails )
                                                      , ( "outputConditions", JSONE.string errDetails )
                                                      , ( "errorState", JSONE.int 1 )
                                                      ]
                                                    )
                                        )
                                        ls
                            in
                            case List.foldl (\( ( e, f ), o ) ( acE, acF, acO ) -> ( acE && e, acF ++ [ f ], acO ++ [ o ] )) ( True, [], [] ) parsedSet of
                                ( False, _, ps ) ->
                                    { errorCode = 1, result = [], message = JSONE.object [ ( "formulas", JSONE.list JSONE.object ps ), ( "option", JSONE.string "saveCSP" ) ] }

                                ( True, fs, ps ) ->
                                    { errorCode = 0, result = fs, message = JSONE.object [ ( "formulas", JSONE.list JSONE.object ps ), ( "option", JSONE.string "saveCSP" ) ] }

                        Err e ->
                            { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = [] }

                _ ->
                    { errorCode = 4, result = [], message = JSONE.string "undefined option for node of type CSPPL" }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = [] }


processCSPPLToDIMACS : String -> Dict.Dict ( Int, Int ) (List LUS_CSP.BigFPL) -> { errorCode : Int, message : JSONE.Value }
processCSPPLToDIMACS input outputsCSPPL =
    let
        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString inputDecoder input of
        Ok source ->
            case Dict.get ( source.origin_id, source.origin_slot ) outputsCSPPL of
                Just cs ->
                    { errorCode = 0
                    , message =
                        (\( cont, dvars ) ->
                            JSONE.object
                                [ ( "content", JSONE.string cont )
                                , ( "dvars"
                                  , JSONE.object <|
                                        List.map (\( k, v ) -> ( String.fromInt k, JSONE.string <| LUS_SS.fplToMathString (LUS_SS.Atom v) )) <|
                                            Dict.toList dvars
                                  )
                                ]
                        )
                        <|
                            LUS_CS.csplToDIMACS <|
                                LUS_CS.splToClauses <|
                                    List.map LUS_CSP.bfplToFPL cs
                    }

                Nothing ->
                    { errorCode = 2
                    , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                    }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }
