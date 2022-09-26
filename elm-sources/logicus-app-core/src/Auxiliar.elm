module Auxiliar exposing (..)

import LogicUS.FOL.SyntaxSemantics exposing (Variable)
import LogicUS.PL.SyntaxSemantics exposing (FormulaPL(..))
import Parser exposing ((|.), (|=), Parser, Trailing(..))


uniqueConcatList : List a -> List a -> List a
uniqueConcatList xs ys =
    List.foldl
        (\x ac ->
            if List.member x ac then
                ac

            else
                ac ++ [ x ]
        )
        xs
        ys


fplInteriorizeAllNeg2 : FormulaPL -> FormulaPL
fplInteriorizeAllNeg2 f =
    let
        fplInteriorizeAllNeg2Aux p =
            case p of
                Atom x ->
                    Neg (Atom x)

                Neg x ->
                    fplInteriorizeAllNeg2 x

                Conj x y ->
                    Disj (fplInteriorizeAllNeg2Aux x) (fplInteriorizeAllNeg2Aux y)

                Disj x y ->
                    Conj (fplInteriorizeAllNeg2Aux x) (fplInteriorizeAllNeg2Aux y)

                Impl x y ->
                    Neg <| Impl (fplInteriorizeAllNeg2 x) (fplInteriorizeAllNeg2 y)

                Equi x y ->
                    Neg <| Equi (fplInteriorizeAllNeg2 x) (fplInteriorizeAllNeg2 y)

                Insat ->
                    Taut

                Taut ->
                    Insat
    in
    case f of
        Atom x ->
            Atom x

        Neg x ->
            fplInteriorizeAllNeg2Aux x

        Conj x y ->
            Conj (fplInteriorizeAllNeg2 x) (fplInteriorizeAllNeg2 y)

        Disj x y ->
            Disj (fplInteriorizeAllNeg2 x) (fplInteriorizeAllNeg2 y)

        Impl x y ->
            Impl (fplInteriorizeAllNeg2 x) (fplInteriorizeAllNeg2 y)

        Equi x y ->
            Equi (fplInteriorizeAllNeg2 x) (fplInteriorizeAllNeg2 y)

        Insat ->
            Insat

        Taut ->
            Taut


fplInteriorizeAllDisj2 : FormulaPL -> FormulaPL
fplInteriorizeAllDisj2 f =
    case f of
        Atom _ ->
            f

        Disj (Conj f1 f2) g ->
            fplInteriorizeAllDisj2 <| Conj (Disj f1 g) (Disj f2 g)

        Disj g (Conj f1 f2) ->
            fplInteriorizeAllDisj2 <| Conj (Disj g f1) (Disj g f2)

        Conj f1 f2 ->
            Conj (fplInteriorizeAllDisj2 f1) (fplInteriorizeAllDisj2 f2)

        Disj f1 f2 ->
            let
                g1 =
                    fplInteriorizeAllDisj2 f1

                g2 =
                    fplInteriorizeAllDisj2 f2
            in
            case g1 of
                Conj x1 y1 ->
                    case g2 of
                        Conj x2 y2 ->
                            fplInteriorizeAllDisj2 <| Disj (Conj x1 y1) (Conj x2 y2)

                        x2 ->
                            fplInteriorizeAllDisj2 <| Disj (Conj x1 y1) x2

                x1 ->
                    case g2 of
                        Conj x2 y2 ->
                            fplInteriorizeAllDisj2 <| Disj x1 (Conj x2 y2)

                        x2 ->
                            Disj x1 x2

        _ ->
            f


fplInteriorizeAllConj2 : FormulaPL -> FormulaPL
fplInteriorizeAllConj2 f =
    case f of
        Atom _ ->
            f

        Conj (Disj f1 f2) g ->
            fplInteriorizeAllConj2 <| Disj (Conj f1 g) (Conj f2 g)

        Conj g (Disj f1 f2) ->
            fplInteriorizeAllConj2 <| Disj (Conj g f1) (Conj g f2)

        Disj f1 f2 ->
            Disj (fplInteriorizeAllConj2 f1) (fplInteriorizeAllConj2 f2)

        Conj f1 f2 ->
            let
                g1 =
                    fplInteriorizeAllConj2 f1

                g2 =
                    fplInteriorizeAllConj2 f2
            in
            case g1 of
                Disj x1 y1 ->
                    case g2 of
                        Disj x2 y2 ->
                            fplInteriorizeAllConj2 <| Conj (Disj x1 y1) (Disj x2 y2)

                        x2 ->
                            fplInteriorizeAllConj2 <| Conj (Disj x1 y1) x2

                x1 ->
                    case g2 of
                        Disj x2 y2 ->
                            fplInteriorizeAllConj2 <| Conj x1 (Disj x2 y2)

                        x2 ->
                            Conj x1 x2

        _ ->
            f


folVariableParser : Parser Variable
folVariableParser =
    Parser.oneOf
        [ Parser.succeed identity
            |= Parser.backtrackable folVarSubSuperIndexedParser
        , Parser.succeed identity
            |= Parser.backtrackable folVarSubindexedParser
        , Parser.succeed identity
            |= Parser.backtrackable folVarSupindexedParser
        , Parser.succeed (\x -> ( x, [], 0 ))
            |= folVarNameParser
        ]


folVarNameParser : Parser String
folVarNameParser =
    Parser.succeed ()
        |. Parser.chompIf Char.isUpper
        |. Parser.chompWhile Char.isAlpha
        |> Parser.getChompedString


folVarSubindexedParser : Parser Variable
folVarSubindexedParser =
    Parser.succeed (\x y -> ( x, y, 0 ))
        |= folVarNameParser
        |= Parser.sequence
            { start = "_{"
            , separator = ","
            , end = "}"
            , spaces = Parser.spaces
            , item = Parser.int
            , trailing = Forbidden
            }


folVarSupindexedParser : Parser Variable
folVarSupindexedParser =
    Parser.succeed (\x y -> ( x, [], y ))
        |= folVarNameParser
        |. Parser.symbol "^{"
        |= Parser.int
        |. Parser.symbol "}"


folVarSubSuperIndexedParser : Parser Variable
folVarSubSuperIndexedParser =
    Parser.succeed (\x y z -> ( x, y, z ))
        |= folVarNameParser
        |= Parser.sequence
            { start = "_{"
            , separator = ","
            , end = "}"
            , spaces = Parser.spaces
            , item = Parser.int
            , trailing = Forbidden
            }
        |. Parser.symbol "^{"
        |= Parser.int
        |. Parser.symbol "}"
