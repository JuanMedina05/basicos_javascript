//pasar como función un numero y decir si estás aprobado o no. Crear una versión 2.0 que si le paso un número mayor o igual que 9 me diga sobresaliente, si el numero está entre el 5 y 9 me diga aprobado y si está entre 0 y 5 diga suspenso

const aprobados = (nota=0) => (nota<5 ? "Suspenso":"Aprobado");
const aprobadosV2 = (nota=0) => nota>=9?"Sobresliente":nota>=5?"Aprobado":"Suspenso";

console.log(aprobadosV2(8));



function aprobado(nota){
    return nota<5 ? "Suspenso":"Aprobado";
}