1)_Generalización simbólica: ¿Cuáles son las reglas escritas del lenguaje?
El enfoque de TypeScript es brindar a JavaScript de herramientas y características de otros lenguajes como tipado estático, clases abstractas, interfaces o genéricos, entre otras.JavaScript proporciona primitivas del lenguaje como string y number, pero no comprueba que las hayamos asignado de forma consistente, pues su tipado es débil y dinámico. TypeScript, en cambio, sí hace las comprobaciones necesarias. Esto significa que nuestro código JavaScript existente es también código TypeScript. 

Estructuras de control básicas: el código se ejecuta en secuencia (instrucción tras instrucción); la selección se expresa con if / else y switch; la iteración, con for, while y do...while. No existe goto.
Bloques delimitados por llaves { }, que definen el alcance (scope) de las variables y agrupan instrucciones como una sola unidad.

Funciones con firma tipada: toda función declara explícitamente el tipo de sus parámetros y, opcionalmente, el de su valor de retorno (function suma(a: number, b: number): number). Esto formaliza la idea estructurada de un único punto de entrada y un único tipo de salida esperado.

Tipado estático explícito u opcional: las variables pueden anotarse con un tipo (let x: number), y el compilador verifica en tiempo de compilación que los valores asignados sean compatibles con ese tipo.

Modularidad mediante import / export: el código se organiza en módulos independientes que exponen solo lo necesario, lo que formaliza la práctica estructurada de dividir un programa en partes con responsabilidades definidas.

Compilación a JavaScript: toda regla de tipos es una verificación que ocurre antes de ejecutar; el .js resultante ya no conserva esas anotaciones, son puramente una capa de reglas agregadas sobre JS.

2)_Creencias de los profesionales: ¿Qué características particulares del lenguaje se cree que sean "mejores" que en otros lenguajes?

Los profesionales que usan TypeScript creen que agregar tipado estático a JavaScript es una mejora, porque permite detectar errores en tiempo de compilación en lugar de en ejecución, algo que JavaScript, al ser de tipado dinámico y débil, no ofrece. Se considera que esto reduce la cantidad de bugs, mejora el soporte del editor (autocompletado, refactorización) y facilita el mantenimiento en proyectos grandes. También se valora que, al ser TypeScript un superconjunto de JavaScript, esta mejora se puede incorporar gradualmente sobre código ya existente, sin tener que reescribir todo desde cero.