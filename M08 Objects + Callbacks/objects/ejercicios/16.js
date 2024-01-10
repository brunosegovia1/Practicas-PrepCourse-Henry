function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return objetoUsuario.password === password;
}

var cuenta = {
  nombre: "Caillou",
  email : 'tucallito@gmail.com', 
  password: 'legitimatrinidad',
  propiedad: undefined,
}

console.log(verificarPassword(cuenta, 'legitimatrinidad'));
module.exports = verificarPassword;
