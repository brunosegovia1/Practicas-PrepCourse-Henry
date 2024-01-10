function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:

  var cuenta = {
    nombre: nombre,
    email: email,
    password: password
  }

  return cuenta;
};

console.log(nuevoUsuario("Caillou", 'tucallito@gmail.com', 'legitimatrinidad'));


module.exports = nuevoUsuario;
