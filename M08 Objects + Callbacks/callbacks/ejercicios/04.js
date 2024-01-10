function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // NOTA: no debes retOrnar nada.
  // Tu código:
  return cb(arrayOfNumbers);
}
var arr = [1, 2, 3];
function callback (arr)
{
  var acum = 0;
  for (let i=0; i<arr.length; i++)
  {
    acum += arr[i];
  }
  
  return acum;
}

console.log(sumarArray(arr, callback));

module.exports = sumarArray;
