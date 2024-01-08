const obtenerValorPropiedad = (objeto, propiedad) => {
  // Recibe un objeto y el nombre de una propiedad.
  // Devuelve el valor de esta propiedad.
  // Tu código:
  return 'Horarios de musculacion: ' + propiedad;
};

var gimnasio = {
  crossfit: ['13hs', '14hs', '17hs'],
  musculacion: ['18hs', '19hs', '20hs'],
};
console.log(obtenerValorPropiedad(gimnasio, gimnasio.musculacion));
module.exports = obtenerValorPropiedad;
