const listarPropiedades = (objeto) => {
  // Lista y retorna todas las propiedades que posee el objeto recibido por la función.
  // PISTA: Puedes usar el método Object.keys().
  // Tu código:
  return Object.keys(objeto)
};

var gimnasio = {
  crossfit: ['13hs', '14hs', '17hs'],
  musculacion: ['18hs', '19hs', '20hs'],
};

console.log(listarPropiedades(gimnasio));

module.exports = listarPropiedades;
