function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  for (let i=0; i<objetoMuchosUsuarios.length; i++) {
    if (objetoMuchosUsuarios[i].esPremium === false)
    {
      objetoMuchosUsuarios[i].esPremium = true;
    }
  }

  return objetoMuchosUsuarios;
}

var cuenta1 = {
  nombre: "Caillou",
  email : 'tucallito@gmail.com', 
  password: 'legitimatrinidad',
  amigos: [],
  esPremium: false,
}

var cuenta2 = {
  nombre: "Damian",
  email : 'damian.agustin.gimenez@gmail.com', 
  password: 'dag123__',
  amigos: [],
  esPremium: false,
}

console.log(pasarUsuarioAPremium([cuenta1, cuenta1]));

module.exports = pasarUsuarioAPremium;
