function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  //Primero divido la fecha en números dentro de un arreglo separados por la barra "/"
  var arrFecha = fecha.split('/');
  console.log(arrFecha);
  
  //Están los números separados pero todavía son strings, así que tengo que hacer que el programa los lea como números. Creo un arreglo vacío
  var arrFechaInt = [];

  //Recorro el arreglo de strings y una por una la voy cambiando a entero.
  for (let i = 0; i < arrFecha.length; i++)
  {
    arrFechaInt.push(parseInt(arrFecha[i], 10));
  }
  console.log(arrFechaInt);

  //Listo, ya tenemos un arreglo de números enteros para verificar si el día, mes y fecha son correctos.
  if (arrFechaInt[1] > 12 || arrFechaInt[1] < 1)
  {
    return false;
  }
  if (arrFechaInt[1] === 1 || arrFechaInt[1] === 3 || arrFechaInt[1] === 5 || arrFechaInt[1] === 7 || arrFechaInt[1] === 8 || arrFechaInt[1] === 10 || arrFechaInt[1] === 12)
  {
    if (arrFechaInt[0] > 31 || arrFechaInt[0] < 1)
    {
      return false;
    }
  }
  else if (arrFechaInt[1] === 4 || arrFechaInt[1] === 6 || arrFechaInt[1] === 9 || arrFechaInt[1] === 11)
  {
    if (arrFechaInt[0] > 30 || arrFechaInt[0] < 1)
    {
      return false;
    }
  }
  else if ((arrFechaInt[2] % 4 === 0 && arrFechaInt % 100 !== 0) || (arrFechaInt[2] % 100 === 0 && arrFechaInt % 400 === 0) )
  {
    if (arrFechaInt[0] > 29 || arrFechaInt[0] < 1)
    {
      return false;
    }
  }
  else if (arrFechaInt[2] % 4 !== 0)
  {
    if (arrFechaInt[0] > 28 || arrFechaInt[0] < 1)
    {
      return false;
    }
  }

  return true;
}
console.log(esFechaValida('35/01/2025'));


module.exports = esFechaValida;