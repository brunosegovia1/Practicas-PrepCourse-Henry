function esDiezOCinco(num) {
  // Retornar true si "num" es 10 o 5.
  // De lo contrario, retornar false.
  // Tu código:
  if ([10, 5].includes(num))
  {
    return true;
  }else return false;
}
console.log(esDiezOCinco(11));
module.exports = esDiezOCinco;
