// Creá un objeto que represente una "persona" (nombre, edad, ciudad) e imprimí sus datos usando desestructuración.

const persona = {
    nombre: "Jesús Gabriel",
    edad: 18,
    ciudad: "Rubio"
};


nombrePersona = persona.nombre;
edadPersona = persona.edad;
ciudadPersona = persona.ciudad;

console.log(`
    Nombre: ${nombrePersona},
    Edad: ${edadPersona},
    Ciudad: ${ciudadPersona}.
`)