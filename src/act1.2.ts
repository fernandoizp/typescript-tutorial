

/**
 * EJERCICIO 1
 * 
 */

/* 
type EstadoTarea = 'PENDIENTE' | 'ENPROCESO' | 'COMPLETADA'

type Tarea = {
    readonly titulo:string,
    descripcion:string,
    estado:EstadoTarea
}

class GestionTareas {
    private tareas:Tarea[] = []

    public anadirTarea(tarea:Tarea):void{
        this.tareas.push(tarea);
    }

    public marcarCompletada(titulo:string):void{
        const tareaBuscada:Tarea|undefined = this.tareas.find((tarea:Tarea)=>{return tarea.titulo.trim() == titulo.trim()})
        if(tareaBuscada!=undefined){
            tareaBuscada.estado="COMPLETADA";
        }
    }
    
    public listarTareas():Tarea[]{
        return this.tareas.filter((tarea:Tarea)=>{return tarea.estado == "PENDIENTE"})
    }

}

// Declaración e inicialización del Gestor de Tareas
const gestorTareas = new GestionTareas();

// Creación e inicialización de los objetos que va a manejar el gestor
let t1:Tarea = {titulo:'Sintaxis', descripcion:'Aprender la sintaxis de TS',estado:'PENDIENTE'}
let t2:Tarea = {titulo:'Practicar', descripcion:'Practicar la sintaxis de TS',estado:'PENDIENTE'}
let t3:Tarea = {titulo:'Objetos', descripcion:'Trabajar usando objetos en TS',estado:'PENDIENTE'}

// Uso del método añadir tarea del gestor
gestorTareas.anadirTarea(t1);
gestorTareas.anadirTarea(t2);
gestorTareas.anadirTarea(t3);


// Listamos todas las tareas pendientes
console.log(`Tareas pendientes:`)
gestorTareas.listarTareas().forEach((tarea:Tarea)=>{console.log(tarea)})

// Modificamos estado de una tarea
gestorTareas.marcarCompletada("Sintaxis")

// Listamos todas las tareas pendientes
console.log(`Tareas pendientes:`)
gestorTareas.listarTareas().forEach((tarea:Tarea)=>{console.log(tarea)})


/**
 * EJERCICIO 2
 */


/**
abstract class Producto {

    constructor(public id:number, public nombre:string, public precio:number){}

    public mostrarDetalles(){}
}

class Alimento extends Producto{

    constructor(public id:number, public nombre:string, public precio:number,public fechaCaducidad:string){
        super(id,nombre,precio)
    }

    public mostrarDetalles(){
        console.log(`${this.id} - ${this.nombre} - ${this.precio} - ${this.fechaCaducidad}`)
    }
}

class Electronica extends Producto{

    constructor(public id:number, public nombre:string, public precio:number,public garantia:number){
        super(id,nombre,precio)
    }

    public mostrarDetalles(){
        console.log(`${this.id} - ${this.nombre} - ${this.precio} - ${this.garantia}`)
    }
}


let alimento1:Alimento = new Alimento(1,"Zanahorias",2,"12-12-2025")
let electronica1:Electronica = new Electronica(1,"Placa Base",150,3)

// Mostramos la información de los alimentos y electronica
alimento1.mostrarDetalles()
electronica1.mostrarDetalles()

 */

/*function saludar(persona: {name:string, age:number}) {
    const {name, age} = persona
   console.log(`Hola ${name}, tienes ${age} años`)
}

saludar({name:'Pepe', age:67})
*/

/*
type EstadoTarea = 
    'PENDIENTE'| 'ENPROCESO'|'COMPLETADA'

type Tarea = {
    readonly titulo:String
    descripcion:String
    estado:EstadoTarea
}

class GestionTareas{
    private tareas:Tarea[] = []

    public aniadirTarea(tarea:Tarea):void{
        this.tareas.push(tarea)
    }

    public mostrarTarea():Tarea[]{
        return this.tareas.filter((tarea:Tarea)=>{return tarea.estado == "PENDIENTE"})
    }


}
const gestordeTareas = new GestionTareas();

let tarea1:Tarea = {titulo:'titulo1',descripcion:'descrp1',estado:'PENDIENTE'}
let tarea2:Tarea = {titulo:'titulo2',descripcion:'descrp2', estado:'COMPLETADA'}

gestordeTareas.aniadirTarea(tarea1)
gestordeTareas.aniadirTarea(tarea2)

console.log(gestordeTareas.mostrarTarea());
*/

/*
abstract class Producto{
    constructor(public id: number, public nombre: string, public precio: number) {}

    public mostrarDetalles(){}

}

class Alimento extends Producto{
    constructor(public id: number, public nombre: string, public precio: number, public fechaCaducidad:string){
        super(id,nombre,precio)
    }
    mostrarDetalles(){
        console.log(`Producto ${this.id}`)
    }

}

let alimento1:Alimento = new Alimento(1,"alimento1",34, "20-08-2189")

alimento1.mostrarDetalles()

*/

/*
abstract class Empleado{
    constructor(public id:number, public nombre:string, public sueldo:number){}

    public abstract mostrarInfo():void

}

class Trabajador extends Empleado{
    constructor(public id:number, public nombre:string, public sueldo:number, public lenguaje:string){
        super(id,nombre,sueldo)
    }

    mostrarInfo(){
        console.log(`Trabajador: ${this.id}, ${this.nombre}`);
    };
}

class Diseñador extends Empleado{
    constructor(public id:number, public nombre:string, public sueldo:number, public herramienta:string){
        super(id,nombre,sueldo)
    }

    mostrarInfo(){
        console.log(`Diseñador: ${this.id}, ${this.nombre}`);
    };
}

let trabajador1:Trabajador = new Trabajador(1,"Pepe",678,"Español")
let diseñador1:Diseñador = new Diseñador(1,"Pepe",678,"Llave")


let plantilla: Empleado [] = [trabajador1,diseñador1]

plantilla.forEach(e => {
    e.mostrarInfo()
});

function operar(a:number,b:number, fn:(x:number,y:number) => number):number{
    return fn(a,b)
}

const sumar = (x:number,y:number) => {return x + y}
const restar = (x:number,y:number) => x-y
console.log(operar(2,4,sumar))
console.log(operar(10,4,restar))
*/

/*
interface Producto{
    id:number
    nombre:string
    precio:number
    stock:number
}

let producto1:Producto = {id:1,nombre:"naruto",precio:20,stock:11}
let producto2:Producto = {id:1,nombre:"Pepe",precio:5,stock:11}
let arrayProductos:Producto[] = []

arrayProductos.push(producto1,producto2)

function filtrarProductos(arrayProductos:Producto[], condicion:(p:Producto) => boolean):Producto[]{

    return arrayProductos.filter(condicion)
}

let baratos = filtrarProductos(arrayProductos, p => p.precio < 10);
let naruto = filtrarProductos(arrayProductos, p => p.nombre == "naruto");
console.log(baratos)
console.log(naruto)

//arrayProductos.forEach(producto => {console.log(producto)});
*/




//Ejercicio1
/*
type Producto = {
    nombre:string,
    precio:number,
    stock:number;
}

let arrayProducto:Producto[] = [];

function filtrarProductos(arrayProducto:Producto[], precioMax?:number):Producto[]{
    let filtrados:Producto[] = []
    if(precioMax != null){
        filtrados = arrayProducto.filter(data => data.stock > 0 &&  data.precio > precioMax)
    }
    return filtrados
}

function slicer(arrayProducto:Producto[]):Producto[]{
    let sliceada:Producto[] = []
    sliceada = arrayProducto.slice(0,1)

    return sliceada
}

let producto1:Producto = {nombre: 'pepe', precio: 6, stock: 7} 
let producto2:Producto = {nombre: 'antonio', precio: 9, stock: 9} 
arrayProducto.push(producto1, producto2)
console.log(filtrarProductos(arrayProducto,8));
console.log(" ")
console.log(slicer(arrayProducto))
*/
//Ejercicio2


/*
type Estadisticas = {
    media:number,
    notaAlta:number,
    notaBaja:number,
    aprobados:number;
}

type Nota = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

let nota1:Nota = 6;
let nota2:Nota = 3;
let nota3:Nota = 10;
let nota4:Nota = 8;

let arrayNotas:Nota[] = [];
arrayNotas.push(nota1,nota2,nota3,nota4)
console.log(analizarNotas(arrayNotas))

function analizarNotas(arrayNotas:Nota[]):Estadisticas{
    const total = arrayNotas.reduce((ac:number,b:Nota) => ac + b , 0);

    const media = total/arrayNotas.length

    const notaAlta = Math.max(...arrayNotas) 

    const notaBaja = Math.min(...arrayNotas) 

    let aprobados = 0;
    arrayNotas.forEach(nota => {
        if(nota >= 5) {
            aprobados++;
        }
    });
    ;

    return {media, notaAlta, notaBaja, aprobados}
}
*/

//Ejercicio2

/*
type Estado = 'Pendiente' | 'En Progreso' | 'Completada'
type Tarea = {
    titulo:string,
    descripcion:string,
    estado:Estado
    }

class GestionTareas{
    
    public tareas:Tarea[] = [];

    anadirTarea(tarea:Tarea):void{
        this.tareas.push(tarea)
    } 

    marcarCompletada(titulo:string):void{
        this.tareas.forEach(element => {
            if(titulo == element.titulo && element.estado != 'Completada'){
                element.estado = 'Completada'
                console.log('Estado cambiado a completado')
            }
        });
    }

    listarTareas():Tarea[]{
        const pendientes = this.tareas.filter((d) => d.estado == 'Pendiente')
        return pendientes
    }
}

let tarea1:Tarea = {titulo:"1", descripcion:"1", estado:'Pendiente'}
let tarea2:Tarea = {titulo:"2", descripcion:"2", estado:'Pendiente'}
let tarea3:Tarea = {titulo:"3", descripcion:"3", estado:'Pendiente'}
let tarea4:Tarea = {titulo:"4", descripcion:"4", estado:'Pendiente'}
let gestor = new GestionTareas();
gestor.anadirTarea(tarea1)
gestor.anadirTarea(tarea2)
gestor.anadirTarea(tarea3)
gestor.anadirTarea(tarea4)

gestor.marcarCompletada("1")
gestor.marcarCompletada("4")

console.log(gestor.listarTareas());

*/


//Ejercicio 3
/*
type Hechizo = {
    id:string,
    name:string
    description:string
}
async function obtenerHechizos(url:string):Promise<Hechizo[]>{
    const peticion = await fetch(url)
    const data = peticion.json() as Promise <Hechizo[]>

    return data
}

obtenerHechizos("https://hp-api.onrender.com/api/spells").then((data:Hechizo[]) => {
    const filtrado = data.filter((d) => d.name.length == 12)
    filtrado.forEach(element => {
        console.log(element)
    });
}).catch((error) => {console.log(error)})

*/
















































type Estado = 'Pendiente' | 'En Proceso' | 'Completado'

type Tarea = {titulo:string, descripcion:string, estado:Estado}

let tarea1:Tarea = {titulo:"tarea1",descripcion:"descrp1" ,estado:'Completado'}

let tarea2:Tarea = {titulo:"tarea1",descripcion:"descrp2",estado:'Pendiente'}

let tarea3:Tarea = {titulo:"tarea3",descripcion:"descrp3",estado:'En Proceso'}

let arrayTareas:Tarea[] = [];

arrayTareas.push(tarea1)

arrayTareas.push(tarea2)

arrayTareas.push(tarea3)

arrayTareas.forEach(element => {
    console.log(`Tarea: ${element.titulo} descripcion: ${element.descripcion} estado: ${element.estado}`)
});

const arrayFiltrado = arrayTareas.findIndex(element => {
    return element.titulo == "tarea1"
})

console.log(arrayFiltrado)

abstract class ClaseAbstracta{
    constructor(public atributo1:number, public atributo2:string){}

    public ladrar():void{
        console.log("Guau")
    }
}


class perroHijo extends ClaseAbstracta{
}

const p = new perroHijo(5,"pepe")

p.ladrar();






//"https://hp-api.onrender.com/api/spells"





















