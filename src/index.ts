
//Declaración de variables
const z="Fran";
if(true){
    var x= "Maria";
    let y="Jose"; //tiene un ámbito de bloque
}    

x="Pepito"

console.log(x);

/**
* Tipos de datos
 * String
 * Number
 * Boolean 
 */

let nombre: string = "Jose Antonio";
let edad: number = 18;
let mayorEdad: boolean = true;

/**
 * Tipos de datos especiales
 * any
 * unknown
 */

let datos: String = "HOLA";
console.log(datos.toLowerCase());

//uso del tipo unknown

let tipoDesconocido: unknown;

tipoDesconocido = "Hola soy un string";
tipoDesconocido = 198;


if(typeof tipoDesconocido === "string"){
    console.log(tipoDesconocido.toUpperCase());
}

console.log("Tu nombre es: " + nombre + " y tienes " + edad + " años.");
console.log(`Tu nombre es: ${nombre} y tienes ${edad} años.`);

//Programar con funciones

function saludar(nombre: string, edad?: number): string{
    if(edad){
        return `Hola ${nombre}, tienes ${edad} años.`;
    }else{
        return `Hola ${nombre}.`;
    }
}

console.log(saludar("Jose Antonio", 18));
console.log(saludar("Maria"));


