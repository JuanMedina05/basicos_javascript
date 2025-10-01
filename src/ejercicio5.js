// .map <- para recorrer un array
// .concat <- concatena array

// .at <--acceso con índices negativos.

const frutas = ["manzanas", "peras", "melocotones", "flan"];
console.log(frutas.at(-2)); // melocotones
console.log(frutas.slice(-2)); // melocotones, flan

// .splice ---> frutas.splice(1,2) <-- elimina 2 elementos desde la posicion 1


// SET <-- Otro tipo de datos (datos únicos)

const pesos = [4,5,3,2,5,6,4,4,3,7,1,0];

const sinDuplicados =[...new Set(pesos)] // <-- usamos set para crear elementos únicos.

// .reduce <- reducir un array a un único valor

// acumulador, elementos <-- no son opcionales

// Encontrar máximo y mínimo:
pesos.reduce( (max, pesos)=>{
    return (peso>max ? peso:max)
},pesos[0])
pesos.reduce((min, pesos)=>peso<min?peso:max, pesos[0])

// 3. Dado un array que sean manzana, platano, manzana, manzana, pera, devolvemre un objeto clave valor que me diga nombre de la fruta: cuantas veces aparece esa fruta
const frutas2 = ["manzana", "platano", "naranja", "manzana", "platano", "pera", "pera"];
frutas2.reduce((acc,fruta)=>{
    acc[fruta] = (acc[fruta]||0)+1;
    return acc;
},{})

// 4. Dado el siguiente array bidimensional aplanar dicho array en uno unidimensional


// array de objetos.
const usuarios = [
    {id: 1, nombre:"Jose", edad:25, data:{books:100}},
    {id: 2, nombre:"Manuel", edad:30, data:{books:80}},
    {id: 3, nombre:"Fernando", edad:37, data:{books:50}},
    {id: 4, nombre:"Javi", edad:19, data:{books:0}},
    {id: 5, nombre:"Manuel", edad:24, data:{books:63}},
    {id: 6, nombre:"Fernando", edad:40, data:{books:50}}
];

// Dame la información del usuario cuyo nombre es Jose
usuarios.find(usuarios=>usuarios.nombre.toLowerCase==="jose");

// Sacar los usuarios cuya edad es mayor o igual a 28
let result1 = usuarios.find(usuarios=>Number(usuarios.edad)>=28) ?? {}

// 1.- Devolver un array con solo los nombres de los usuarios que tienen en su biblioteca más de 20 libros
usuarios.find(usuarios=>Number(usuarios.data.books)>20).nombre ?? {}

// 2.- Obtener el valor promedio total de todos los libros si suponemos un precio medio de 28 euros
usuarios.

// 3.- Decir cuales usuarios no tienen libros
usuarios.find(usuarios=>Numero(usuarios.data.books)==0).nombre ?? {}


const products = [
    {id:1, nombre:"Laptop", precio:1200, stock:5, categoría:"Tecnología"},
    {id:2, nombre:"Camiseta", precio:35, stock:15, categoría:"Ropa"},
    {id:3, nombre:"Monitor", precio:300, stock:0, categoría:"Tecnología"},
    {id:4, nombre:"Libro", precio:20, stock:50, categoría:"Literatura"},
    {id:5, nombre:"Móvil", precio:800, stock:10, categoría:"Tecnología"},
    {id:6, nombre:"Pantalón", precio:60, stock:5, categoría:"Ropa"}
];

// Se pide:
// 1.- Obtener un array con los nombres de todos los productos que están agotados.
products.find(products=>Number(products.stock)=0).nombre ?? [];

// 2.- Calcular el valor total del inventario (precio*stock) de todos los productos.


// 3.- Filtarar los productos que pertenecen a la categoría "Tecnología" y tienen un precio mayo a 500.
products.find(products=>products.categoría==="Tecnología"&&Number(products.precio)>500) ?? {};

// 4.- Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoría "Ropa".
