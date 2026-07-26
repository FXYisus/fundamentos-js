// Escribí una función esPrimo(numero) que reciba un número y devuelva true o false según si es primo.

function esPrimo(numero) {
    let valor = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            valor = !valor;
            break
        };
    };

    return valor;
};

console.log(esPrimo(7))
console.log(esPrimo(8))