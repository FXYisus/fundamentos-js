// Dada una edad, clasificá a la persona en "niño" (0-12), "adolescente" (13-17) o "adulto" (18+).

let edad = 18;

if (edad >= 0 && edad <= 12) {
    console.log(`Eres un niño de ${edad}`);
} else if (edad >= 13 && edad <= 17) {
    console.log(`Eres un adolescente de ${edad}`);
} else {
    console.log(`Eres un adulto de ${edad}`);
}