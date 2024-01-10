function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // El parámetro "objetoMisterioso" posee una propiedad con el nombre "numeroMisterioso".
  // Debes multiplicar este número por 5 y retornar el resultado.
  // Tu código:
  objetoMisterioso.numeroMisterioso *= 5;

  return objetoMisterioso.numeroMisterioso;
}

var om = {
  numeroMisterioso: 2,
};
console.log(multiplicarNumeroDesconocidoPorCinco(om));

module.exports = multiplicarNumeroDesconocidoPorCinco;
