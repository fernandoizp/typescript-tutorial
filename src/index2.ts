
/**
 * Definición del objeto que obtendremos de la API
 */
type Hechizo = {
    id:string,
    name:string,
    description:string
}

/**
 * Función asíncrona que obtiene todos los objetos hechizos de una API pública.
 * @returns array de hechizos.
 */
async function obtenerDatos():Promise<Hechizo[]> {
    const peticion = await fetch("https://hp-api.onrender.com/api/spells");
    const data = peticion.json() as Promise<Hechizo[]>
    return data;
}

// Llamada a la función asíncrona y manejo de esta
obtenerDatos().then((data:Hechizo[])=>{console.log(data)})
.catch((error:string)=>{console.log(error)})




