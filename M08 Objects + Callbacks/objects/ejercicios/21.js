function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function(){
    return this.porcentajeDeDescuento * this.precio;
  }

  return 'Precio final c/descuento: ' + (objetoProducto.precio - objetoProducto.calcularPrecioDescuento()); 
}

var producto = {
  precio: 15000,
  porcentajeDeDescuento: 0.5,

}

console.log(agregarMetodoCalculoDescuento(producto));

module.exports = agregarMetodoCalculoDescuento;
