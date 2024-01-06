function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  var incluyeElemento = array.includes(elemento)
  if(incluyeElemento == true)
  {
    return 1;
  }
  else
  {
    return -1;
  }
}

console.log(encontrarElemento(9, [2, 1, 9, 5, 8]));

module.exports = encontrarElemento;
