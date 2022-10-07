function callEstudent( alumno , callback) {
    let callEstudent = `Llamando al estudiante: ${ alumno }`
    callback(callEstudent)    
}

function print(text){
    console.log(text)
}

callEstudent("Andres Meza" , print)