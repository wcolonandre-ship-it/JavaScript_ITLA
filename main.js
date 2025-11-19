//Problema: Escribe una función que tome una cadena de texto (string) y devuelva la misma cadena, pero invertida.

export function invertirCadena(texto) {
  // Tu código aquí
  {
  return texto.split("").reverse().join("");
}
  // Debe devolver el texto invertido
  // Pista: puedes usar .split(''), .reverse(), y .join('')
 
}
// Ejemplo:
// console.log(invertirCadena("Hola")); // Debería imprimir "aloH"

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que reciba un array de números y devuelva el número más grande de ese array.
export function encontrarMaximo(numeros) {
  // Tu código aquí
  {
  if (numeros.length === 0) return undefined;
  return Math.max(...numeros);
}

  // Debe devolver el número más alto del array 'numeros'
  // No uses Math.max() si quieres un reto ;)
  
}
// Ejemplo:
// console.log(encontrarMaximo([1, 5, 20, 8, 3])); // Debería imprimir 20

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que tome un array de números y devuelva un nuevo array que contenga únicamente los números pares.
export function filtrarPares(numeros) {
  // Tu código aquí
  {
  return numeros.filter(n => n % 2 === 0);
}
  // Debe devolver un nuevo array solo con los números pares
  // Pista: usa el operador módulo %
 
}
// Ejemplo:
// console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // Debería imprimir [2, 4, 6]

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que reciba una cadena de texto y devuelva cuántas vocales (a, e, i, o, u) contiene. No importa si son mayúsculas o minúsculas.
export function contarVocales(texto) {
  // Tu código aquí
  {
  const vocales = "aeiou";
  let contador = 0;

  for (let letra of texto.toLowerCase()) {
    if (vocales.includes(letra)) contador++;
  }

  return contador;
}

  // Debe devolver el número total de vocales en el 'texto'
  // Pista: convierte el texto a minúsculas primero
  
}
// Ejemplo:
// console.log(contarVocales("JavaScript es Genial")); // Debería imprimir 7

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que determine si una palabra es un palíndromo (se lee igual de izquierda a derecha que de derecha a izquierda). Debe devolver true o false.
export function esPalindromo(palabra) {
  // Tu código aquí
  {
  const limpio = palabra.toLowerCase();
  const invertido = limpio.split("").reverse().join("");
  return limpio === invertido;
}
  
  // Debe devolver true si la palabra es un palíndromo, false si no lo es
  // Pista: puedes reutilizar tu función 'invertirCadena'
}
// Ejemplo:
// console.log(esPalindromo("reconocer")); // Debería imprimir true
// console.log(esPalindromo("casa")); // Debería imprimir false

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que reciba un objeto y un string con el nombre de una propiedad. La función debe devolver el valor de esa propiedad. Si la propiedad no existe, debe devolver null.
export function obtenerPropiedad(objeto, propiedad) {
  // Tu código aquí
 {
  return objeto.hasOwnProperty(propiedad)
    ? objeto[propiedad]
    : undefined;
}

  // Debe devolver el valor de la 'propiedad' dentro del 'objeto'
}
// Ejemplo:
// const usuario = { nombre: "Gary", edad: 26 };
// console.log(obtenerPropiedad(usuario, "nombre")); // Debería imprimir "Gary"
// console.log(obtenerPropiedad(usuario, "trabajo")); // Debería imprimir null

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que calcule el factorial de un número. El factorial (representado como n!) es el producto de todos los enteros positivos menores o iguales a n. (Ej: 5! = 5 * 4 * 3 * 2 * 1 = 120).
export function factorial(n) {
  // Tu código aquí
  {
  let r = 1;
  for (let i = 1; i <= n; i++) {
    r *= i;
  }
  return r;
}
  // Debe devolver el factorial de 'n'
  // Por convención, el factorial de 0 (0!) es 1.

}
// Ejemplo:
// console.log(factorial(5)); // Debería imprimir 120
// console.log(factorial(0)); // Debería imprimir 1

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que tome un array de números y devuelva un nuevo array donde cada número haya sido multiplicado por 2.
export function duplicarNumeros(numeros) {
  // Tu código aquí
  {
  return numeros.map(n => n * 2);
}

}

  // Debe devolver un nuevo array con cada número duplicado
  // Pista: Este es un caso perfecto para usar el método .map()
 
// Ejemplo:
// console.log(duplicarNumeros([1, 2, 3])); // Debería imprimir [2, 4, 6]

//---------------------------------------------------------------------------------------------------------

//Problema: Escribe una función que reciba un número n y devuelva un array con los números del 1 hasta n. PERO:
//Si el número es múltiplo de 3, en lugar del número, debe poner "Fizz".
//Si el número es múltiplo de 5, debe poner "Buzz".
//Si es múltiplo de 3 y 5 a la vez, debe poner "FizzBuzz".
export function generarFizzBuzz(n) {
  // Tu código aquí
    const resultado = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(i);
    }
  }

  return resultado;



  // Debe devolver un array con la secuencia FizzBuzz hasta 'n'
}
// Ejemplo:
// console.log(generarFizzBuzz(15));
// Debería imprimir:
// [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

