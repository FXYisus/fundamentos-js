// Escribí una función que reciba un array de números y devuelva un nuevo array con cada número al cuadrado (usando map).

function potenciaNumeros(numeros) {
    let cuadradoNumeros = [];
    cuadradoNumeros = numeros.map(num => num ** 2);
    return cuadradoNumeros;
};

console.log(potenciaNumeros([15,10,2]))