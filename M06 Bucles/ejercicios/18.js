function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var prod = a
  for (let i=a+1; i<b+1; i++)
  {
    prod *= i;
  }  
  return prod;

}
console.log(productoEntreNúmeros(7, 11));
module.exports = productoEntreNúmeros;