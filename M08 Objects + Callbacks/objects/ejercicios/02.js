function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  objeto[propiedad] = valor;
  
  return objeto;
}

var gimnasio = {
  crossfit: ['13hs', '14hs', '17hs'],
  musculacion: ['18hs', '19hs', '20hs'],
};
console.log (actualizarValorPropiedad (gimnasio, 'musculacion', ['13hs', '14hs', '17hs', '18hs', '19hs', '20hs']));
module.exports = actualizarValorPropiedad;
