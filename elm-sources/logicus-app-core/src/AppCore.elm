port module AppCore exposing (..)

import Browser
import Dict exposing (Dict)
import FOLAlgProcessors exposing (..)
import FOLBasicProcessors exposing (..)
import Html exposing (div, text)
import Html.Attributes exposing (class)
import Json.Decode as JSOND exposing (Decoder)
import Json.Encode as JSONE
import LogicUS.FOL.Clauses as LUSF_CS
import LogicUS.FOL.SyntaxSemantics as LUSF_SS
import LogicUS.PL.CSP as LUS_CSP
import LogicUS.PL.Clauses as LUS_CS
import LogicUS.PL.HornRS as LUS_HRS exposing (..)
import LogicUS.PL.SyntaxSemantics as LUS_SS
import PLAlgProcessors exposing (..)
import PLBasicProcessors exposing (..)
import PLExtProcessors exposing (processConservativeRetractionFPL, processConservativeRetractionSPL, processForeignVarsFPL, processForeignVarsSPL)



-- Ports, Subscriptions and Messages


port sendMessage : String -> Cmd msg


port messageReceiver : (String -> msg) -> Sub msg


type Msg
    = Recv String


subscriptions : Model -> Sub Msg
subscriptions _ =
    messageReceiver Recv



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , view =
            \model ->
                div [ class "app-core" ]
                    [ div [] [ text <| "outputsFPL:" ++ modelDictToString model.outputsFPL LUS_SS.fplToString ]
                    , div [] [ text <| "outputsSPL:" ++ modelDictToString model.outputsSPL LUS_SS.splToString ]
                    , div [] [ text <| "outputsCPL:" ++ modelDictToString model.outputsCPL LUS_CS.cplToString ]
                    , div [] [ text <| "outputsCSPL:" ++ modelDictToString model.outputsCSPL LUS_CS.csplToString ]
                    , div [] [ text <| "outputsFFOL:" ++ modelDictToString model.outputsFFOL LUSF_SS.ffolToString ]
                    , div [] [ text <| "outputsSFOL:" ++ modelDictToString model.outputsSFOL LUSF_SS.sfolToString ]
                    ]
        , update = update
        , subscriptions = subscriptions
        }



-- MODEL


modelDictToString : Dict ( Int, Int ) a -> (a -> String) -> String
modelDictToString outputs ftoString =
    String.join ", " <| List.map (\( ( i, s ), v ) -> "(" ++ String.fromInt i ++ ", " ++ String.fromInt s ++ "): " ++ ftoString v) <| Dict.toList outputs


type alias Model =
    { outputsFPL : Dict ( Int, Int ) LUS_SS.FormulaPL
    , outputsSPL : Dict ( Int, Int ) LUS_SS.SetPL
    , outputsCPL : Dict ( Int, Int ) LUS_CS.ClausePL
    , outputsCSPL : Dict ( Int, Int ) LUS_CS.ClausePLSet
    , outputsFHRS : Dict ( Int, Int ) LUS_HRS.HornFact
    , outputsKBHRS : Dict ( Int, Int ) LUS_HRS.HornKB
    , outputsRHRS : Dict ( Int, Int ) LUS_HRS.HornRule
    , outputsRSHRS : Dict ( Int, Int ) (List LUS_HRS.HornRule)
    , outputsFFOL : Dict ( Int, Int ) LUSF_SS.FormulaFOL
    , outputsSFOL : Dict ( Int, Int ) LUSF_SS.SetFOL
    , outputsCFOL : Dict ( Int, Int ) LUSF_CS.ClauseFOL
    , outputsCSFOL : Dict ( Int, Int ) LUSF_CS.ClauseFOLSet
    , outputsCSPPL : Dict ( Int, Int ) (List LUS_CSP.BigFPL)
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( { outputsFPL = Dict.empty
      , outputsSPL = Dict.empty
      , outputsCPL = Dict.empty
      , outputsCSPL = Dict.empty
      , outputsFHRS = Dict.empty
      , outputsKBHRS = Dict.empty
      , outputsRHRS = Dict.empty
      , outputsRSHRS = Dict.empty
      , outputsFFOL = Dict.empty
      , outputsSFOL = Dict.empty
      , outputsCFOL = Dict.empty
      , outputsCSFOL = Dict.empty
      , outputsCSPPL = Dict.empty
      }
    , Cmd.none
    )



-- Message handler


type alias Query =
    { nodeId : Int
    , nodeType : String
    , content : String
    }


queryDecoder : Decoder Query
queryDecoder =
    JSOND.map3 Query
        (JSOND.at [ "nodeId" ] JSOND.int)
        (JSOND.at [ "nodeType" ] JSOND.string)
        (JSOND.at [ "content" ] JSOND.string)


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Recv s ->
            case JSOND.decodeString queryDecoder s of
                Ok q ->
                    case q.nodeType of
                        "ClearModel" ->
                            init ()

                        "RemoveNode" ->
                            ( { model
                                | outputsFPL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsFPL
                                , outputsSPL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsSPL
                                , outputsCPL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsCPL
                                , outputsCSPL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsCSPL
                                , outputsFHRS = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsFHRS
                                , outputsKBHRS = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsKBHRS
                                , outputsRHRS = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsRHRS
                                , outputsRSHRS = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsRSHRS
                                , outputsFFOL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsFFOL
                                , outputsSFOL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsSFOL
                                , outputsCFOL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsCFOL
                                , outputsCSFOL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsCSFOL
                                , outputsCSPPL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsCSPPL
                              }
                            , Cmd.none
                            )

                        "FormulaPL" ->
                            let
                                pq =
                                    processFormulaPLNode q.content
                            in
                            ( { model
                                | outputsFPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFPL

                                    else
                                        model.outputsFPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "SetPL" ->
                            let
                                pq =
                                    processSetPLNode q.content model.outputsFPL model.outputsSPL
                            in
                            ( { model
                                | outputsSPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsSPL

                                    else
                                        model.outputsSPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ConnectivePL" ->
                            let
                                pq =
                                    processConnectivePLNode q.content model.outputsFPL
                            in
                            ( { model
                                | outputsFPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFPL

                                    else
                                        model.outputsFPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "TransformFPL" ->
                            let
                                pq =
                                    processTransformFPLNode q.content model.outputsFPL
                            in
                            ( { model
                                | outputsFPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFPL

                                    else
                                        model.outputsFPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "TransformSetPL" ->
                            let
                                pq =
                                    processTransformSetPLNode q.content model.outputsSPL
                            in
                            if pq.errorCode == 0 then
                                let
                                    model_ =
                                        { model
                                            | outputsFPL = Dict.filter (\( kid, _ ) _ -> kid /= q.nodeId) model.outputsFPL
                                            , outputsSPL = Dict.filter (\( kid, _ ) _ -> kid /= q.nodeId) model.outputsSPL
                                            , outputsCSPL = Dict.filter (\( kid, _ ) _ -> kid /= q.nodeId) model.outputsCSPL
                                        }
                                in
                                ( case pq.succ_code of
                                    1 ->
                                        { model_ | outputsSPL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSPL }

                                    2 ->
                                        { model_ | outputsFPL = Dict.insert ( q.nodeId, 0 ) pq.result.f model.outputsFPL }

                                    3 ->
                                        { model_ | outputsFPL = Dict.insert ( q.nodeId, 0 ) pq.result.f model.outputsFPL }

                                    4 ->
                                        { model_ | outputsSPL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSPL }

                                    5 ->
                                        { model_ | outputsSPL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSPL }

                                    _ ->
                                        { model_ | outputsCSPL = Dict.insert ( q.nodeId, 0 ) pq.result.cs model.outputsCSPL }
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "ClausePL" ->
                            let
                                pq =
                                    processClausePLNode q.content
                            in
                            ( { model
                                | outputsCPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsCPL

                                    else
                                        model.outputsCPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ClauseSetPL" ->
                            let
                                pq =
                                    processClauseSetPLNode q.content model.outputsCPL model.outputsSPL model.outputsCSPL
                            in
                            ( { model
                                | outputsCSPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsCSPL

                                    else
                                        model.outputsCSPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HornFactPL" ->
                            let
                                pq =
                                    processHornFactPLNode q.content
                            in
                            ( { model
                                | outputsFHRS =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFHRS

                                    else
                                        model.outputsFHRS
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HornFactSetPL" ->
                            let
                                pq =
                                    processHornFactSetPLNode q.content model.outputsFHRS model.outputsKBHRS
                            in
                            ( { model
                                | outputsKBHRS =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsKBHRS

                                    else
                                        model.outputsKBHRS
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HornRulePL" ->
                            let
                                pq =
                                    processHornRulePLNode q.content model.outputsFHRS model.outputsKBHRS
                            in
                            ( { model
                                | outputsRHRS =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsRHRS

                                    else
                                        model.outputsRHRS
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HornRuleSetPL" ->
                            let
                                pq =
                                    processHornRuleSetPLNode q.content model.outputsRHRS model.outputsRSHRS
                            in
                            ( { model
                                | outputsRSHRS =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsRSHRS

                                    else
                                        model.outputsRSHRS
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HornFwChPL" ->
                            let
                                pq =
                                    processHornFwChPL q.content model.outputsRSHRS model.outputsKBHRS model.outputsFHRS
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HornBWCh" ->
                            let
                                pq =
                                    processHornBwChPL q.content model.outputsRSHRS model.outputsKBHRS model.outputsFHRS
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "SemanticTableauPL" ->
                            let
                                pq =
                                    processSemanticTableauPL q.content model.outputsSPL
                            in
                            if pq.errorCode == 0 then
                                case pq.resultMode of
                                    1 ->
                                        ( { model
                                            | outputsSPL =
                                                Dict.union
                                                    (Dict.fromList (List.indexedMap (\i ls -> ( ( q.nodeId, i ), ls )) pq.result.sspl))
                                                    model.outputsSPL
                                            , outputsFPL = Dict.remove ( q.nodeId, 0 ) model.outputsFPL
                                          }
                                        , sendMessage <|
                                            JSONE.encode 0 <|
                                                JSONE.object
                                                    [ ( "errorCode", JSONE.int 0 )
                                                    , ( "nodeId", JSONE.int q.nodeId )
                                                    , ( "message", pq.message )
                                                    ]
                                        )

                                    _ ->
                                        ( { model
                                            | outputsFPL = Dict.insert ( q.nodeId, 0 ) pq.result.fpl model.outputsFPL
                                            , outputsSPL = Dict.filter (\k _ -> Tuple.first k /= q.nodeId) model.outputsSPL
                                          }
                                        , sendMessage <|
                                            JSONE.encode 0 <|
                                                JSONE.object
                                                    [ ( "errorCode", JSONE.int 0 )
                                                    , ( "nodeId", JSONE.int q.nodeId )
                                                    , ( "message", pq.message )
                                                    ]
                                        )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "TruthTablePL" ->
                            let
                                pq =
                                    processTruthTablePL q.content model.outputsFPL model.outputsSPL
                            in
                            if pq.errorCode == 0 then
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int 0 )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "ResolutionPL" ->
                            let
                                pq =
                                    processResolutionPL q.content model.outputsCSPL
                            in
                            if pq.errorCode == 0 then
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int 0 )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "ResolutionGraphPL" ->
                            let
                                pq =
                                    processResolutionGraphPL q.content model.outputsCSPL
                            in
                            if pq.errorCode == 0 then
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int 0 )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "DPLLGraphPL" ->
                            let
                                pq =
                                    processDPLLGraphPL q.content model.outputsCSPL
                            in
                            if pq.errorCode == 0 then
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int 0 )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "FormulaFOL" ->
                            let
                                pq =
                                    processFormulaFOLNode q.content
                            in
                            ( { model
                                | outputsFFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFFOL

                                    else
                                        model.outputsFFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "TransformFFOL" ->
                            let
                                pq =
                                    processTransformFFOLNode q.content model.outputsFFOL
                            in
                            ( { model
                                | outputsFFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFFOL

                                    else
                                        model.outputsFFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "SetFOL" ->
                            let
                                pq =
                                    processSetFOLNode q.content model.outputsFFOL model.outputsSFOL
                            in
                            ( { model
                                | outputsSFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsSFOL

                                    else
                                        model.outputsSFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "TransformSetFOL" ->
                            let
                                pq =
                                    processTransformSetFOLNode q.content model.outputsSFOL
                            in
                            if pq.errorCode == 0 then
                                let
                                    model_ =
                                        { model
                                            | outputsFPL = Dict.filter (\( kid, _ ) _ -> kid /= q.nodeId) model.outputsFPL
                                            , outputsSPL = Dict.filter (\( kid, _ ) _ -> kid /= q.nodeId) model.outputsSPL
                                            , outputsCSPL = Dict.filter (\( kid, _ ) _ -> kid /= q.nodeId) model.outputsCSPL
                                        }
                                in
                                ( case pq.succ_code of
                                    1 ->
                                        { model_ | outputsSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSFOL }

                                    2 ->
                                        { model_ | outputsFFOL = Dict.insert ( q.nodeId, 0 ) pq.result.f model.outputsFFOL }

                                    3 ->
                                        { model_ | outputsFFOL = Dict.insert ( q.nodeId, 0 ) pq.result.f model.outputsFFOL }

                                    4 ->
                                        { model_ | outputsSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSFOL }

                                    5 ->
                                        { model_ | outputsSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSFOL }

                                    6 ->
                                        { model_ | outputsSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSFOL }

                                    7 ->
                                        { model_ | outputsSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSFOL }

                                    8 ->
                                        { model_ | outputsSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.s model.outputsSFOL }

                                    _ ->
                                        { model_ | outputsCSFOL = Dict.insert ( q.nodeId, 0 ) pq.result.cs model.outputsCSFOL }
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "ConnectiveFOL" ->
                            let
                                pq =
                                    processConnectiveFOLNode q.content model.outputsFFOL
                            in
                            ( { model
                                | outputsFFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFFOL

                                    else
                                        model.outputsFFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "QuantifierFOL" ->
                            let
                                pq =
                                    processQuantifierFOLNode q.content model.outputsFFOL
                            in
                            ( { model
                                | outputsFFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFFOL

                                    else
                                        model.outputsFFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ClauseFOL" ->
                            let
                                pq =
                                    processClauseFOLNode q.content
                            in
                            ( { model
                                | outputsCFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsCFOL

                                    else
                                        model.outputsCFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ClauseSetFOL" ->
                            let
                                pq =
                                    processClauseSetFOLNode q.content model.outputsCFOL model.outputsSFOL model.outputsCSFOL
                            in
                            ( { model
                                | outputsCSFOL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsCSFOL

                                    else
                                        model.outputsCSFOL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "SemanticTableauFOL" ->
                            let
                                pq =
                                    processSemanticTableauFOL q.content model.outputsSFOL
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ResolutionGraphFOL" ->
                            let
                                pq =
                                    processResolutionGraphFOL q.content model.outputsCSFOL
                            in
                            if pq.errorCode == 0 then
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int 0 )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                            else
                                ( model
                                , sendMessage <|
                                    JSONE.encode 0 <|
                                        JSONE.object
                                            [ ( "errorCode", JSONE.int pq.errorCode )
                                            , ( "nodeId", JSONE.int q.nodeId )
                                            , ( "message", pq.message )
                                            ]
                                )

                        "HerbrandUniverseFOL" ->
                            let
                                pq =
                                    processHerbrandUniverseFOLNode q.content model.outputsSFOL
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HerbrandBaseFOL" ->
                            let
                                pq =
                                    processHerbrandBaseFOLNode q.content model.outputsSFOL
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HerbrandInterpretationsFOL" ->
                            let
                                pq =
                                    processHerbrandInterpretationsFOLNode q.content model.outputsSFOL
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HerbrandModelsFOL" ->
                            let
                                pq =
                                    processHerbrandModelsFOLNode q.content model.outputsSFOL
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "HerbrandExtensionFOL" ->
                            let
                                pq =
                                    processHerbrandExtensionFOLNode q.content model.outputsSFOL
                            in
                            ( { model
                                | outputsSPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsSPL

                                    else
                                        model.outputsSPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "CSPPL" ->
                            let
                                pq =
                                    processCSPPL q.content
                            in
                            case pq.result of
                                [] ->
                                    ( model
                                    , sendMessage <|
                                        JSONE.encode 0 <|
                                            JSONE.object
                                                [ ( "errorCode", JSONE.int pq.errorCode )
                                                , ( "nodeId", JSONE.int q.nodeId )
                                                , ( "message", pq.message )
                                                ]
                                    )

                                bfs ->
                                    ( { model
                                        | outputsCSPPL =
                                            if pq.errorCode == 0 then
                                                Dict.insert ( q.nodeId, 0 ) bfs model.outputsCSPPL

                                            else
                                                model.outputsCSPPL
                                      }
                                    , sendMessage <|
                                        JSONE.encode 0 <|
                                            JSONE.object
                                                [ ( "errorCode", JSONE.int pq.errorCode )
                                                , ( "nodeId", JSONE.int q.nodeId )
                                                , ( "message", pq.message )
                                                ]
                                    )

                        "CSPPLtoDIMACS" ->
                            let
                                pq =
                                    processCSPPLToDIMACS q.content model.outputsCSPPL
                            in
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ForeignVarsFPL" ->
                            let
                                pq =
                                    processForeignVarsFPL q.content model.outputsFPL
                            in
                            ( { model
                                | outputsFPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFPL

                                    else
                                        model.outputsFPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ForeignVarsSPL" ->
                            let
                                pq =
                                    processForeignVarsSPL q.content model.outputsSPL
                            in
                            ( { model
                                | outputsSPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsSPL

                                    else
                                        model.outputsSPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ConservativeRetractFPL" ->
                            let
                                pq =
                                    processConservativeRetractionFPL q.content model.outputsFPL
                            in
                            ( { model
                                | outputsFPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsFPL

                                    else
                                        model.outputsFPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        "ConservativeRetractSPL" ->
                            let
                                pq =
                                    processConservativeRetractionSPL q.content model.outputsSPL
                            in
                            ( { model
                                | outputsSPL =
                                    if pq.errorCode == 0 then
                                        Dict.insert ( q.nodeId, 0 ) pq.result model.outputsSPL

                                    else
                                        model.outputsSPL
                              }
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int pq.errorCode )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", pq.message )
                                        ]
                            )

                        _ ->
                            ( model
                            , sendMessage <|
                                JSONE.encode 0 <|
                                    JSONE.object
                                        [ ( "errorCode", JSONE.int 1 )
                                        , ( "nodeId", JSONE.int q.nodeId )
                                        , ( "message", JSONE.string <| "Error : nodeType " ++ q.nodeType ++ " not available in core" )
                                        ]
                            )

                Err e ->
                    ( model
                    , sendMessage <|
                        JSONE.encode 0 <|
                            JSONE.object
                                [ ( "errorCode", JSONE.int -1 )
                                , ( "message", JSONE.string <| "Error - Undecodable message : " ++ JSOND.errorToString e )
                                ]
                    )
