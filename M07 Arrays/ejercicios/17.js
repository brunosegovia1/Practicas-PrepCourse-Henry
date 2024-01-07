function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  var tabla = [];
  var cont =0;
  for (let i = 0; i<11; i++)
  {
    tabla.push(6 * cont);
    cont++;
  }
  return tabla;
}
console.log(tablaDelSeis());
module.exports = tablaDelSeis;
