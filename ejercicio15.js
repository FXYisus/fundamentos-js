// Escribí una función que reciba un array de números y devuelva un nuevo array solo con los números pares (usando filter).

function escogerNumerosPares(numeros) {
    let numerosPares = [];
    numerosPares = numeros.filter(numero => numero % 2 === 0 );
    return numerosPares;
};

console.log(escogerNumerosPares([10, 5, 6, 7]));