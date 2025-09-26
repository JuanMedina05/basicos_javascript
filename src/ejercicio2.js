// Usos de los arrays

// Declaración:

const edades=[];
const frutas=["pera", "manzana", "fresa"];

// Usando el constructor array
const cp = new Array();
const cc = new Array("lomo", "queso", "fentanil");

// Añadir:
edades.push(10); //añade al final.
edades.unshift(100); //añade al principio.

// Eliminar:
edades.pop(); // elimina el último y retorna lo que ha eliminado.
edades.shift() // elimina el primer elmento y retorna lo que ha eliminado.


// Crear una función llamada filtrar longitud que le pase como parametros
// array de nombres, un tamaño y me devuelva solo a través de un array
// nombres cuya longitud sea mayor que la del parametro de tamaño

function filtrarLongitud(names =[], size=0){
    return names.filter(name => name.lenght);
}