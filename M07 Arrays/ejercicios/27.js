function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
  var nuevoString = '';
  for (let i=0; i<palabras.length; i++)
  {
    nuevoString+= palabras[i] + ' ';
  }
  return nuevoString;
}
console.log(dePalabrasAFrase(['Hola,', 'soy', 'Juan.']));
module.exports = dePalabrasAFrase;
