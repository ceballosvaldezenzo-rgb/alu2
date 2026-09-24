const { rl } = require("./Readline");//IMPORTO EL SCANNER
import type {Tareas} from "./Tareas";
export async function Ag_tarea(arreglo:Tareas[]):Promise<void>{
    let titulo:string = "";
    let descripcion:string = "";
    let fechav:string = "";
    let is:number = 0;
    let correcto:boolean=false;
    let coinciden:boolean=false;
    let op:number;
    let dia:number;
    let mes:number;
    let año:number;
    do{
        dia=0;
        mes=0;
        año=0;
       //PIDO TITULO
        correcto=false;
       while(correcto===false){
        try{
            titulo=await rl.question('Titulo:\t');
            if(titulo.trim()=== ""){
                throw new Error("error el titulo no puede estar vacio ni contener espacios\n");
            }
        
         correcto=true;
        }catch(error){
            console.log(Error);
        }
       }
        
        correcto=false;
        
        //PIDO DESCRIPCION
        while(correcto===false){
        try{
            descripcion=await rl.question('descripcion:\t');
            if(descripcion.trim()===""){
                throw new Error("error la descripcion no puede estar vacia ni contener espacios\n");
            }
        
         correcto=true;
        }catch(error){
            console.log(Error);
        }
       }
     
       //PIDO FECHA DE VENCIMIENTO
       correcto=false;
        while(correcto===false){
        try{
        fechav = await rl.question("fecha de vencimiento en formato dd/mm/aaaa:\t");
            const [diaStr, mesStr, anioStr] = fechav.split("/");

            dia = Number(diaStr);
            mes = Number(mesStr);
            año = Number(anioStr);

            if (
            fechav.length !== 10 ||
            fechav[2] !== "/" ||
            fechav[5] !== "/" ||
            fechav.includes(" ") ||
            dia < 1 || dia > 31 ||
            mes < 1 || mes > 12 ||
            año <= 2026 ||
            (dia > 29 && mes === 2) ||
            (dia > 30 && mes === 4) ||
            (dia > 30 && mes === 6) ||
            (dia > 30 && mes === 9) ||
            (dia > 30 && mes === 11)
            ) {
        throw new Error("error ingrese correctamente la fecha \n");
        }
        
         correcto=true;
        }catch(error){
            console.log(Error);
        }
       }
       
       //Pido id
       correcto=false;
        while(correcto===false){
        try{
            coinciden=false;

            is=Number(await rl.question('ID:\t'));

            for(let i:number=0;i<arreglo.length;i++){
                if(arreglo[i].id===is){
                    coinciden=true;
                }
            }
            if(coinciden===true||is<1||is>1000){
                throw new Error("error el id no es erroneo intentelo nuevamente\n");
            }
        
         correcto=true;
        }catch(error){
            console.log(Error);
        }
       }
       
    const tareaNueva:Tareas={
        id: is,
        titulo: titulo,
        descripcion: descripcion,
        estado: "Pendiente",
        dificultad:"⭐ ☆ ☆",
        fechav: fechav,
        fechaCreacion:new Date(),
        fechaedicion:new Date(),
       }
       
       arreglo.push(tareaNueva);
       console.log("tarea agregada correctamente\n");
       console.log("ingrese 1 si desea agregar otra tarea\ningrese 2 si desea dejar de agregar tareas\n");
       op=Number(await rl.question(''));
       while(op<1||op>2){
            console.log("error ingrese el numero 1 o el numero 2\n");
            console.log("ingrese 1 si desea agregar otra tarea\ningrese 2 si desea dejar de agregar tareas\n");
            op=Number(await rl.question(''));
        }


    }while(op!=2);
}

export function ordena(arreglo:Tareas[]){
    arreglo.sort((a,b)=> a.titulo.localeCompare(b.titulo));
}

export async function vertareas(arreglo:Tareas[]){
    let op: [number, number, string] = [0, 0, ""];
    let n;
    let tareasfiltradas:Tareas[]=arreglo;
    do{
      console.log("Acontinuacion se desplegara un menu en donde se le indicara con un numero sus acciones\n");
      console.log("¿Que tareas desea visualizar?");
      console.log("[1]-Para ver todas");
      console.log("[2]-Para ver las tareas pendientes");
      console.log("[3]-Para ver las tareas en curso");
      console.log("[4]-Para ver las tareas terminadas");
      console.log("[5]-Para ver las tareas canceladas");
      console.log("[6]-Para volver al menu principal");
  
      op[0]=Number(await rl.question(''));
      while(op[0]<0||op[0]>6){
        console.log("Error ingrese un numero valido del menu");
        console.log("[1]-Para ver todas");
        console.log("[2]-Para ver las tareas pendientes");
        console.log("[3]-Para ver las tareas en curso");
        console.log("[4]-Para ver las tareas terminadas");
        console.log("[5]-Para ver las tareas canceladas");
        console.log("[6]-Para volver al menu principal");
    
        op[0]=Number(await rl.question(''));
      }

      switch(op[0]){
        case 1:
             for(let i=0;i<tareasfiltradas.length;i++){
                console.log("["+(i+1)+"]"+" "+tareasfiltradas[i].titulo);
                console.log("Desea verla al detalle?:");
                console.log("Ingrese 1 para si o 2 para no");
                op[1]=Number(await rl.question(''));
                while(op[1]<1||op[1]>2){
                    console.log("error ingrese un numero valido");
                     console.log("Desea verla al detalle?:");
                     console.log("Ingrese 1 para si o 2 para no");
                     op[1]=Number(await rl.question(''));
                }
                if(op[1]===1){
                    console.log(mostrar(tareasfiltradas[i]));
                    console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                    op[2]=await rl.question('');
                     while(op[2]!="E"&&op[2]!="e"&&op[2]!="0"){
                        console.log("Error ingrese una opcion valida");
                        console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                        op[2]=await rl.question('');
                     }
                    switch(op[2]){
                        case "E":
                             await editar(tareasfiltradas[i]);
                            break;
                        case "e":
                             await editar(tareasfiltradas[i]);
                            break;    
                        case "0":
                             await rl.question('Presione una tecla para continuar....\n');
                            break;    
                    }
                }

        
             }
            break;
        case 2:
            tareasfiltradas = arreglo.filter(t => t.estado === "Pendiente");
            for(let i = 0; i < tareasfiltradas.length; i++){
                console.log("["+(i+1)+"] "+tareasfiltradas[i].titulo);
                console.log("Desea verla al detalle?:");
                console.log("Ingrese 1 para si o 2 para no");
                op[1] = Number(await rl.question(''));
                while(op[1] < 1 || op[1] > 2){
                    console.log("error ingrese un numero valido");
                    console.log("Desea verla al detalle?:");
                    console.log("Ingrese 1 para si o 2 para no");
                    op[1] = Number(await rl.question(''));
                }
                if(op[1] === 1){
                    console.log(mostrar(tareasfiltradas[i]));
                    console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                    op[2] = await rl.question('');
                    while(op[2] != "E" && op[2] != "e" && op[2] != "0"){
                        console.log("Error ingrese una opcion valida");
                        console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                        op[2] = await rl.question('');
                    }
                    switch(op[2].toUpperCase()){
                        case "E":
                            await editar(tareasfiltradas[i]);
                            break;
                        case "0":
                            await rl.question('Presione una tecla para continuar....\n');
                            break;
                    }
                }
            }
        break;
        case 3:
              tareasfiltradas=arreglo.filter(t => t.estado === "En curso");
             for(let i=0;i<tareasfiltradas.length;i++){
                console.log("["+(i+1)+"]"+" "+tareasfiltradas[i].titulo);
                console.log("Desea verla al detalle?:");
                console.log("Ingrese 1 para si o 2 para no");
                op[1]=Number(await rl.question(''));
                while(op[1]<1||op[1]>2){
                    console.log("error ingrese un numero valido");
                     console.log("Desea verla al detalle?:");
                     console.log("Ingrese 1 para si o 2 para no");
                     op[1]=Number(await rl.question(''));
                }
                if(op[1]===1){
                    console.log(mostrar(tareasfiltradas[i]));
                    console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                    op[2]=await rl.question('');
                     while(op[2]!="E"&&op[2]!="e"&&op[2]!="0"){
                        console.log("Error ingrese una opcion valida");
                        console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                        op[2]=await rl.question('');
                     }
                    switch(op[2]){
                        case "E":
                             await editar(tareasfiltradas[i]);
                            break;
                        case "e":
                             await editar(tareasfiltradas[i]);
                            break;     
                        case "0":
                             await rl.question('Presione una tecla para continuar....\n');
                            break;    
                    }
                }

            }
            break;
        case 4:
            tareasfiltradas=arreglo.filter(t => t.estado === "Terminada");
             for(let i=0;i<tareasfiltradas.length;i++){
                console.log("["+(i+1)+"]"+" "+tareasfiltradas[i].titulo);
                console.log("Desea verla al detalle?:");
                console.log("Ingrese 1 para si o 2 para no");
                op[1]=Number(await rl.question(''));
                while(op[1]<1||op[1]>2){
                    console.log("error ingrese un numero valido");
                     console.log("Desea verla al detalle?:");
                     console.log("Ingrese 1 para si o 2 para no");
                     op[1]=Number(await rl.question(''));
                }
                if(op[1]===1){
                    console.log(mostrar(tareasfiltradas[i]));
                    console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                    op[2]=await rl.question('');
                     while(op[2]!="E"&&op[2]!="e"&&op[2]!="0"){
                        console.log("Error ingrese una opcion valida");
                        console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                        op[2]=await rl.question('');
                     }
                    switch(op[2]){
                        case "E":
                             await editar(tareasfiltradas[i]);
                            break;
                        case "e":
                             await editar(tareasfiltradas[i]);
                            break;     
                        case "0":
                             await rl.question('Presione una tecla para continuar....\n');
                            break;    
                    }
                }

            }
            break;
        case 5:
            tareasfiltradas=arreglo.filter(t => t.estado === "Cancelada");
             for(let i=0;i<tareasfiltradas.length;i++){
                console.log("["+(i+1)+"]"+" "+tareasfiltradas[i].titulo);
                console.log("Desea verla al detalle?:");
                console.log("Ingrese 1 para si o 2 para no");
                op[1]=Number(await rl.question(''));
                while(op[1]<1||op[1]>2){
                    console.log("error ingrese un numero valido");
                     console.log("Desea verla al detalle?:");
                     console.log("Ingrese 1 para si o 2 para no");
                     op[1]=Number(await rl.question(''));
                }
                if(op[1]===1){
                    console.log(mostrar(tareasfiltradas[i]));
                    console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                    op[2]=await rl.question('');
                     while(op[2]!="E"&&op[2]!="e"&&op[2]!="0"){
                        console.log("Error ingrese una opcion valida");
                        console.log("Desea editarla?\nIngrese E para editar\nIngrese 0 para continuar");
                        op[2]=await rl.question('');
                     }
                    switch(op[2]){
                        case "E":
                             await editar(tareasfiltradas[i]);
                            break;
                        case "e":
                             await editar(tareasfiltradas[i]);
                            break;     
                        case "0":
                             await rl.question('Presione una tecla para continuar....\n');
                            break;    
                    }
                }

            }
            break;    
        case 6:
              console.log("Usted esta volviendo al menu");
            break;                
      }
      

    }while(op[0]!=6);
     
}

function mostrar(tareasfiltradas:Tareas){
    const t=`titulo: ${tareasfiltradas.titulo}
             Estado: ${tareasfiltradas.estado}
             Descripcion: ${tareasfiltradas.descripcion}
             ID: ${tareasfiltradas.id}
             Dificultad: ${tareasfiltradas.dificultad}
             Fecha creacion:${tareasfiltradas.fechaCreacion.toLocaleDateString()}
             Fecha de edicion: ${tareasfiltradas.fechaedicion}
             Fecha de vencimineto: ${tareasfiltradas.fechav}`;
             return t;
}

async function editar(tarea:Tareas){
       
let descripcion;
    let fechav:string ="";
    let estado:string;
    let dificultad:string;
    let dia:number;
    let mes:number;
    let año:number;
    let correcto:boolean=false;
    
    console.log('estas editando la tarea: '+tarea.titulo+'');
    console.log('- Si deseas mantener los valores de un atributo, simplemente dejalo en blanco.\n');
    console.log('-Si deseas dejar en blanco un atributo,escribe un espacio\n');
    descripcion=await rl.question('Edite descripcion: ');
    if(descripcion===""){
      
    }else if(descripcion.trim()===""){
        tarea.descripcion="";
    }else{
        tarea.descripcion=descripcion.trim();

    }

    while(correcto===false){
        try{
            fechav=await rl.question('Edite fecha de vencimiento:');

            if(fechav === "" || fechav.trim() === ""){
            correcto = true; // Enter o espacio son válidos
        } 
        else {
            fechav = await rl.question("fecha de vencimiento en formato dd/mm/aaaa:\t");
            const [diaStr, mesStr, anioStr] = fechav.split("/");

            dia = Number(diaStr);
            mes = Number(mesStr);
            año = Number(anioStr);

            if (
            fechav.length !== 10 ||
            fechav[2] !== "/" ||
            fechav[5] !== "/" ||
            fechav.includes(" ") ||
            dia < 1 || dia > 31 ||
            mes < 1 || mes > 12 ||
            año <= 2026 ||
            (dia > 29 && mes === 2) ||
            (dia > 30 && mes === 4) ||
            (dia > 30 && mes === 6) ||
            (dia > 30 && mes === 9) ||
            (dia > 30 && mes === 11)
            ){
                throw new Error("error ingrese correctamente la fecha \n");
            }
        }
         correcto=true;
        }catch(error){
            console.log(Error);
        }
    }
    if(fechav===""){
      tarea.fechav="nn/nn/nnnn";
    }else if(fechav.trim()===""){
        tarea.fechav="";
    }else{
        tarea.fechav=fechav;

    }
    estado=await rl.question('Edite el estado([P]endiente / [E]n curso / [T]erminada / [C]ancelada):')
    while(estado.toUpperCase()!="P"&&estado.toUpperCase()!="E"&&estado.toUpperCase()!="T"&&estado.toUpperCase()!="C"&&estado.trim()!=""
          &&estado!=""){
        console.log("Error");
         estado=await rl.question('Edite el estado([P]endiente / [E]n curso / [T]erminada / [C]ancelada):')
    }
    if(estado===""){

    }else if(estado.trim()===""){
        tarea.estado="Pendiente";
    }else{
    switch(estado.toUpperCase()){
        case "P":
             tarea.estado="Pendiente";
            break;
        case "E":
             tarea.estado="En curso";
            break;
        case "T":
             tarea.estado="Terminada";
            break;
        case "C":
              tarea.estado="Cancelada";
            break;            
    }
    }

    dificultad=await rl.question('Edite la dificultad,ingrese [1]Facil,[2]Dificil,[3]Muy dificil');
    while(dificultad !== "1" && dificultad !== "2" && dificultad !== "3" &&
      dificultad !== "" && dificultad.trim() !== ""){
        console.log("Error");
         dificultad=await rl.question('Edite la dificultad,ingrese [1]Facil,[2]Dificil,[3]Muy dificil');
    }
    if(dificultad===""){

    }else if(dificultad.trim()===""){
        tarea.dificultad=" ☆ ☆ ☆"
    }else{
        switch(dificultad){
            case "1":
                   tarea.dificultad="⭐ ☆ ☆";
                break;
            case "2":
                   tarea.dificultad="⭐ ⭐ ☆";
                break;
            case "3":
                  tarea.dificultad="⭐ ⭐ ⭐";
                break;        
        }
    }
    tarea.fechaedicion = new Date();
    console.log("Datos guardados correctamente");
    await rl.question('Presionte una tecla para continuar....');

}

export async function mostrar_segun_contenga(arreglo:Tareas[]){
   let op;
   let titulo;
   let correcto=false;
   do{
    correcto=false;
     console.log("Ingrese el titulo de la tarea que esta buscando:");
     titulo=await rl.question('');
     while(titulo.trim()===""){
        console.log("Error ingreso invalido");
        console.log("Ingrese el titulo de la tarea que esta buscando:");
        titulo=await rl.question('');
     }
      for(let i=0;i<arreglo.length;i++){
        if(arreglo[i].titulo.toLowerCase().includes(titulo.toLowerCase())){
            correcto=true;
           
        }
     }
    if(correcto===true){
     for(let i=0;i<arreglo.length;i++){
        if(arreglo[i].titulo.toLowerCase().includes(titulo.toLowerCase())){
            console.log("["+(i+1)+"]"+" "+arreglo[i].titulo);
        }
     }
    }else{
       console.log("No hay tareas que contengan la palabra "+titulo+" en su titulo");
    }
     console.log("Desea buscar otra tarea que contenga alguna palabra o frase?\nIngrese 1 para si o un 2 para no");
     op=Number(await rl.question(''));
     while(op<1||op>2){
        console.log("Error ingrese un numero valido");
         console.log("Desea buscar otra tarea que contenga alguna palabra o frase?\nIngrese 1 para si o un 2 para no");
     op=Number(await rl.question(''));
     }
   }while(op!=2);
}
