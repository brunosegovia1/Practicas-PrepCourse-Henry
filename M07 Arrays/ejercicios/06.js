function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayDos = [];
  for (let i=0; i<array.length; i++)
  {
    arrayDos.push(array[i]*2);
  }
  console.log(arrayDos);
  return arrayDos;
}
duplicarElementos([1, 2, 3]);
module.exports = duplicarElementos;
