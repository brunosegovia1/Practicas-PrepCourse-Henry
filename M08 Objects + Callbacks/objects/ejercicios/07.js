// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

var gimnasio = {
    crossfit: ['13hs', '14hs', '17hs'],
    musculacion: ['18hs', '19hs', '20hs'],
    disponibilidad: function (){
        return 'Los horarios de musculación son ' + this.musculacion;
    }
  };
console.log(gimnasio.disponibilidad());


module.exports = gimnasio;
