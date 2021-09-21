---
elm:
  dependencies:
    logicUSLIB/logicus-pl : latest
---

# Problema de las puertas y el prisionero
Un rey somete a un prisionero a la siguiente prueba: lo enfrenta a tres puertas, de las que el prisionero debe elegir una, y entrar en la habitación correspondiente. Se informa al prisionero que en dos de las habitaciones hay sendos tigres, y en la otra un caballo que le permite escapar. Como es natural, el prisionero debe elegir la puerta que le lleva al caballo para no ser devorado por el tigre. Para ayudarle, en cada puerta hay un letrero:

- Puerta 1: en esta habitación hay un tigre
- Puerta 2: en esta habitación está la dama
- Puerta 3: en esta habitación está la dama

Evidentemente los tres letreros no pueden ser verdaderos. EL rey informó al prisionero de cuántos letreros como mínimo eran falsos de forma que el prisionero pudo deducir la habitación en la que se encontraba el caballo. Entonces, ¿cuántos letreros, a lo sumo, pueden ser ciertos?

## Solución

Sea $p_i$ una variable proposicional que indica si el letrero de dicha puerta es verdadero. 

```elm {l context="1"}
import LogicUS.PL.SyntaxSemantics exposing (..)
```

Podemos modelar el problema con el siguiente conjunto de fórmulas:

$$\left\lbrace p_1 \rightarrow (p_2 \leftrightarrow \neg p_3), \neg p_1 \rightarrow \neg p_2 \wedge \neg p_3, p_2 \rightarrow p_1 \wedge \neg p_3,  \neg p_2  \rightarrow (p_1 \leftrightarrow p_3), p_3 \rightarrow p_1 \wedge p_2,  \neg p_3 \rightarrow (p_1 \leftrightarrow p_2)\right\rbrace $$

De forma que en LogicUS definiríamos dicho conjunto como:


```elm {l context="1" id="1"}
f1 : FormulaPL
f1 = fplReadExtraction <| fplReadFromString <| "p_{1} -> (p_{2} <-> ¬p_{3})"

f2 : FormulaPL
f2 = fplReadExtraction <| fplReadFromString <| "¬ p_{1} -> ¬p_{2} & ¬p_{3}"

f3 : FormulaPL
f3 = fplReadExtraction <| fplReadFromString <| "p_{2} -> p_{1} & ¬ p_{3}"

f4 : FormulaPL
f4 = fplReadExtraction <| fplReadFromString <| "¬ p_{2} -> (p_{1} <-> p_{3})"

f5 : FormulaPL
f5 = fplReadExtraction <| fplReadFromString <| "p_{3} -> p_{1} & ¬p_{2}"

f6 : FormulaPL
f6 = fplReadExtraction <| fplReadFromString <| "¬ p_{3} -> (p_{1} <-> p_{2})"

u : SetPL 
u = [f1,f2,f3,f4,f5, f6]
```

Que corresponde justamente con el que hemos propuesto.


```elm {l m context="1"}
repr_u : String
repr_u = "$$" ++ (splToMathString u) ++ "$$"
```

Ahora, dado que se dice cuántas como mínimo son falsas, tal que el problema sea inambiguamente resoluble, entonces veamos qué ocurre si al menos 1 es falsa. Entonces tenemos las interpretaciones tal que o una sola es falsa, o dos son falsas, o las tres son falsas:

```elm {l context="1"}
-- p1 es falsa
i1 : Interpretation
i1 = [("p",[2]), ("p",[3])]

--p2 es falsa
i2 : Interpretation
i2 = [("p",[1]), ("p",[3])]

--p3 es falsa
i3 : Interpretation
i3 = [("p",[1]), ("p",[2])]

-- p1 y p2 son falsas
i4 : Interpretation
i4 = [("p",[3])]

-- p1 y p3 son falsas
i5 : Interpretation
i5 = [("p",[2])]

-- p2 y p3 son falsas
i6 : Interpretation
i6 = [("p",[1])]

-- p1, p2 y p3 son falsas
i7 : Interpretation
i7 = []
```

Ahora podríamos evaluar el conjunto respecto a dichas interpretaciones, evaluando cada fórmula y tomando la conjunción de las evaluaciones. Por ejemplo para `i1`:

```elm {l r context="1"}
vf11 : Bool
vf11 = fplValuation f1 i1
```

```elm {l r context="1"}
vf21 : Bool
vf21 = fplValuation f2 i1
```

<br> No hace falta seguir evaluando las demás fórmulas, la evaluación del conjunto sería falsa, dada la propiedad $A \wedge F = F$. En efecto:

```elm {l r context="1"}
vu1 : Bool
vu1 = splValuation u i1
```

<br> Podríamos seguir con el resto, pero esto es prácticamente el cálculo de la tabla de verdad (excepto para el caso todos verdaderos que es claramente falso). Representemos la tabla de verdad para el conjunto:

```elm {l m context="2" follows="1"}
truthtable_u : String
truthtable_u = "$$" ++ (splTruthTableMathString u) ++ "$$"
```

O en su versión compacta:

```elm {l m context="3" follows="1"}
truthtable_u : String
truthtable_u = "$$" ++ (splCompactTruthTableMathString u) ++ "$$"
```

Luego, si el rey dijese que al menos una es falsa habría ambigüedad ya que podría darse el primer, el sexto o el septimo caso. Sin embargo si el rey le dice que al menos dos son falsos no hay ambigüedad alguna, se ha de dar necesariamente el primer caso, esto es, todas son falsas.


