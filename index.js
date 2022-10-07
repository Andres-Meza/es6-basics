import { materias } from "./materias.js";
import pkg from 'colors'

let[ id , name ] = materias

console.log( materias )

materias.forEach( function(materia) {
    console.log(`ID: ${ materia.id }`.gray)
    console.log(`MATERIA: ${ materia.nombre }`.yellow)
    console.log(`INSTRUCTOR: ${ materia.instructor }`.blue)
    console.log(`TIPO MATERIA: ${ materia.tipo }`.red)
    console.log(`NOTAS: ${ materia.notas }`.green)
    console.log("---------------------".rainbow)
    if( materia.tipo === 'Técnica' ){
        console.log(`MATERIA: ${ materia.nombre }`.cyan)
        console.log(`INSTRUCTOR: ${ materia.instructor }`.gray)
        console.log('---------------------------------'.rainbow)
    }
})

const profesores = materias.map(( materia ) => {
    return materia.instructor
})

console.log(profesores)

const PHP = materias.find( ( materia ) => {
    return materia.instructor === "Cristian Buitrago"
})

console.log( PHP )

const JAVA = materias.filter( ( materia ) => {
    return materia.instructor === "Tatiana Cabrera"
})
console.log( JAVA )

console.log( "------------INSERTAR---------".red )
materias.push({
    id: 4,
    nombre: "Diseño Front-Ens",
    instructor: "Adriana Duarte",
    tipo: "Transversal",
    notas: [
        4,
        4,
        4
    ]
})

console.log( materias )

// console.log( "------------BORRAR---------".red )
// materias.splice(3)
// console.log(materias)

console.log( "------------ACTUALIZAR---------".red )
materias.forEach( function(materia) {
    if(materia.id === 1){
        materia.nombre = "JavaScript - Framework"
    }
})
console.log(materias)