function crearGato(nombre, edad) {
  // Debes crear un nuevo objeto con las propiedades "nombre" y "edad".
  // Ambas propiedades deben tener el valor correspondiente recibido por parámetro.
  // Además, agregar una propiedad con el nombre "meow".
  // La propiedad "meow" será una función que retorne el string: "Meow!".
  // Retornar el objeto.
  // Tu código:
  var gato = {
    nombre: nombre,
    edad: edad,
    meow: function (){
      console.log ('¡Meow!');
    }
  };

  return gato.meow();
}

crearGato('Michu', 21);



module.exports = crearGato;
