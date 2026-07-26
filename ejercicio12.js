// Escribí una función que reciba un array de números y devuelva el promedio.

function calcularPromedio(numeros) {
    let promedio = 0;
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
        promedio = suma / numeros.length
    };
    return promedio
};



console.log(calcularPromedio([16, 20, 9, 15]));