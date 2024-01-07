function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  var sonTodosIguales = array.every(elem => elem === array[0]);
  return sonTodosIguales;
}
console.log(todosIguales(['2', '2', '2']));
module.exports = todosIguales;
