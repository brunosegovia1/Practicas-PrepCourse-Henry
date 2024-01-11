function tienenMismaLongitud(str1, str2) {
  // La función recibe dos argumentos "str1" e "str2" que son strings.
  // Retorna true si los dos strings tienen la misma longitud.
  // De lo contrario, retorna false.
  // Tu código:
  if (str1.length == str2.length)
  {
    return true;
  }
  else return false;
}
console.log(tienenMismaLongitud('chocolate', 'chocolat'));
module.exports = tienenMismaLongitud;