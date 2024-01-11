function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x < y)
  {
    return y;
  }
  else if (y < x)
  {
    return x;
  }
  else if (x === y)
  {
    return x;
  }
 
}
console.log(obtenerMayor(4, 5));
module.exports = obtenerMayor;
