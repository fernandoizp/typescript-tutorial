
// SECCIÓN 1: DECLARACIÓN DE VARIABLES BÁSICAS
// ==========================================

//Declaración de variables
//const z="Fran";
//if(true){
//    var x= "Maria";
//    let y="Jose"; //tiene un ámbito de bloque
//}    

//x="Pepito"

//console.log(x);

/**
* Tipos de datos
 * String
 * Number
 * Boolean 
 */

//let nombre: string = "Jose Antonio";
//let edad: number = 18;
//let mayorEdad: boolean = true;

/**
 * TIPOS DE DATOS ESPECIALES
 * - any: permite cualquier tipo de dato (evitar su uso)
 * - unknown: similar a any pero más seguro, requiere verificación de tipo
 */

// ==========================================
// SECCIÓN 3: DEMOSTRACIÓN DE TIPOS
// ==========================================

// Ejemplo de uso de tipo String (nótese la S mayúscula)
//let datos: String = "HOLA";
//console.log(datos.toLowerCase());

//uso del tipo unknown

//let tipoDesconocido: unknown;

//tipoDesconocido = "Hola soy un string";
//tipoDesconocido = 198;


//if(typeof tipoDesconocido === "string"){
//    console.log(tipoDesconocido.toUpperCase());
//}

//console.log("Tu nombre es: " + nombre + " y tienes " + edad + " años.");
//console.log(`Tu nombre es: ${nombre} y tienes ${edad} años.`);

// ==========================================
// SECCIÓN 4: ARRAYS Y TIPOS COMPUESTOS
// ==========================================

// Arrays de números
/*
let numeros: number[] = [3,5,8,11];         // Array de números
let numeros2: number[] = [17,5,8,11];       // Segundo array de números

// Función simple de suma (será usada más adelante)
function suma(x:number,y:number){return x+y;};

// Array con union type (puede contener números o strings)
let mixto: (number | string)[] = [3,"Jose",5,"Juan"];
/* 
// Array bidimensional (matriz) de números
let array2d: number[][]= [[1,2,3],[4,5,6],[7,8,9]];
let fsuma = suma(1,2);
console.log(`La posición 0 del array numeros es: ${numeros[0]}`);
console.log(`La posición 0 del array 2d es: ${array2d[0] != undefined ? array2d[0][0] : 0}`);
console.log(`La posición 1 del array mixto es: ${mixto[1]}`);

//let numeros3 = [...numeros,...numeros2];
//console.log(numeros3);
//mixto[0] = 5;
//mixto[0] = 10;

//console.log(numeros3);
//console.log(numeros);

//Metodos para trabajar con arrays

//let anumeros = [1,3,5,7,9];

//PUSH
//console.log(anumeros);
//anumeros.push(11);
//console.log(anumeros); //[1,3,5,7,9,11]

// ==========================================
// SECCIÓN 5: MÉTODOS DE ARRAYS
// ==========================================

// Creación de un array para demostrar los métodos
let anumeros = [1,3,5,7,9];

// PUSH: Agrega elementos al final del array
console.log(anumeros);              // Estado inicial
anumeros.push(11);                  // Agrega un elemento
console.log(anumeros);              // Muestra [1,3,5,7,9,11]

// POP: Elimina el último elemento del array
anumeros.pop();                     // Elimina el último elemento
console.log(anumeros);              // Muestra [1,3,5,7,9]

// PUSH múltiple: Agrega varios elementos a la vez
anumeros.push(11,13,15);           // Agrega tres elementos
console.log(anumeros);              // Muestra [1,3,5,7,9,11,13,15]
//POP multiple
anumeros.pop();
//UNSHIFT - SHIFT
anumeros.unshift(0);
console.log(anumeros); //[0,1,3,5,7,9,11,13,15]
anumeros.shift();
console.log(anumeros); //[1,3,5,7,9,11,13,15]
//ACCCESO, REEMPLAZO
anumeros[0]=-1;
console.log("La longitud del array es: " + anumeros.length)
console.log(anumeros[anumeros.length -1]);

//BUSQUEDA DE ELEMENTOS
let frutas = ["manzana","platano","pera","platano","mandarina","platano"];
//IndexOf
console.log(frutas.indexOf("banana")); //1
console.log(frutas.lastIndexOf("banana"));
//Includes
console.log(frutas.includes("banana"));//Booleano verdadero o falso;

//Find: busqueda de el primer elemento que cumpla una determinada condición
console.log(frutas.find((value:string)=>{return value.length > 5}));

//NOT NULL ASSERTION
//valor[x]!.length

//valor[x]?.length

//console.log[]
//FINDINDEX: devuelve el índice del primer elemento que cumpla la condición
console.log(frutas.findIndex((value:string)=>{return value.length > 5}));
//FOREACH
frutas.forEach((valor:string)=>{console.log(valor)});
//FOREACH desglosado
for(let x:number=0;x<frutas.length;x++){
    console.log(frutas[x]);
}
//MAP: transforma el array en otro array sin modificar el array original
let modificacion =frutas.map((valor:string)=>{return valor.toUpperCase() + " MODIFICADO"});
console.log(modificacion);
//FILTER: filtra el array y devuelve un nuevo array con los elementos que cumplen la condición
let frutasFiltradas = frutas.filter((frutas:string)=>{return frutas.length > 4});
console.log(frutasFiltradas);
//REDUCE: ACUMULAR EL VALOR
let numerosEnteros = [1,2,3,4,5,6,7,11,8,9];
console.log(numerosEnteros.reduce((acc:number,elementoActual:number)=>{return acc += elementoActual}));
let miNombre = ["Jose", "Antonio", "Rodriguez", "Torres"]
console.log(miNombre.reduce((elementoAnterior,elementoActual)=>{return elementoAnterior+" "+elementoActual}));
//SORT: ordena el array
console.log(numerosEnteros.sort((a:number,b:number)=>{return b-a}));
//SLICE: devuelve una copia del array desde el índice indicado hasta el índice final
console.log(miNombre.slice(0,2));
//Join: une todos los elementos del array en un string
console.log(miNombre.join(" "));
// ==========================================
// SECCIÓN 6: TUPLAS Y DICCIONARIOS
// ==========================================

// TUPLAS: Arrays con un número fijo de elementos de tipos específicos
let nombreEdad:[string,number];                 // Declaración de tupla
nombreEdad = ["Jose",18];                       // Asignación de valores
console.log(`Tu nombre es ${nombreEdad[0]} y tienes ${nombreEdad[1]} años.`);

// DICCIONARIOS: Objetos que actúan como mapas clave-valor
let diccionario = {1:"Jose",2:"TuMadre"};      // Creación de diccionario simple
console.log(diccionario);
//Funciones declaradas
/**
 * Función para sumar dos elementos
 * @param a primer parametro a sumar
 * @param b segundo parametro a sumar
 * @returns  numero sumado
 */
/** */
/*function sumar(a:number,b:number):number{

    return a+b;
}

let suma2numeros = sumar(10,20);
console.log(suma2numeros);

//Funciones anónimas NO TIENE HOISTING

const fResta = function(a:number,b:number){return a-b}

console.log(fResta(5,2));

let arrayNombres=["Jose","Juan","Pedro","Manuel"];
const printElemento = function(elemento:string){console.log(elemento)};
arrayNombres.forEach(printElemento);

//Operador ternario
function saludar(nombre:string,apellido?:string){
    //apellido!=undefined ? console.log(`Hola ${nombre} ${apellido}`): console.log(`Hola ${nombre}`)
    console.log(`Hola ${nombre} ${apellido ?? ""}`)
}
saludar("Fernando");
saludar("Fernando","Izquierdo")

//Funcion generica que depende de otra función
function math(a:number,b:number, operacion:(a:number,b:number)=>number):number{
    return operacion(a,b);
}

const farrowsumar = (a:number,b:number)=>{return a+b};
const fanonrestar = function (a:number, b:number){return a+b}

math(1,5,fanonrestar);
math(1,5,farrowsumar);


//Funciones flechas (parametros) => {operaciones}
const fflecha = (a:number)=> {return a};

function fforeach(datos:string[],operacion:(dato:string|undefined)=>void){
    for(let x =0;x<datos.length;x++){
        const valor = datos[x];
        if(valor!=undefined){
            operacion(valor)
        }
    }
}

//Funcion multiples parametros
function multipleParams(...valores:number[]){
    let suma3 = valores.reduce((previousValue:number,currentValue:number) => {return previousValue+=currentValue},0);
    console.log(suma3);
}
multipleParams(4,3,5,6);

// ==========================================
// SECCIÓN 7: PROGRAMACIÓN ASÍNCRONA
// ==========================================

//Definición de la interfaz para los datos de la API*/
interface DataAPI {
    message: string,
    status: string
}

// Función asíncrona para obtener datos de una API*/
async function getApiData(url: string): Promise<DataAPI> {
    // Realiza la petición HTTP y espera la respuesta
    const respuesta = await fetch(url);
    // Convierte la respuesta a JSON y la tipea como Promise<DataAPI>
    const datos = respuesta.json() as Promise<DataAPI>

    return datos;
}

//Demostración de asincronía
console.log("Hola")                              // Se ejecuta primero
getApiData("https://dog.ceo/api/breeds/image/random")
    .then((value: DataAPI) => {                  // Se ejecuta cuando la promesa se resuelve
        console.log(value.message)
    })
    .catch((error) => {                          // Se ejecuta si hay un error
        console.log(error)
    });
console.log("Adios")                             // Se ejecuta antes que la respuesta de la API


// let persona = {
//   id:1,
//   nombre:"Juan",
//   apellido:"Carrillo",
//   edad:20,
//   direccion: {
//     calle:"Madrid",
//     numero:20,
//     bloque: {
//       nombre:"Bloque A",
//       color:"Blanco"
//     }
//   },
//   esMayorEdad: function ():boolean {return this.edad >= 18?true:false}
// }

// persona.edad = 15;
// console.log(persona.nombre);
// console.log(persona['id']);
// console.log(persona.esMayorEdad());

// let persona2 = {
//   id:2,
//   nombre:"Manolo"
// }

// const config = {
//   version:'1.0.0',
//   appName: 'TypesScript-Tutorial',
//   developer: 'Alvaro'
// }

// const alertConfiguration = {
//   time:200,
//   type: 'danger',
//   position: 'center'
// }

// //Type
// //Es una plantilla que me va a permitir reutilizar código

// type IdTemplate = `uid-${number}`;

// type Usuario = {
//   readonly id:IdTemplate,
//   userName:string,
//   email:string,
//   estaActivo:boolean,
//   profileURL?:string
// }

// type PuestoTabajo = {
//   puestoTrabajo:string,
//   oficinaTrabajo:string
// }

// type Empleado = Usuario & PuestoTabajo;

// let ep1:Empleado = {
//   id:1,
//   userName:"Avilmor",
//   email:"n@gmail.com",
//   estaActivo:true,
//   puestoTrabajo:"Programador",
//   oficinaTrabajo:"Oficina 3"
// }

// ep1.email = "useremail@gmail.com";
// console.log(ep1);
// console.log(ep1.profileURL);


type Saludo = `Hola ${string}`;

let mensaje:Saludo = "Hola Alvaro";

console.log(mensaje);

//Uniones de tipos | 

type role = 'ADMIN' | 'USER'| 'MODERATOR' | 50;

let miRol:role = 50;

console.log(miRol);

//Interpolacion types

type Entidad = 'USUARIO' | 'PRODUCTO'
type Accion = 'CREAR' | 'MODIFICAR' | 'BORRRAR' |'LISTAR'
type Permisos = `${Entidad}_${Accion}`
let permiso1:Permisos = "USUARIO_MODIFICAR";

console.log(permiso1);


//Enumerados 

enum Direccion {

    Norte='NORTE',
    Sur='SUR',
    Este='ESTE',
    Oeste='OESTE'
}

type TDireccion = 'NORTE' | 'SUR' | 'ESTE' |'OESTE'

let d1:TDireccion = "NORTE";

//En tiempo de compilación el type desaparece mientras que los enumerados no

enum EstadoTicket {
    Urgente,
    Abierto,
    EnProceso,
    Cerrado    
}
let ticket = {
    nombre: 'Ticket 1',
    estado : EstadoTicket.Abierto
}

//Objeto se recupera de la base de datos
//Estado -> 0
let estadoTicket = 0;
switch(estadoTicket){
    case EstadoTicket.Abierto:
        console.log('Ticket abierto')
        break;
    case EstadoTicket.EnProceso:
        console.log('Ticket en proceso')
        break;
    case EstadoTicket.Cerrado:
        console.log('Ticket cerrado')
        break;
}

//Interfaces
type IdCoche = `id-coche-${number}`;
interface Vehiculo{
    readonly id: IdCoche,
    marca:string,
    modelo:string,
    anyo:number
    muestraInformacion: (propietario:string)=>void
}

interface Coche extends Vehiculo{
    tamanVolante: number;

}
interface Moto extends Vehiculo{
    tipoManillar:number;
}
//Creación de objetos
let miVehiculo:Vehiculo = {etiquetaEco:true,id:'id-coche-1', marca:'Seat', modelo:'Ibiza', anyo:2022, muestraInformacion: (propietario:string)=>{console.log(`El propietario es ${propietario}`)}}

console.log(miVehiculo.modelo);

interface Vehiculo{
    etiquetaEco:boolean;
}

interface OperacionMatematica{
    (a:number,b:number): number;
}
const suma:OperacionMatematica = (a:number,b:number)=> {return a+b};
const multiplica:OperacionMatematica = function (a:number,b:number) {return a*b}
const divide:OperacionMatematica =  (a:number, b:number) => {return a/2};

interface IJugador{
    sueldo:number,
    alias:string,
    estaActivo:boolean;
    equipo?:string|undefined;

}

class Persona{
    constructor(public nombre:string, public apellidos:string , public edad:number){} 
}

class Jugador extends Persona implements IJugador{
    
    //Propiedades
    constructor (nombre:string, apellidos:string, edad:number,public sueldo:number, public alias:string,public estaActivo:boolean,public equipo?:string){
        super(nombre,apellidos,edad);
    }

    muestraInformacion(){
        console.log(`El jugador ${this.nombre} ${this.estaActivo?'esta activo':'no esta activo'}`);
    }
    esMillonario(){
        return this.sueldo > 1000000 ? true:false;
    }
}

let j1:Jugador = new Jugador('Juanito','Juanete',34,100000000000,'Pepe', true);

j1.muestraInformacion()
j1.nombre = 'Fernando Vega'
j1.muestraInformacion();

interface Animal{
    nombre:string,
    emitirSonido():void,
}

class Perro implements Animal{
    constructor(public nombre:string){}
    emitirSonido(): void {
        console.log("Guau guau")
    }
}


class Gato implements Animal{
    constructor(public nombre:string){}
    emitirSonido(): void {
        console.log("Miau miau")
    }
}

console.log("-------------------------------------------");


let valor : string [] = ["Hola","Mundo"];



    
interface Producto{
    nombre:string;
    precio:number;
    stock:number;
}



class ProductoClase implements Producto{constructor(public nombre:string, public precio:number, public stock:number){}}

const producto1: Producto = new ProductoClase("producto1", 10, 2);
const producto2: Producto = new ProductoClase("producto2", 8, 3);
const producto3: Producto = new ProductoClase("producto3", 4, 0);

let productos : Producto [] = [producto1,producto2,producto3];

console.log(filtrarProductos(productos));


function filtrarProductos(productos:Producto [], precioMax?: undefined|number): Producto[]{
    let arrayVuelta: Producto[] = [];
    for(const p of productos){
        if(p.stock > 0){
            arrayVuelta.push(p);
        }

    }
    return arrayVuelta
}


