📋 Manejo como Chano — Organizador de Tareas

Aplicación de consola desarrollada en TypeScript para gestionar tareas desde la terminal.

El proyecto fue realizado como trabajo práctico para practicar conceptos fundamentales de TypeScript, JavaScript/Node.js, módulos, interfaces, arreglos, validaciones, funciones asíncronas y compilación de TypeScript.

🚀 Funcionalidades

El organizador permite:

➕ Agregar nuevas tareas.

📋 Mostrar las tareas registradas.

🔎 Buscar tareas según el título.

✏️ Editar tareas existentes.

🔤 Ordenar las tareas alfabéticamente por título.

📌 Filtrar tareas según su estado:

Pendiente

En curso

Terminada

Cancelada

📅 Registrar fecha de vencimiento.

🆔 Asignar un identificador a cada tarea.

⭐ Establecer una dificultad.

🕒 Registrar la fecha de creación y edición.

❌ Salir del programa.

🛠️ Tecnologías utilizadas

TypeScript

Node.js

npm

Node.js Readline Promises

CommonJS

Git / GitHub

📁 Estructura del proyecto

Proyecto/
│
├── Main.ts
├── Menu.ts
├── Readline.ts
├── Tareas.ts
├── Operaciones.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
│
└── dist/
    └── Archivos JavaScript compilados

Main.ts

Es el punto de entrada del programa.

Se encarga de:

Mostrar el menú principal.

Recibir la opción elegida por el usuario.

Validar las opciones.

Crear el arreglo principal de tareas.

Llamar a las funciones de Operaciones.ts.

Mantener funcionando el programa hasta que el usuario decida salir.

Menu.ts

Contiene la función encargada de mostrar las opciones principales del organizador.

Readline.ts

Configura la entrada de datos desde la terminal utilizando:

readline/promises

Esto permite utilizar:

await rl.question(...)

para solicitar información al usuario de manera asíncrona.

Tareas.ts

Contiene la interfaz Tareas, que define la estructura que debe tener cada tarea:

export interface Tareas {
    id: number;
    titulo: string;
    descripcion: string;
    estado: string;
    dificultad: string;
    fechav: string;
    fechaCreacion: Date;
    fechaedicion: Date;
}

La interfaz permite que TypeScript controle que los objetos utilizados como tareas tengan los atributos esperados y con los tipos correctos.

Operaciones.ts

Contiene la lógica principal del organizador.

Entre sus funciones se encuentran:

Ag_tarea() → agrega tareas.

ordena() → ordena las tareas alfabéticamente.

vertareas() → muestra y filtra las tareas.

mostrar() → genera la información visual de una tarea.

editar() → permite modificar una tarea.

mostrar_segun_contenga() → busca tareas cuyo título contenga determinado texto.

🧩 Conceptos de TypeScript utilizados

Durante el desarrollo se aplicaron diferentes conceptos del lenguaje.

Interfaces

La interfaz Tareas define la estructura de los objetos utilizados por el programa.

interface Tareas {
    id: number;
    titulo: string;
    descripcion: string;
    // ...
}

Tipado de arreglos

El arreglo principal se declara indicando que solamente puede contener objetos compatibles con Tareas:

const arreglo: Tareas[] = [];

Funciones tipadas

Las funciones especifican los tipos de sus parámetros y, cuando corresponde, su valor de retorno:

function ordena(arreglo: Tareas[]) {
    // ...
}

Promesas y async/await

Como la entrada de datos mediante readline/promises es asíncrona, se utiliza:

async function main() {
    const respuesta = await rl.question('');
}

sort() y localeCompare()

Las tareas se ordenan alfabéticamente mediante:

arreglo.sort((a, b) => a.titulo.localeCompare(b.titulo));

sort() ordena el arreglo y localeCompare() permite comparar los títulos como cadenas de texto.

filter()

Se utiliza para obtener solamente las tareas que cumplen determinada condición, por ejemplo, las tareas pendientes.

includes()

Se utiliza en la búsqueda para comprobar si un título contiene el texto ingresado.

map()

El proyecto también trabaja con la transformación de elementos de arreglos mediante map().

⚙️ Configuración de TypeScript

El proyecto utiliza un archivo tsconfig.json:

{
    "compilerOptions": {
        "target": "ES2020",
        "module": "commonjs",
        "esModuleInterop": true,
        "strict": true,
        "types": ["node"],
        "outDir": "./dist"
    }
}

¿Qué significa cada opción?

target: "ES2020" → indica la versión de JavaScript a la que se compila el código.

module: "commonjs" → configura el sistema de módulos utilizado por Node.js en este proyecto.

esModuleInterop: true → facilita la interoperabilidad entre diferentes sistemas de módulos.

strict: true → activa comprobaciones estrictas de tipos.

types: ["node"] → permite que TypeScript reconozca elementos propios de Node.js, como process y require.

outDir: "./dist" → indica que los archivos JavaScript generados se guardarán dentro de dist.

📦 Dependencias

El proyecto utiliza TypeScript y las definiciones de tipos de Node.js como dependencias de desarrollo:

{
    "devDependencies": {
        "@types/node": "^26.6.2",
        "typescript": "^7.0.2"
    }
}

package.json

Contiene la configuración básica del proyecto y sus dependencias.

package-lock.json

Guarda información detallada sobre las versiones exactas de las dependencias instaladas y el árbol de dependencias utilizado por npm.

Este archivo es generado automáticamente por npm y no debería editarse manualmente.

▶️ Instalación y ejecución

1. Clonar el repositorio

git clone URL_DEL_REPOSITORIO

Luego ingresar a la carpeta:

cd NOMBRE_DEL_PROYECTO

2. Instalar las dependencias

npm install

3. Compilar TypeScript

npx tsc

Este comando utiliza el compilador de TypeScript y toma la configuración de tsconfig.json.

Los archivos .ts se transforman en archivos .js dentro de:

dist/

4. Ejecutar el programa

Una vez compilado:

node dist/Main.js

🔄 Flujo del programa

El funcionamiento general es:

Usuario
   │
   ▼
Main.ts
   │
   ├──► Menu.ts
   │
   ├──► Readline.ts
   │
   ├──► Tareas.ts
   │
   └──► Operaciones.ts
            │
            ├── Agregar
            ├── Mostrar
            ├── Buscar
            ├── Editar
            └── Ordenar

💻 Ejemplo de funcionamiento

Al iniciar el programa se muestra un menú similar a:

**BIENVENIDOS A MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS**

A continuación seleccione la operación que desea realizar:

1. Para agregar una tarea
2. Para mostrar las tareas
3. Para buscar tareas
4. Para salir

Al seleccionar la opción de agregar, el programa solicita datos como:

Título
Descripción
Fecha de vencimiento
ID

La información se almacena en un arreglo de tipo:

Tareas[]

Posteriormente las tareas pueden mostrarse, filtrarse, buscarse, editarse y ordenarse.

📚 Objetivos del proyecto

Este proyecto permitió practicar:

Tipado estático con TypeScript.

Interfaces.

Arreglos de objetos.

Funciones.

Módulos.

Importaciones y exportaciones.

async/await.

Promesas.

Validación de datos.

Métodos de arrays.

Manejo de fechas.

Entrada de datos desde consola.

Configuración de tsconfig.json.

Compilación de TypeScript.

Uso de Node.js.

Administración de dependencias con npm.

Organización de un proyecto para GitHub.

📝 Notas

El código fuente se encuentra en los archivos .ts.

La carpeta dist/ contiene el resultado de la compilación a JavaScript y se genera ejecutando:

npx tsc

Para ejecutar el programa se utiliza el archivo:

dist/Main.js
