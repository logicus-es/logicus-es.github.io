# Uso de Litvis

## Contenidos

1.  [Documentos en Litvis](#1-documentos-en-litvis)
2.  [Elm chunks](#2-elm-chunks)
3.  [Triple hat chunks](#3-triple-hat-chunks)
4.  [DOT chunks](#4-dot-chunks)
5.  [Configuración de Elm](#5-configuración-de-elm)

## 1. Documentos en Litvis

Un documento litvis corresponde a un archivo markdown que utiliza algunas características especiales que han de ser renderizadas utilizando el visualizador litvis. 

En él se pueden incluir todos los elementos que se incluyen en un documento markdown pero además incluye algunas características que le otorgan una potencia mayor.

Durante este documento iremos presentando algunos de los conceptos fundamentales que harán falta para poder crear y entender los documentos de prácticas que se verán a lo largo de la asignatura.

## 2. Elm-chunks
    Corresponden a bloques de código elm ejecutables. 

### 2.1 Sintáxis

````markdown
```elm {...attributes}
...
```
````

### 2.2 Description

Al igual que cualquier otro bloque de código (chunk) de markdown-litvis, un elm-chunk se abre y se cierra con tres comillas invertidas (\`\`\`). La referencia del lenguaje *elm* debe seguir inmediatamente a las comillas inversas **sin espacio**. Los argumentos que determinan el comportamiento del bloque deben colocarse encerrados por llaves "{...}" y separados por espacios y sin saltos de línea.

Los atributos han de ser descritos de acuerdo a las siguientes reglas:

- Los atributos que corresponden a pares atributo-valor que son especificados como *tag=value*. La aparición solamente de la etiqueta es considerada como *tag=True*.

- No se admiten espacios ni antes ni después del igual, sino que ha de corresponder estríctamente al patrón descrito *tag=value* (o según el caso sólo *tag*).

- Los corchetes denotan un array de valores, separados por comas Square brackets indicate an array of values. Si el valor contuviese comas, espacios o punto y coma debe utilizarse la barra invertida como símbolo de escape (e.g.`\,`).

- Los valores pueden ir entre comullas (\", \' and \`) habilitando que contengan espacios o algunos caracacteres de control como `=`, `[ ]` or `( )`. También se pueeden utilizar las comillas dentro de los valores pero han de ir precedidas por la barra invertida de escape.En general no serán necesarias.

Los atributos permitidos en los elm-chunks son:

- `l` (o `literate`) es un indicador de un bloque de código alfabetizado, que lo diferencia de un bloque de código de markdown standard. De forma predeterminada, cualquier declaración de Elm es accesible en otros bloques de código alfabetizados dentro del documento. Si `l = hidden`, el código aún se evalúa pero su fuente no se muestra en la salida renderizada. Esto es útil para el código de configuración, como declaraciones de importación y casos en los que la implementación no es fundamental para la narrativa.

- `r` (o` raw`) indica que se espera que el bloque de código imprima el valor bruto de una función o funciones. Esto puede ser útil para 'Elm alfabetizado' donde se mostrará el valor generado por una función. Si no se asigna ningún valor a `r`, se renderiza la última variable definida en el bloque de código.

- `m` (o` markdown`) funciona de manera similar a `r` pero la salida sin procesar se interpreta como markdown. Esto permite que una función elm genere una salida formateada, por ejemplo con el uso de '$...$' para la representación de las fórmulas como latex.

- `j` (o` json`) funciona igual que `r` /` raw` excepto que el valor se analiza como JSON y se formatea. NO SE HARÁ USO DEL MISMO.

- `v` (o` visualize`) indica que se espera que el bloque de código genere algún resultado en este punto del documento. El formato de esta salida está determinado por el contenido de un símbolo o una expresión a representar. Actualmente, las especificaciones Vega-Lite y Vega generadas por [elm-vegalite] (https://package.elm-lang.org/packages/gicentre/elm-vegalite/latest/VegaLite) y [elm-vega] (https: / /package.elm-lang.org/packages/gicentre/elm-vega/latest/Vega) son compatibles. Si no se asigna ningún valor a `v`, se utiliza el último símbolo definido en el bloque de código. NO SE HARÁ USO DEL MISMO.

- `context` es un atributo que permite el aislamiento de código dentro de un documento. Los bloques de código en diferentes contextos funcionan en paralelo y no comparten importaciones ni declaraciones de símbolos. Todos los bloques pertenecen a un contexto "predeterminado" implícito si el atributo no está definido. Los contextos se evalúan de forma independiente, lo que reduce la propagación de los errores de compilación de Elm y los conflictos de espacios de nombres (en un mismo contexto no pueden aparecer dos declaraciones para la misma variable).

- `id` asigna un identificador a un bloque de código para que pueda ser referenciado en otros bloques de código (ver`follows`).

- `follows` se puede usar en el primer bloque de código de un nuevo contexto para derivar de un contexto existente. Esto hace que las declaraciones e importaciones definidas antes del bloque referenciado y de su mismo contexto sean heredadas por el nuevo contexto. Muy útil para definir una única vez los imports en vez de tener que hacerlo al inicio de cada contextp

- Otros :`i`, `s`, `interactive` (NO SE UTILIZAN)

Además hay que tener en cuenta dos cuestiones adicionales:

- El orden de `l`,` v`, `r`,` m` o `j` en los atributos determina el orden de representación.

- No es necesario definir `l` para alfabetizar el bloque de código si ya se han dado` v`, `r`,` m` o `j` (esto implica` l =hidden`, sí es necesario poner `l` si se desea que sí sea visible).



## 3. Triple hat chunks

Renderizan el resultado de la llamada en cualquier parte del documento markdown-litvis.

### 3.1 Sintáxis

`^^^elm {...attributes}^^^`

### 3.2 Descripción

Permiten la representación en línea o llamadas repetidas a la misma representación dentro de un documento. Usan la misma sintaxis de atributos que los bloques de código alfabetizados y reconocen las siguientes claves:

- `r` (o` raw`) indica qué símbolos y expresiones generar sin formato.

- `m` (o` markdown`) indica los símbolos que se generarán como markdown para formatearlos.

- `j` (o` json`) indica qué símbolos y expresiones generar como formato JSON.

- `context` es un atributo opcional para especificar a qué contexto de bloque de código se debe hacer referencia. Se asume el contexto `predeterminado` si el atributo no está definido.

- Otros: `v` (o `visualize`), `j` (o `json`), `interactive`. NO HAREMOS USO DE LOS MISMOS

El orden de `v`,` r`, `m` y` j` determina el orden de la salida. Se considera una buena práctica evitar múltiples formatos de salida y especificaciones en un triple-hat-chunck, ya que esto ayuda a controlar el diseño de la salida. 

## 4. DOT chunks

Renderizan un grafo dado en notación `dot` haciendo uso de la librería Viz.js. 

### 4.1 Sintáxis

````m
```dot
```
````

### 4.2 Descripción

Al igual que cualquier otro bloque de código (chunk) de markdown-litvis, un elm-chunk se abre y se cierra con tres comillas invertidas (\`\`\`). La referencia del lenguaje *elm* debe seguir inmediatamente a las comillas inversas **sin espacio**.

Admite un atributo, especificado entre llaves en el que se puede especificar la forma de renderización, cuyos posibles valores pueden ser: `circo`, `dot`, `neato`, `osage`, or `twopi`. En general utilizaremos el valor por defecto  `dot`. 

En las prácticas se utilizará para la representación de los grafos tanto los grafos de formación como los distintos grafos de búsqueda o tableros que se presentarán en los distintos algoritmos estudiados.

Para ello recomendamos: 

1.  Crear una variable que almacene la cadena en formato DOT definiendo su tipo como String (*var : String*).(Es indispensable establecer el tipo, si no se pone no se mostrará nada).

2.  En el chunk establecer los parámetros *l* (para mostrar el chunk) y *m* para ejecutar la salida como markdown. Esto nos mostrará el código en formato DOT.

3. El  código DOT mostrado podemos copiarlo y pegarlo en un chunk-dot (seguido del chunk donde se declara) para visualizarlo.  

4. Para dejar de mostrar el código DOT (y no ensuciar el documento) basta con quitar el parámetro *m* del chunk.

## 5. Configuración de Elm

Juega el papel del `elm.json` para configurar el compilador de Elm.

### 5.1 Syntax

```markdown
---
elm:
  dependencies:
    ...
    ...
    ...
  source-directories:
    - ...
    - ...
---
```

### 5.2 Description

Las `dependencies` determina qué paquetes de Elm instalar. Las versiones de los paquetes se deben poner entre comillas para evitar que el analizador yaml las malinterprete, que no distingue entre valores numéricos como "4" y "4.0". Para hacer referencia a la última versión disponible de un paquete de Elm, se debe utilizar la palabra clave `latest`. En este caso, la última versión se seleccionará automáticamente cada vez que se borre la caché de litvis. No es necesario especificar paquetes del sistema como `elm-lang / core` o` elm-lang / html`.

El parámetro `source-directories` configura a Elm para "ver" módulos en el sistema de archivos local. Esto puede resultar útil al depurar una copia de un paquete antes de publicarlo. Cuando no se especifican los `directorios de origen`, no se importan módulos Elm locales desde el sistema de archivos, incluso si están en el mismo directorio que el documento litvis.

Por lo general será suficiente con importar el paquete LogicUS, aunque ocasionalemente se podrán complementar con el uso de alguna otra librería (se indicará en todo caso). Por lo general la cabecera de todos los documentos será:

```markdown
---
elm:
  dependencies:
    vicramgon/logicus: latest
---
```

Pues ya está todo listo para pasar desarrollar las prácticas...