// Escribí una función que reciba un array de objetos "persona" (con nombre y edad) y devuelva solo los nombres de los mayores de 18.

const persona = [
    {
        nombre: "Juan",
        edad: 10
    },
    {
        nombre: "José",
        edad: 12
    },
    {
        nombre: "Abuelita",
        edad: 65
    }
];

function nombrePersona(nombre, edad) {
    let nombresMayoresEdad = [];
    nombresMayoresEdad = nombre.filter((persona => persona.edad >= 18)).map(function(element){
        return `${element.nombre}`
    });
    return nombresMayoresEdad
};

console.log(nombrePersona(persona))