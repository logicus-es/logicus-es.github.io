module FOLBasicProcessors exposing (processClauseFOLNode, processClauseSetFOLNode, processConnectiveFOLNode, processFormulaFOLNode, processHerbrandBaseFOLNode, processHerbrandExtensionFOLNode, processHerbrandInterpretationsFOLNode, processHerbrandModelsFOLNode, processHerbrandUniverseFOLNode, processQuantifierFOLNode, processSetFOLNode, processTransformFFOLNode, processTransformSetFOLNode)

-- import LogicUS.PL.SemanticTableaux as LUS_ST

import Auxiliar exposing (folVariableParser, uniqueConcatList)
import Dict
import Json.Decode as JSOND
import Json.Encode as JSONE
import List.Extra as ListE
import LogicUS.FOL.Clauses as LUSF_CS exposing (ClauseFOL, ClauseFOLSet)
import LogicUS.FOL.Herbrand as LUSF_HWS
import LogicUS.FOL.NormalForms as LUSF_NF
import LogicUS.FOL.SyntaxSemantics as LUSF_SS exposing (FormulaFOL(..), SetFOL)
import LogicUS.PL.SyntaxSemantics as LUS_SS exposing (SetPL)
import Maybe.Extra as MaybeE
import Parser



-- FormulaPL Node


processFormulaFOLNode : String -> { errorCode : Int, result : FormulaFOL, message : JSONE.Value }
processFormulaFOLNode content =
    case LUSF_SS.ffolReadFromString content of
        ( Nothing, _, errDetails ) ->
            { errorCode = 1, result = Insat, message = JSONE.string errDetails }

        ( Just f, _, _ ) ->
            { errorCode = 0, result = f, message = JSONE.string (LUSF_SS.ffolToString f) }



-- SetPL Node


processSetFOLNode : String -> Dict.Dict ( Int, Int ) FormulaFOL -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, result : SetFOL, message : JSONE.Value }
processSetFOLNode content outputsffol outputssfol =
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
                                    List.map LUSF_SS.ffolReadFromString [ "" ]

                                Just ( "", ls ) ->
                                    List.map LUSF_SS.ffolReadFromString ls

                                Just ( s, ls ) ->
                                    List.map LUSF_SS.ffolReadFromString (ls ++ [ s ])

                                Nothing ->
                                    List.map LUSF_SS.ffolReadFromString [ "" ]
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
                        { errorCode = 0, result = fs, message = JSONE.string (LUSF_SS.sfolToString fs) }

                "collect" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                fs =
                                    List.map (\x -> ( x, Dict.get x outputsffol )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) fs of
                                [] ->
                                    let
                                        fs_ =
                                            ListE.unique <| List.map (Maybe.withDefault LUSF_SS.Insat << Tuple.second) fs
                                    in
                                    { errorCode = 0, result = fs_, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "union" ->
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                fss =
                                    List.map (\x -> ( x, Dict.get x outputssfol )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) fss of
                                [] ->
                                    let
                                        fs_ =
                                            List.foldl (\( _, fs ) ac -> uniqueConcatList ac (Maybe.withDefault [] fs)) [] fss
                                    in
                                    { errorCode = 0, result = fs_, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                undefSources ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown sources:" ++ (String.join ". " <| List.map (\( ( sid, sslot ), _ ) -> "(" ++ String.fromInt sid ++ ", " ++ String.fromInt sslot ++ ")") undefSources)) }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = [], message = JSONE.string "undefined option for node of type SetFOL" }

        Err e ->
            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }



-- ConnectivePL Node


processConnectiveFOLNode : String -> Dict.Dict ( Int, Int ) FormulaFOL -> { errorCode : Int, result : FormulaFOL, message : JSONE.Value }
processConnectiveFOLNode content outputsffol =
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
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsffol of
                                Just f ->
                                    let
                                        f_ =
                                            LUSF_SS.ffolNegation f
                                    in
                                    { errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                Nothing ->
                                    { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                        "conj" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsffol of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just f2 ->
                                            let
                                                f =
                                                    Conj f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUSF_SS.ffolToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        "disj" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsffol of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just f2 ->
                                            let
                                                f =
                                                    Disj f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUSF_SS.ffolToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        "impl" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsffol of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just f2 ->
                                            let
                                                f =
                                                    Impl f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUSF_SS.ffolToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        "equi" ->
                            case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsffol of
                                Just f1 ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just f2 ->
                                            let
                                                f =
                                                    Equi f1 f2
                                            in
                                            { errorCode = 0, result = f, message = JSONE.string (LUSF_SS.ffolToString f) }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                                Nothing ->
                                    case Dict.get ( sources.origin2_id, sources.origin2_slot ) outputsffol of
                                        Just _ ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                                        Nothing ->
                                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown sources: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ "). (" ++ String.fromInt sources.origin2_id ++ ", " ++ String.fromInt sources.origin2_slot ++ ")") }

                        _ ->
                            { errorCode = 4, result = Insat, message = JSONE.string "undefined option for node of type ConnectiveFOL" }

                Err e ->
                    { errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }


processQuantifierFOLNode : String -> Dict.Dict ( Int, Int ) FormulaFOL -> { errorCode : Int, result : FormulaFOL, message : JSONE.Value }
processQuantifierFOLNode content outputsffol =
    let
        contentDecoder =
            JSOND.map3 (\x y z -> { option = x, input = y, var = z }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "var" ] JSOND.string)

        inputDecoder =
            JSOND.map4 (\x y z u -> { origin1_id = x, origin1_slot = y, origin2_id = z, origin2_slot = u }) (JSOND.at [ "origin1_id" ] JSOND.int) (JSOND.at [ "origin1_slot" ] JSOND.int) (JSOND.at [ "origin2_id" ] JSOND.int) (JSOND.at [ "origin2_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok sources ->
                    case Dict.get ( sources.origin1_id, sources.origin1_slot ) outputsffol of
                        Just f ->
                            case Parser.run folVariableParser c.var of
                                Ok v ->
                                    if List.member v (LUSF_SS.ffolFreeVars f) then
                                        case c.option of
                                            "exists" ->
                                                let
                                                    f_ =
                                                        LUSF_SS.ffolRenameVars (LUSF_SS.Exists v f)
                                                in
                                                { errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                            "forall" ->
                                                let
                                                    f_ =
                                                        LUSF_SS.ffolRenameVars (LUSF_SS.Forall v f)
                                                in
                                                { errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                            _ ->
                                                { errorCode = 4, result = Insat, message = JSONE.string "undefined option for node of type QuantifierFOL" }

                                    else
                                        { errorCode = 0, result = f, message = JSONE.string (LUSF_SS.ffolToString f) }

                                Err e ->
                                    { errorCode = 3, result = Insat, message = JSONE.string (Debug.toString e) }

                        Nothing ->
                            { errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin1_id ++ ", " ++ String.fromInt sources.origin1_slot ++ ")") }

                Err e ->
                    { errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }


processTransformFFOLNode : String -> Dict.Dict ( Int, Int ) FormulaFOL -> { errorCode : Int, id : ( Int, Int ), result : FormulaFOL, message : JSONE.Value }
processTransformFFOLNode content outputsffol =
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
                    case Dict.get ( sources.origin_id, sources.origin_slot ) outputsffol of
                        Just f ->
                            case c.option of
                                "replaceEquiv" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolRemoveAllEquiv f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "replaceImpl" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolRemoveAllImpl f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "interiorizeNegs" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolInteriorizeNeg f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "toNNF" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolToNNF f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "toCNF" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolToCNF f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "toDNF" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolToDNF f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "∀-closure" ->
                                    let
                                        f_ =
                                            LUSF_SS.ffolUniversalClosure f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "∃-closure" ->
                                    let
                                        f_ =
                                            LUSF_SS.ffolExistentialClosure f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "varsRename" ->
                                    let
                                        f_ =
                                            LUSF_SS.ffolRenameVars f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                "toPrenex" ->
                                    let
                                        ( cs, g, graph ) =
                                            LUSF_NF.ffolToPrenex2 f
                                    in
                                    let
                                        f_ =
                                            LUSF_NF.ffolApplyQuantifiers cs g

                                        graph_ =
                                            LUSF_NF.prenexGraphToDOT graph
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.object <| [ ( "f", JSONE.string <| LUSF_SS.ffolToString f_ ), ( "g", JSONE.string <| graph_ ) ] }

                                "toSkolem" ->
                                    let
                                        f_ =
                                            LUSF_NF.ffolToSkolem f
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, result = f_, message = JSONE.string (LUSF_SS.ffolToString f_) }

                                _ ->
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 4, result = Insat, message = JSONE.string "undefined option for node of type transformFFOL" }

                        Nothing ->
                            { id = ( -1, -1 ), errorCode = 2, result = Insat, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin_id ++ ", " ++ String.fromInt sources.origin_slot ++ ")") }

                Err e ->
                    { id = ( -1, -1 ), errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { id = ( -1, -1 ), errorCode = 3, result = Insat, message = JSONE.string (JSOND.errorToString e) }


processTransformSetFOLNode : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, id : ( Int, Int ), succ_code : Int, result : { f : FormulaFOL, s : SetFOL, cs : ClauseFOLSet }, message : JSONE.Value }
processTransformSetFOLNode content outputsSPL =
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
                                            List.map LUSF_SS.ffolNegation fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 1, result = { result | s = fs_ }, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                "conj_all" ->
                                    let
                                        fs_ =
                                            LUSF_SS.sfolConjunction fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 2, result = { result | f = fs_ }, message = JSONE.string (LUSF_SS.ffolToString fs_) }

                                "disj_all" ->
                                    let
                                        fs_ =
                                            LUSF_SS.sfolDisjunction fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 3, result = { result | f = fs_ }, message = JSONE.string (LUSF_SS.ffolToString fs_) }

                                "∀-closure" ->
                                    let
                                        fs_ =
                                            List.map LUSF_SS.ffolUniversalClosure fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 4, result = { result | s = fs_ }, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                "∃-closure" ->
                                    let
                                        fs_ =
                                            List.map LUSF_SS.ffolExistentialClosure fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 5, result = { result | s = fs_ }, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                "toSkolem" ->
                                    let
                                        fs_ =
                                            LUSF_NF.sfolToSkolem fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 6, result = { result | s = fs_ }, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                "toCNF" ->
                                    let
                                        fs_ =
                                            LUSF_NF.sfolToCNF fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 7, result = { result | s = fs_ }, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                "toDNF" ->
                                    let
                                        fs_ =
                                            LUSF_NF.sfolToDNF fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 8, result = { result | s = fs_ }, message = JSONE.string (LUSF_SS.sfolToString fs_) }

                                "toClauses" ->
                                    let
                                        fs_ =
                                            LUSF_CS.sfolToClauses fs
                                    in
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 0, succ_code = 9, result = { result | cs = fs_ }, message = JSONE.string (LUSF_CS.csfolToString fs_) }

                                _ ->
                                    { id = ( sources.origin_id, sources.origin_slot ), errorCode = 4, succ_code = 0, result = result, message = JSONE.string "undefined option for node of type TransformSetFOL" }

                        Nothing ->
                            { id = ( -1, -1 ), errorCode = 2, succ_code = 0, result = result, message = JSONE.string ("Unknown source: (" ++ String.fromInt sources.origin_id ++ ", " ++ String.fromInt sources.origin_slot ++ ")") }

                Err e ->
                    { id = ( -1, -1 ), errorCode = 3, succ_code = 0, result = result, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { id = ( -1, -1 ), errorCode = 3, succ_code = 0, result = result, message = JSONE.string (JSOND.errorToString e) }


processClauseFOLNode : String -> { errorCode : Int, result : ClauseFOL, message : JSONE.Value }
processClauseFOLNode content =
    case LUSF_CS.cfolReadFromString content of
        ( Nothing, _, errDetails ) ->
            { errorCode = 1, result = [], message = JSONE.string errDetails }

        ( Just c, _, _ ) ->
            { errorCode = 0, result = c, message = JSONE.string (LUSF_CS.cfolToString c) }


processClauseSetFOLNode : String -> Dict.Dict ( Int, Int ) ClauseFOL -> Dict.Dict ( Int, Int ) SetFOL -> Dict.Dict ( Int, Int ) ClauseFOLSet -> { errorCode : Int, result : ClauseFOLSet, message : JSONE.Value }
processClauseSetFOLNode content outputsCFOL outputsSFOL outputsCSFOL =
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
                                    List.map LUSF_CS.cfolReadFromString ls

                                Just ( s, ls ) ->
                                    List.map LUSF_CS.cfolReadFromString (ls ++ [ s ])

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
                        { errorCode = 0, result = cs, message = JSONE.string (LUSF_CS.csfolToString cs) }

                "collect" ->
                    let
                        inputDecoder =
                            JSOND.list <| JSOND.map2 Tuple.pair (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
                    in
                    case JSOND.decodeString inputDecoder c.input of
                        Ok sources ->
                            let
                                cls =
                                    List.map (\x -> ( x, Dict.get x outputsCFOL )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) cls of
                                [] ->
                                    let
                                        cls_ =
                                            ListE.unique <| List.map (Maybe.withDefault [] << Tuple.second) cls
                                    in
                                    { errorCode = 0, result = cls_, message = JSONE.string (LUSF_CS.csfolToString cls_) }

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
                                    List.map (\x -> ( x, Dict.get x outputsCSFOL )) sources
                            in
                            case List.filter (MaybeE.isNothing << Tuple.second) clss of
                                [] ->
                                    let
                                        cls_ =
                                            List.foldl (\( _, cls ) ac -> uniqueConcatList ac (Maybe.withDefault [] cls)) [] clss
                                    in
                                    { errorCode = 0, result = cls_, message = JSONE.string (LUSF_CS.csfolToString cls_) }

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
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                                Just s ->
                                    let
                                        cls =
                                            List.map2 Tuple.pair s (List.map LUSF_CS.csfolFromCNF s)
                                    in
                                    case List.filter (MaybeE.isNothing << Tuple.second) cls of
                                        [] ->
                                            let
                                                cls_ =
                                                    LUSF_CS.csfolRemoveTautClauses <| LUSF_CS.csfolRemoveSubsumedClauses <| List.concat <| List.map (Maybe.withDefault [] << Tuple.second) cls
                                            in
                                            { errorCode = 0, result = cls_, message = JSONE.string (LUSF_CS.csfolToString cls_) }

                                        xs ->
                                            { errorCode = 1
                                            , result = []
                                            , message =
                                                JSONE.string
                                                    ("These formulas from the set are not in CNF"
                                                        ++ (String.join ". " <| List.map (LUSF_SS.ffolToString << Tuple.first) xs)
                                                    )
                                            }

                                Nothing ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ "," ++ String.fromInt source.origin_slot ++ ")") }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                "fromSetFOL" ->
                    let
                        inputDecoder =
                            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
                    in
                    case JSOND.decodeString inputDecoder c.input of
                        Ok source ->
                            case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                                Just s ->
                                    let
                                        cls_ =
                                            LUSF_CS.sfolToClauses s
                                    in
                                    { errorCode = 0, result = cls_, message = JSONE.string (LUSF_CS.csfolToString cls_) }

                                Nothing ->
                                    { errorCode = 2, result = [], message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ "," ++ String.fromInt source.origin_slot ++ ")") }

                        Err e ->
                            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }

                _ ->
                    { errorCode = 4, result = [], message = JSONE.string "undefined option for node of type SetFOL" }

        Err e ->
            { errorCode = 3, result = [], message = JSONE.string (JSOND.errorToString e) }


processHerbrandUniverseFOLNode : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, message : JSONE.Value }
processHerbrandUniverseFOLNode content outputsSFOL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { input = x, n = y }) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "n" ] JSOND.int)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                        Just fs ->
                            case LUSF_HWS.sfolHerbrandUniverse fs c.n of
                                Just s ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUSF_SS.termsToString s
                                    }

                                Nothing ->
                                    { errorCode = 1
                                    , message = JSONE.string "The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works"
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processHerbrandBaseFOLNode : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, message : JSONE.Value }
processHerbrandBaseFOLNode content outputsSFOL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { input = x, n = y }) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "n" ] JSOND.int)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                        Just fs ->
                            case LUSF_HWS.sfolHerbrandBase fs c.n of
                                Just s ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUSF_SS.sfolToString s
                                    }

                                Nothing ->
                                    { errorCode = 1
                                    , message = JSONE.string "The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works"
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processHerbrandInterpretationsFOLNode : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, message : JSONE.Value }
processHerbrandInterpretationsFOLNode content outputsSFOL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { input = x, n = y }) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "n" ] JSOND.int)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                        Just fs ->
                            case LUSF_HWS.sfolHerbrandInterpretations fs c.n of
                                Just s ->
                                    { errorCode = 0
                                    , message = JSONE.string <| String.join ";" <| List.map LUSF_SS.sfolToString s
                                    }

                                Nothing ->
                                    { errorCode = 1
                                    , message = JSONE.string "The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works"
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processHerbrandModelsFOLNode : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, message : JSONE.Value }
processHerbrandModelsFOLNode content outputsSFOL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { input = x, n = y }) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "n" ] JSOND.int)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                        Just fs ->
                            case LUSF_HWS.sfolHerbrandModels fs c.n of
                                Just ( _, s ) ->
                                    { errorCode = 0
                                    , message = JSONE.string <| String.join ";" <| List.map LUSF_SS.sfolToString s
                                    }

                                Nothing ->
                                    { errorCode = 1
                                    , message = JSONE.string "The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works"
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e) }


processHerbrandExtensionFOLNode : String -> Dict.Dict ( Int, Int ) SetFOL -> { errorCode : Int, result : SetPL, message : JSONE.Value }
processHerbrandExtensionFOLNode content outputsSFOL =
    let
        contentDecoder =
            JSOND.map2 (\x y -> { input = x, n = y }) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "n" ] JSOND.int)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSFOL of
                        Just fs ->
                            case LUSF_HWS.sfolHerbrandExtension fs c.n of
                                Just s ->
                                    { errorCode = 0
                                    , message = JSONE.string <| LUS_SS.splToString s
                                    , result = s
                                    }

                                Nothing ->
                                    { errorCode = 1
                                    , message = JSONE.string "The FOL set given contains quantifiers or equalities, that are forbidden in Herbrand Works"
                                    , result = []
                                    }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            , result = []
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = [] }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = [] }
