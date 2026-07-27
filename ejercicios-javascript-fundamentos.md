# Ejercicios de JavaScript — Fundamentos

30 ejercicios divididos en 3 niveles. Se resuelven en orden, de a uno.

## Nivel Básico (variables, tipos, condicionales, bucles simples)

1. Creá una variable con tu nombre y otra con tu edad, e imprimí un mensaje que diga "Me llamo X y tengo Y años" usando template literals (`` ` ` ``).
2. Dado un número, determiná si es par o impar e imprimí el resultado.
3. Dados dos números, imprimí cuál es el mayor (o si son iguales).
4. Escribí un programa que convierta una temperatura de Celsius a Fahrenheit.
5. Dada una edad, clasificá a la persona en "niño" (0-12), "adolescente" (13-17) o "adulto" (18+).
6. Escribí un bucle `for` que imprima los números del 1 al 20.
7. Escribí un bucle que imprima solo los números pares del 1 al 30.
8. Calculá la suma de todos los números del 1 al 100 usando un bucle.
9. Escribí un bucle `while` que imprima una cuenta regresiva del 10 al 0.
10. Dado un número, determiná si es positivo, negativo o cero.

## Nivel Medio (funciones, arrays, objetos, lógica combinada)

11. Escribí una función `esPrimo(numero)` que reciba un número y devuelva `true` o `false` según si es primo.
12. Escribí una función que reciba un array de números y devuelva el promedio.
13. Escribí una función `invertirTexto(texto)` que devuelva un string invertido (sin usar métodos que lo hagan directo, pensalo con un bucle).
14. Dado un array de nombres, escribí código que imprima solo los que empiezan con una letra específica.
15. Escribí una función que reciba un array de números y devuelva un nuevo array solo con los números pares (usando `filter`).
16. Escribí una función que reciba un array de números y devuelva un nuevo array con cada número al cuadrado (usando `map`).
17. Escribí una función que reciba un array de números y devuelva la suma total (usando `reduce`).
18. Creá un objeto que represente una "persona" (nombre, edad, ciudad) e imprimí sus datos usando desestructuración.
19. Escribí una función `contarVocales(texto)` que cuente cuántas vocales tiene un string.
20. Escribí una función que reciba un array de objetos "persona" (con nombre y edad) y devuelva solo los nombres de los mayores de 18.

## Nivel Superior (POO, closures, algoritmos, asincronía básica)

21. Creá una clase `CuentaBancaria` con propiedades `titular` y `saldo`, y métodos `depositar(monto)` y `retirar(monto)` (que valide que no se pueda retirar más de lo disponible).
22. Escribí una función `contador()` que use un closure para devolver otra función que incremente un valor cada vez que se la llama, recordando el valor entre llamadas.
23. Implementá el algoritmo de "Fizz Buzz": del 1 al 100, imprimí "Fizz" si el número es múltiplo de 3, "Buzz" si es múltiplo de 5, "FizzBuzz" si es múltiplo de ambos, o el número si no es ninguno de los anteriores.
24. Escribí una función recursiva que calcule el factorial de un número.
25. Creá dos clases, `Animal` y `Perro`, donde `Perro` herede de `Animal` (usando `extends`), y sobrescriba un método (`hacerSonido()`).
26. Escribí una función que reciba un array de objetos "producto" (nombre, precio, categoría) y devuelva un objeto agrupando los productos por categoría.
27. Escribí una función que simule una consulta a una API usando una `Promise` con `setTimeout`, y consumila con `async/await`.
28. Implementá una función `buscarBinario(arrayOrdenado, valor)` que aplique el algoritmo de búsqueda binaria.
29. Creá una clase `Pila` (Stack) con métodos `push`, `pop`, `peek` y `estaVacia`, implementada internamente con un array.
30. Escribí una función `debounce(funcion, tiempo)` que retrase la ejecución de una función hasta que pase un tiempo determinado sin que se la vuelva a llamar (concepto usado mucho en la práctica para inputs de búsqueda).
