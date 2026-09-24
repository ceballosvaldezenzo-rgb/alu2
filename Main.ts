const { rl } = require("./Readline");//IMPORTO EL SCANNER
const{Menu}=require("./Menu");//IMPORTO EL MENU
import type {Tareas} from "./Tareas";//IMPORTO LA INTERFAZ DE TAREA
import {Ag_tarea} from "./Operaciones";//IMPORTO LA FUNCION AGREGAR TAREA
import {ordena} from "./Operaciones";//IMPORTO LA FUNCION DE ORDENAR ALFABETICAMENTE
import {vertareas} from "./Operaciones";//IMPORTO LA FUNCION VER TAREAS QUE DENTRO DE ELLA TIENE LAS FUNCIONES 
//EDITAR Y VER SEGUN LA TAREA
import {mostrar_segun_contenga} from "./Operaciones";//IMPORTO LA FUNCION DE MOSTRAR LA TAREA SEGUN EL TITULO
async function main(){
    const arreglo: Tareas[]=[];//CREO EL ARREGLO CON EL TIPO INTERFAZ
    let op:number[]=new Array(2);
    console.log("**BIENVENIDOS A MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS**\n");
    
    do{
       Menu();//LLAMO AL MENU

       op[0]=Number(await rl.question(''));
        
        while(op[0]<1||op[0]>4){
          console.log("error ingrese un numero del 1 al 4\n");
          Menu();
          op[0]=Number(await rl.question(''));
        }

        console.log("usted selecciono la opcion: "+op[0]+"esta seguro que desea continuar?\ningrese 1 para si\ningrese 2 para no\n");
        op[2]=Number(await rl.question(''));

        while(op[2]<1||op[2]>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("usted selecciono la opcion: "+op[0]+"\n esta seguro que desea continuar?\ningrese 1 para si\ningrese 2 para no\n");
            op[2]=Number(await rl.question(''));
        } 
        if(op[2]==2){
            op[0]=6;
        }

        switch(op[0]){
            case 1:
                //AGREGO TAREA
                await Ag_tarea(arreglo);
                ordena(arreglo);
                break;
            case 2:
                if(arreglo.length===0){
                    console.log("error opcion inviable en este momento,no hay tareas que mostrar");
                }else{
                    //VEO LAS TAREAS Y DE PASO SI QUIERO EDITO
                    await vertareas(arreglo);
                    
                }
                break;
            case 3:
                if(arreglo.length===0){
                    console.log("error opcion inviable en este momento,no hay tareas que mostrar");
                }else{
                    
                }
                break;
            case 4:
                console.log("GRACIAS POR USAR MANEJO COMO CHANO TU ORGANIZADOR DE TAREAS, NOS VEMOS.....\n");
                break;            

        }


    }while(op[0]!=4);
rl.close();
}
main();