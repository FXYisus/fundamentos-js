// Escribí una función que reciba un array de números y devuelva la suma total (usando reduce).

function sumarNumeros(numeros) {
    let totalSuma = 0;

    totalSuma= numeros.reduce((suma, num) => suma + num, 0);
    // no es necesario de poner 0, pero vendría siendo
    // el acumulador, si pones 1 ya no daría 215 sino 216

    return totalSuma;
};

console.log(sumarNumeros([15, 20, 35, 45, 100]))