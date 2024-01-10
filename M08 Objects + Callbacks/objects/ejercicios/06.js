const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  var cont = 0;
  for (const prop in objeto) {
    console.log("Actividad " + prop);
    console.log("Horarios: " + objeto[prop]);
    cont++;
  }
  return 'Hay ' + cont + ' actividades disponibles.'
};

var gimnasio = {
  crossfit: ['13hs', '14hs', '17hs'],
  musculacion: ['18hs', '19hs', '20hs']
};

console.log(contarPropiedades(gimnasio));



module.exports = contarPropiedades;
