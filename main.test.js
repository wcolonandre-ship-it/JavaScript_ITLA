// main.test.js

// 1. Importamos TODAS las funciones desde main.js
import {
  invertirCadena,
  encontrarMaximo,
  filtrarPares,
  contarVocales,
  esPalindromo,
  obtenerPropiedad,
  factorial,
  duplicarNumeros,
  generarFizzBuzz
} from './main.js';


// -----------------------------------------------------------------
// Pruebas para invertirCadena
// -----------------------------------------------------------------
describe('🔄 Pruebas para invertirCadena', () => {
  
  it('debería invertir una cadena simple', () => {
    expect(invertirCadena("Hola")).toBe("aloH");
  });

  it('debería manejar una cadena vacía', () => {
    expect(invertirCadena("")).toBe("");
  });

  it('debería manejar un palíndromo', () => {
    expect(invertirCadena("reconocer")).toBe("reconocer");
  });

  it('debería invertir una cadena con espacios', () => {
    expect(invertirCadena("JavaScript es genial")).toBe("laineg se tpircSavaJ");
  });
});


// -----------------------------------------------------------------
// Pruebas para encontrarMaximo
// -----------------------------------------------------------------
describe('🥇 Pruebas para encontrarMaximo', () => {

  it('debería encontrar el número más grande en un array estándar', () => {
    expect(encontrarMaximo([1, 5, 20, 8, 3])).toBe(20);
  });

  it('debería manejar números negativos', () => {
    expect(encontrarMaximo([-10, -5, -2, -8])).toBe(-2);
  });

  it('debería manejar un array con un solo número', () => {
    expect(encontrarMaximo([42])).toBe(42);
  });

  it('debería devolver undefined para un array vacío', () => {
    // Asumimos que si no hay máximo, devuelve undefined
    expect(encontrarMaximo([])).toBeUndefined(); 
  });
});


// -----------------------------------------------------------------
// Pruebas para filtrarPares
// -----------------------------------------------------------------
describe('🔢 Pruebas para filtrarPares', () => {

  it('debería filtrar pares de una lista mixta', () => {
    const resultado = filtrarPares([1, 2, 3, 4, 5, 6]);
    // Usamos toEqual para comparar el contenido de arrays
    expect(resultado).toEqual([2, 4, 6]); 
  });

  it('debería devolver un array vacío si no hay pares', () => {
    expect(filtrarPares([1, 3, 5, 7])).toEqual([]);
  });

  it('debería manejar el cero como un número par', () => {
    expect(filtrarPares([0, 1, 2, 3])).toEqual([0, 2]);
  });

  it('debería devolver un array vacío para un input vacío', () => {
    expect(filtrarPares([])).toEqual([]);
  });
});


// -----------------------------------------------------------------
// Pruebas para contarVocales
// -----------------------------------------------------------------
describe('🅰️ Pruebas para contarVocales', () => {

  it('debería contar vocales en minúsculas', () => {
    expect(contarVocales("hola mundo")).toBe(4);
  });

  it('debería ser insensible a mayúsculas y minúsculas', () => {
    expect(contarVocales("JavaScript es Genial")).toBe(7);
  });

  it('debería devolver 0 si no hay vocales', () => {
    expect(contarVocales("rhythm")).toBe(0);
  });

  it('debería devolver 0 para una cadena vacía', () => {
    expect(contarVocales("")).toBe(0);
  });
});


// -----------------------------------------------------------------
// Pruebas para esPalindromo
// -----------------------------------------------------------------
describe(' palindrome Pruebas para esPalindromo', () => {
  
  it('debería devolver true para un palíndromo real', () => {
    expect(esPalindromo("reconocer")).toBe(true);
  });

  it('debería devolver false para una palabra normal', () => {
    expect(esPalindromo("casa")).toBe(false);
  });

  it('debería ser insensible a mayúsculas (si la función lo maneja)', () => {
    // Esta prueba fallará si tu función no convierte a minúsculas
    expect(esPalindromo("Oso")).toBe(true);
    expect(esPalindromo("Anna")).toBe(true);
  });

  it('debería devolver true para una cadena vacía', () => {
    expect(esPalindromo("")).toBe(true);
  });
});


// -----------------------------------------------------------------
// Pruebas para obtenerPropiedad
// -----------------------------------------------------------------
describe('🤖 Pruebas para obtenerPropiedad', () => {
  const usuario = { nombre: "Gary", edad: 26, profesion: "Data Scientist" };

  it('debería devolver el valor de una propiedad existente', () => {
    expect(obtenerPropiedad(usuario, "nombre")).toBe("Gary");
  });

  it('debería devolver el valor numérico de una propiedad existente', () => {
    expect(obtenerPropiedad(usuario, "edad")).toBe(26);
  });

  it('debería devolver undefined si la propiedad no existe', () => {
    expect(obtenerPropiedad(usuario, "hobby")).toBeUndefined();
  });

  it('debería devolver undefined de un objeto vacío', () => {
    expect(obtenerPropiedad({}, "propiedad")).toBeUndefined();
  });
});


// -----------------------------------------------------------------
// Pruebas para factorial
// -----------------------------------------------------------------
describe('🪜 Pruebas para factorial', () => {
  
  it('debería calcular el factorial de 5', () => {
    expect(factorial(5)).toBe(120);
  });

  it('debería devolver 1 para el factorial de 0', () => {
    expect(factorial(0)).toBe(1);
  });

  it('debería devolver 1 para el factorial de 1', () => {
    expect(factorial(1)).toBe(1);
  });

  it('debería calcular el factorial de 3', () => {
    expect(factorial(3)).toBe(6);
  });
});


// -----------------------------------------------------------------
// Pruebas para duplicarNumeros
// -----------------------------------------------------------------
describe('📈 Pruebas para duplicarNumeros', () => {
  
  it('debería duplicar los números de un array', () => {
    expect(duplicarNumeros([1, 2, 3])).toEqual([2, 4, 6]);
  });

  it('debería manejar el cero y números negativos', () => {
    expect(duplicarNumeros([0, -2, 10])).toEqual([0, -4, 20]);
  });

  it('debería devolver un array vacío para un input vacío', () => {
    expect(duplicarNumeros([])).toEqual([]);
  });
});


// -----------------------------------------------------------------
// Pruebas para generarFizzBuzz
// -----------------------------------------------------------------
describe('💥 Pruebas para generarFizzBuzz', () => {
  
  it('debería devolver un array vacío para n=0', () => {
    expect(generarFizzBuzz(0)).toEqual([]);
  });

  it('debería generar la secuencia hasta 5', () => {
    const esperado = [1, 2, "Fizz", 4, "Buzz"];
    expect(generarFizzBuzz(5)).toEqual(esperado);
  });

  it('debería generar la secuencia hasta 15 (incluyendo FizzBuzz)', () => {
    const esperado = [
      1, 2, "Fizz", 4, "Buzz", "Fizz", 
      7, 8, "Fizz", "Buzz", 11, "Fizz", 
      13, 14, "FizzBuzz"
    ];
    expect(generarFizzBuzz(15)).toEqual(esperado);
  });
});