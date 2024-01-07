function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var meses = [];
  cont = 0;
  for (let i = 0; i<array.length; i++)
  {
    if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Noviembre')
    {
      meses.push(array[i]);
      cont++;
    }
  }

  if (cont == 3)
  {
    return meses;
  }
  else
  {
    return "No se encontraron los meses pedidos.";
  }
}
console.log(mesesDelAño(['Enero', 'Marzo', 'Noviembre', 'Abril']));
module.exports = mesesDelAño;
