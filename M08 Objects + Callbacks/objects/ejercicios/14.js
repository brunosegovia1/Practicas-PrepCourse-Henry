function tieneEmail(objetoUsuario) {
  // Verifica si el "objetoUsuario", en su propiedad "email", posee un valor definido.
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  if(objetoUsuario.email === undefined)
  {
    return false;
  }
  else
  {
    return true;
  }
}

var cuenta = {
  nombre: "Caillou",
  email : undefined, 
  password: 'legitimatrinidad',
}

console.log(tieneEmail(cuenta));

module.exports = tieneEmail;
