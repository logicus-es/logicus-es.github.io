module PLExtProcessors exposing (..)

import Dict exposing (Dict)
import Json.Decode as JSOND
import Json.Encode as JSONE
import LogicUS.PL.ForeignOperators exposing (canonicFO, fplConservativeRetraction, splConservativeRetraction)
import LogicUS.PL.SyntaxSemantics as LUS_SS exposing (FormulaPL(..), SetPL)


processForeignVarsFPL : String -> Dict ( Int, Int ) FormulaPL -> { errorCode : Int, result : FormulaPL, message : JSONE.Value }
processForeignVarsFPL content outputsFPL =
    let
        contentDecoder =
            JSOND.map3 (\x y z -> { option = x, input = y, vars = z }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "vars" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsFPL of
                        Just f ->
                            let
                                varsLecture =
                                    List.map LUS_SS.fplReadFromString <| String.split "," c.vars
                            in
                            if List.any (\( x, _, _ ) -> x == Nothing) varsLecture then
                                { errorCode = 1
                                , result = Insat
                                , message =
                                    JSONE.string
                                        (String.join "." <|
                                            List.indexedMap
                                                (\i ( _, _, m ) ->
                                                    if m /= "" then
                                                        "var" ++ String.fromInt i ++ " : " ++ m

                                                    else
                                                        ""
                                                )
                                                varsLecture
                                        )
                                }

                            else
                                let
                                    vars =
                                        LUS_SS.splSymbols <| List.map (\( x, _, _ ) -> Maybe.withDefault Insat x) varsLecture
                                in
                                case c.option of
                                    "canonicFO" ->
                                        let
                                            f_ =
                                                List.foldl (\v g -> canonicFO g v) f vars
                                        in
                                        { errorCode = 0
                                        , result = f_
                                        , message = JSONE.string <| LUS_SS.fplToString f_
                                        }

                                    _ ->
                                        { errorCode = 4
                                        , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ForeignVarsFPL")
                                        , result = Insat
                                        }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            , result = Insat
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = Insat }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = Insat }


processForeignVarsSPL : String -> Dict ( Int, Int ) SetPL -> { errorCode : Int, result : SetPL, message : JSONE.Value }
processForeignVarsSPL content outputsSPL =
    let
        contentDecoder =
            JSOND.map3 (\x y z -> { option = x, input = y, vars = z }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "vars" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                        Just fs ->
                            let
                                varsLecture =
                                    List.map LUS_SS.fplReadFromString <| String.split "," c.vars
                            in
                            if List.any (\( x, _, _ ) -> x == Nothing) varsLecture then
                                { errorCode = 1
                                , result = []
                                , message =
                                    JSONE.string
                                        (String.join "." <|
                                            List.indexedMap
                                                (\i ( _, _, m ) ->
                                                    if m /= "" then
                                                        "var" ++ String.fromInt i ++ " : " ++ m

                                                    else
                                                        ""
                                                )
                                                varsLecture
                                        )
                                }

                            else
                                let
                                    vars =
                                        LUS_SS.splSymbols <| List.map (\( x, _, _ ) -> Maybe.withDefault Insat x) varsLecture
                                in
                                case c.option of
                                    "canonicFO" ->
                                        let
                                            fs_ =
                                                List.foldl (\v gs -> List.map (\g -> canonicFO g v) gs) fs vars
                                        in
                                        { errorCode = 0
                                        , result = List.filter (\g -> Taut /= g) fs_
                                        , message = JSONE.string <| LUS_SS.splToString fs_
                                        }

                                    _ ->
                                        { errorCode = 4
                                        , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ForeignVarsSPL")
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


processConservativeRetractionFPL : String -> Dict ( Int, Int ) FormulaPL -> { errorCode : Int, result : FormulaPL, message : JSONE.Value }
processConservativeRetractionFPL content outputsFPL =
    let
        contentDecoder =
            JSOND.map3 (\x y z -> { option = x, input = y, vars = z }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "vars" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsFPL of
                        Just f ->
                            let
                                varsLecture =
                                    List.map LUS_SS.fplReadFromString <| String.split "," c.vars
                            in
                            if List.any (\( x, _, _ ) -> x == Nothing) varsLecture then
                                { errorCode = 1
                                , result = Insat
                                , message =
                                    JSONE.string
                                        (String.join "." <|
                                            List.indexedMap
                                                (\i ( _, _, m ) ->
                                                    if m /= "" then
                                                        "var" ++ String.fromInt i ++ " : " ++ m

                                                    else
                                                        ""
                                                )
                                                varsLecture
                                        )
                                }

                            else
                                let
                                    vars =
                                        LUS_SS.splSymbols <| List.map (\( x, _, _ ) -> Maybe.withDefault Insat x) varsLecture
                                in
                                case c.option of
                                    "canonicFO" ->
                                        let
                                            f_ =
                                                fplConservativeRetraction f vars
                                        in
                                        { errorCode = 0
                                        , result = f_
                                        , message = JSONE.string <| LUS_SS.fplToString f_
                                        }

                                    _ ->
                                        { errorCode = 4
                                        , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ConservativeRetractionFPL")
                                        , result = Insat
                                        }

                        Nothing ->
                            { errorCode = 2
                            , message = JSONE.string ("Unknown source: (" ++ String.fromInt source.origin_id ++ ", " ++ String.fromInt source.origin_slot ++ ")")
                            , result = Insat
                            }

                Err e ->
                    { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = Insat }

        Err e ->
            { errorCode = 3, message = JSONE.string (JSOND.errorToString e), result = Insat }


processConservativeRetractionSPL : String -> Dict ( Int, Int ) SetPL -> { errorCode : Int, result : SetPL, message : JSONE.Value }
processConservativeRetractionSPL content outputsSPL =
    let
        contentDecoder =
            JSOND.map3 (\x y z -> { option = x, input = y, vars = z }) (JSOND.at [ "option" ] JSOND.string) (JSOND.at [ "input" ] JSOND.string) (JSOND.at [ "vars" ] JSOND.string)

        inputDecoder =
            JSOND.map2 (\x y -> { origin_id = x, origin_slot = y }) (JSOND.at [ "origin_id" ] JSOND.int) (JSOND.at [ "origin_slot" ] JSOND.int)
    in
    case JSOND.decodeString contentDecoder content of
        Ok c ->
            case JSOND.decodeString inputDecoder c.input of
                Ok source ->
                    case Dict.get ( source.origin_id, source.origin_slot ) outputsSPL of
                        Just fs ->
                            let
                                varsLecture =
                                    List.map LUS_SS.fplReadFromString <| String.split "," c.vars
                            in
                            if List.any (\( x, _, _ ) -> x == Nothing) varsLecture then
                                { errorCode = 1
                                , result = []
                                , message =
                                    JSONE.string
                                        (String.join "." <|
                                            List.indexedMap
                                                (\i ( _, _, m ) ->
                                                    if m /= "" then
                                                        "var" ++ String.fromInt i ++ " : " ++ m

                                                    else
                                                        ""
                                                )
                                                varsLecture
                                        )
                                }

                            else
                                let
                                    vars =
                                        LUS_SS.splSymbols <| List.map (\( x, _, _ ) -> Maybe.withDefault Insat x) varsLecture
                                in
                                case c.option of
                                    "canonicFO" ->
                                        let
                                            fs_ =
                                                splConservativeRetraction fs vars
                                        in
                                        { errorCode = 0
                                        , result = List.filter (\g -> Taut /= g) fs_
                                        , message = JSONE.string <| LUS_SS.splToString fs_
                                        }

                                    _ ->
                                        { errorCode = 4
                                        , message = JSONE.string ("Unknown option (" ++ c.option ++ ") for ConservativeRetractionSPL")
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
