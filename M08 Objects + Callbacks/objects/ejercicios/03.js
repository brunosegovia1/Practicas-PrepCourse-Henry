const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  objeto[propiedad] = valor

  return console.log(objeto);

};

var gimnasio = {
  crossfit: ['13hs', '14hs', '17hs'],
  musculacion: ['18hs', '19hs', '20hs'],
};

agregarNuevaPropiedad(gimnasio, "zumba", ['20hs', '21hs', '22hs'] ),


module.exports = agregarNuevaPropiedad;
