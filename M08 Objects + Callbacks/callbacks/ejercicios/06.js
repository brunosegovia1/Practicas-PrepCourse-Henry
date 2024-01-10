function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  var newArr = [];

  array.forEach(element => 
    {
      newArr.push(cb(element));
    });
  
  return newArr;
}
var arr = [1, 2, 3];
function callback (num)
{
 return num*2;
}
console.log (map(arr, callback));


module.exports = map;
