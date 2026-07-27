// Escribí una función invertirTexto(texto) que devuelva un string invertido
// (sin usar métodos que lo hagan directo, pensalo con un bucle).

function invertirTexto(text) {
    let textoInvertido = "";
    for (let i = 0; i < text.length; i++) {
        textoInvertido = text[i] + textoInvertido;
    };
    return textoInvertido;
};

console.log(invertirTexto("Prueba"))