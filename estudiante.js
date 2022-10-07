var colors = require('colors');
console.log('hello'.rainbow);


const estudiantes = [ 'Andres' , 'Albert' , "John" , 'Cristian']
let [ A , B , J , C] = estudiantes

const estudiantes2 = [ 'Albert O' , "John G" , 'Cristian B']

const estudiantes3 = [ ...estudiantes , ...estudiantes2]

const estudiante = {
    id: "1", 
    nombre: 'Andres',
    apellido: 'Meza',
    identificacion: "1031802174",
    amigos: estudiantes3
}

let { nombre , identificacion } = estudiante

console.log(estudiante)
console.log(estudiante.id.red)
console.log(nombre.white)
console.log(estudiante.apellido.red)
console.log(estudiante.identificacion.rainbow)
console.log(estudiantes)

console.log(A.bgWhite.green , B.bgCyan.black , J.rainbow , C.bgYellow)
console.log(estudiantes3)
