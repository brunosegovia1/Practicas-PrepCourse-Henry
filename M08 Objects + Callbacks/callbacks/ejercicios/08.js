const buscarElemento = (array, callback) => {
  // Busca un elemento en el array y retornalo.
  // Si el elemento no se encuentra, devuelve el mensje "No se encontró el elemento".
  // La función de callback es la encargada de evaluar si el elemento fue encontrado.
  // Tu código:
  var respuesta;
  for (let i=0; i<array.length; i++)
  {
    if (callback(array[i]))
    {
      respuesta = array[i];
      return respuesta;
    }
    else
    {
      return "No se encontró el elemento";
    }
  }
};

var pintores = ['Picasso', 'Caravaggio', 'Hitler', 'Van Gogh', 'Aalto'];

function cb (elemento)
{
  return elemento === 'Picasso';
}

console.log(buscarElemento(pintores, cb));


module.exports = buscarElemento;
