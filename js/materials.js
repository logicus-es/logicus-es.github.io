/*
    Lista de videos disponibles.

    Campos:
        - title: El título que aparecerá como encabezado de la página 
        - description: Descripción del contenido del vídeo que aparecerá en la página
        - link: Nombre del archivo del vídeo en Youtube
        - visibility: 0 para no visible, 1 para visible.
        - complementary : string con el código html con información/materiales complementarios. Si no se precisa dejar como una cadena vacía.
*/

var videos =
    [
        {   "title": "Presentación LogicUS", 
            "description":"Presentamos una perspectiva general del proyecto LogicUS, sus objetivos, herramientas, instalación y uso, materiales y participantes en el proyecto.", 
            "link":"https://youtu.be/MgMMMrYn8kU", 
            "complementary":"", 
            "visibility":1
        },
    ]




/*
    Lista de notebooks disponibles.

    Campos:
        - title: El título que aparecerá como encabezado de la página 
        - description: Descripción corta del notebook que aparecerá en la página
        - section: LP, LPO ó OT (OTHER)
        - link: ruta al archivo de google drive
        - sollink : ruta al archivo de la solución en google drive
        - visibility: 0 para no visible, 1 para visible solo el enunciado, 2 para visible enunciado y solución
*/

var notebooks =
    [
        {"title": "Problema Puertas", "description":"Notebook sintaxis y semántica PL", "section":"LP", "link":"https://drive.google.com/file/d/1TyVTiDTUWPyxvDHdJ_BmOLMwKdyB79vG/view?usp=sharing", "sollink":"", "visibility":1},
         {"title": "Introducción a litvis", "description":"Un notebook de introducción a la herramienta litvis, las cabeceras, elementos markdown, bloques ejecutables y de visualización, etc.", "section":"OT", "link":"docs/notebooks/introLitvis.md", "sollink":"", "visibility":1}
    ]

