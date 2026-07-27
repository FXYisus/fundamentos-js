// Dado un array de nombres, escribí código que imprima solo los que empiezan con una letra específica.

const nombres = ["Alejandro", "Jesús", "Gabriel", "Diego", "Avelardo"];
let letra = "A";
let letrasIniciales = [];

letrasIniciales = nombres.filter( i => i.startsWith(letra));

console.log(letrasIniciales)