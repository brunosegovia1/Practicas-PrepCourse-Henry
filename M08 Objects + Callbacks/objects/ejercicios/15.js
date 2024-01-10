function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objeto.hasOwnProperty(propiedad);
}
var cuenta = {
  nombre: "Caillou",
  email : 'tucallito@gmail.com', 
  password: 'legitimatrinidad',
  propiedad: undefined,
}

console.log(tienePropiedad(cuenta, 'propiedad'));
module.exports = tienePropiedad;
