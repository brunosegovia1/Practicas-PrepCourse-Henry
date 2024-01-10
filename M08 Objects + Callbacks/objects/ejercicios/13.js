function eliminarPropiedad(objeto, propiedad) {
  // El parámetro "propiedad" es una propiedad del objeto que recibes.
  // Debes eliminarla del objeto y retornarlo finalmente.
  // Tu código:

  delete objeto[propiedad];

  return objeto;
}

var om = {
  numeroMisterioso: 2,
};

console.log(eliminarPropiedad(om, 'numeroMisterioso'));


module.exports = eliminarPropiedad;
