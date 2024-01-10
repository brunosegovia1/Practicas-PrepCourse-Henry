function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Itera sobre el arreglo y por cada elemento iterado, ejecuta el callback con este valor.
  // Tu código:
  return array.forEach (elemento => console.log (cb(elemento)));
}
var arr = [1, 2, 3];
function callback (num)
{
  return num;
}
forEach(arr, callback);
module.exports = forEach;
