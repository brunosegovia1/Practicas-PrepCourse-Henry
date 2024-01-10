function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  var cont = 0;
  for (i=0; i<objetoUsuario.posts.length; i++)
  {
    cont += objetoUsuario.posts[i].likes;
  }

  return 'Cantidad total de likes = ' + cont;
}

var cuenta2 = {
  nombre: "Damian",
  email : 'damian.agustin.gimenez@gmail.com', 
  password: 'dag123__',
  amigos: [],
  posts: [
    post1 = {
      post: 'Foto',
      likes: 124,
    },
    post2 = {
      post: 'Dejé el vegetarianismo',
      likes: 8000,
    }
  ],
}

console.log (sumarLikesDeUsuario(cuenta2));

module.exports = sumarLikesDeUsuario;
