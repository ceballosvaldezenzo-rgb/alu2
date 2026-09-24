"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { rl } = require("./Readline"); //IMPORTO EL SCANNER
const { Menu } = require("./Menu"); //IMPORTO EL MENU
const Operaciones_1 = require("./Operaciones"); //IMPORTO LA FUNCION AGREGAR TAREA
const Operaciones_2 = require("./Operaciones"); //IMPORTO LA FUNCION DE ORDENAR ALFABETICAMENTE
async function main() {
    const arreglo = []; //CREO EL ARREGLO CON EL TIPO INTERFAZ
    let op = new Array(2);
    console.log("**BIENVENIDOS A MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS**\n");
    do {
        Menu(); //LLAMO AL MENU
        op[0] = Number(await rl.question(''));
        while (op[0] < 1 || op[0] > 4) {
            console.log("error ingrese un numero del 1 al 4\n");
            Menu();
            op[0] = Number(await rl.question(''));
        }
        console.log("usted selecciono la opcion: " + op[0] + "esta seguro que desea continuar?\ningrese 1 para si\ningrese 2 para no\n");
        op[2] = Number(await rl.question(''));
        while (op[2] < 1 || op[2] > 2) {
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("usted selecciono la opcion: " + op[0] + "\n esta seguro que desea continuar?\ningrese 1 para si\ningrese 2 para no\n");
            op[2] = Number(await rl.question(''));
        }
        if (op[2] == 2) {
            op[0] = 6;
        }
        switch (op[0]) {
            case 1:
                await (0, Operaciones_1.Ag_tarea)(arreglo);
                (0, Operaciones_2.ordena)(arreglo);
                break;
            case 2:
                if (arreglo.length === 0) {
                    console.log("error opcion inviable en este momento,no hay tareas que mostrar");
                }
                else {
                }
                break;
            case 3:
                if (arreglo.length === 0) {
                    console.log("error opcion inviable en este momento,no hay tareas que mostrar");
                }
                else {
                }
                break;
            case 4:
                console.log("GRACIAS POR USAR MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS, NOS VEMOS.....\n");
                break;
        }
    } while (op[0] != 4);
    rl.close();
}
main();
