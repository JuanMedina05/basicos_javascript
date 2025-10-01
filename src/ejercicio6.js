const numeros = [1,2,3,4,5];

// Generar un objeto resumen de mi array que tenga los siguientes campos: 
/*
{
    valor: numero_correspondiente,
    posición: posición_dentro_del_array,
    esUltimo: array_que_me_diga_si_es_el_último (truefalse)
}
*/

const resumenNumeros = numeros.map((numero, index, array)=>{
    return {
        value: numero,
        position: index,
        esUltimo: index === array.length-1
    };
});


const products = [
    {
        name:"laptop", price:1000, stock:5, active:true
    },
    {
        name:"Mouse Logitech",price:28.56, stock:0 , active:false
    }
]
/* Mapeado
nombre
precioOriginal
precioConIva
hayStock
*/
const mapProducts = products.map((product)=>{
    return {
        nombre: product.name,
        originalPrice: product.price,
        priceWithIVA: product.price*1.21,
        avaible: product.stock > 0,
    };
})




// Filtrar los productos que tienen stock y están activos
const stockProducts = products.filter(products=>{
    return Number(products.stock)>0 && products.active
});


// Buscar todos los laptops case insensitive (tengan o no mayusuculas)
//const laptops = products.filter((product)=>product.name.toLowerCase.includes("laptop"));

const laptopsArray = (products, wordToFind) =>products
    .filter((product)=>product.name.toLowerCase
        .includes(wordToFind.toLowerCase()))

// Crear una fucnión que le pase como parametro un array de productos, precio inicial, precio final, 
// y devuelva los productos cuyo precio está en ese rango de valores (sin incluirlos).

function findProducts(array,max,min){
    return array.filter(array.price)>min && array.filter(array.price)<max
}

// Modificar findProductos para que además me muestre sólo los que están activos.


const carrito = [
    {
        name:"laptop", price:1000, count:5, category: "electrónica"
    },
    {
        name:"Mouse Logitech",price:28.56, count:1, category: "electrónica"
    },
    {
        name:"Monitor MSI 24",price:210.60, count:10, category: "electrónica"
    },
    {
        name:"Teclado Mecánico",price:150, count:2, category: "electrónica"
    },
    {
        name:"Polo",price:150, count:2, category: "ropa"
    },
    {
        name:"Camiseta",price:150, count:2, category: "ropa"
    },
];

// Función que le pase como parametro carrito y me devuelva el precio total 
/**
 * @author: Juan PM
 * @param {Number} vat(IVA) - IVA a aplicar
 * @param {Object[]} carrito 
 * @return {Number} - Precio Total del carrito + IVA incluido
 */
function totalPrice(carrito,vat=1.21){
    return carrito
        .reduce((total,product)=>product.price*vat+total
        ,0)
};

// Agrupar el carrito por categorías

const productsCategory = (carrito=[])=>
    carrito.reduce((groups,product)=>{
        const categoryFilter=product.category;
        if(!groups[categoryFilter]){
            groups[categoryFilter]=[];
        }
        groups[categoryFilter].push(product)
        return groups;
    },{}
);


/*
{
    Electronica:[
        {
        },
        {
        }
    ],
    Ropa:[
        {
        },
        {
        }
    ]
}
*/

const votos = ["Jose", "Ana", "Carlos", "Ana", "Ana","Fernando", "Jose"];

// Función al que le paso un array de votos y que cuente cuantos votos tiene cada usuario.

function contarVotos(arrayVotos){
    return arrayVotos.reduce((acc,name)=>{
        acc[name] = (acc[name]||0)+1;
        return acc;
    },{})
}
console.log(contarVotos(votos));

const usuarios =[
    { id: 1, nombre:"Ana", rol: "admin"},
    { id: 2, nombre:"Carlos", rol: "usuario"},
    { id: 3, nombre:"Beatriz", rol: "admin"},
]

// Buscar el usuario cuyo id=2 y obtener el rol que tiene

const findUsers = (users=[],id=1)=>{
    return users.find((user)=>{
        return user.id === Number(id) ? user.rol:"Error";
    });
}

// Buscar el indice del array donde se encuentra el usuario con id buscado.

const findUserIndex = () => {
    return users.findIndex((user)=>{
        return user.id === Number(id);
    });
}

// Devuelve -1 si findIndex devuelve error o no encuentra la acción requerida.

// .some() <-- Devuelve true si al menos un elemento cumple la condición *****

const numerosPares = [1,2,3,4];

// ¿hay números pares en ese Array?
numerosPares.some(numero=>numero%2===0);