function agregarAmigo(objetoUsuario, nuevoAmigo) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "amigos" igual a un arreglo.
  // Debes agregar el "nuevoAmigo" al final de este arreglo.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.amigos.push(nuevoAmigo);

  return objetoUsuario;
}

var cuenta = {
  nombre: "Caillou",
  email : 'tucallito@gmail.com', 
  password: 'legitimatrinidad',
  amigos: [],
}

console.log(agregarAmigo(cuenta, 'Cirillo Molina'));


module.exports = agregarAmigo;
