/*
//Así se arma un objeto: tiene claves y valores.
var deportes = {
    conBalon: ['Fútbol', 'Basketball', 'Rugby'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
};

var persona = {nombre: "Lucas", edad: 28, estudios: {esProgramador: true}
};
//Así se cita un objeto:
console.log(persona.edad);
persona.nombre = "Martin";


var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
//delete nos permite eliminar claves de objetos o alguno de sus valores.
delete autos.marcas;
console.log(autos);

//Podemos poner hasta funciones como valores de una clave.
var misFunciones = {
    saludar: function (){
        console.log('Hola');
    },
}
misFunciones.saludar();


var atuendos = {manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Zoquetes']};
//Así se añaden claves a un objeto
atuendos["piernas"] = ['Bermudas', 'Pantalones'];
atuendos.torso = ['Camisa', 'Chaqueta'];
console.log(atuendos);


var comidas = {};
//Así se agregan claves o se le cambian los valores a un objeto usando funciones
function diferenciaDeNotaciones (propUno, propDos){
    comidas[propUno] = ["Frutas", "Vegetales"];
    comidas[propDos] = ['Hamburguesas', "Papas fritas"];
};
diferenciaDeNotaciones('saludable', 'noSaludable');
console.log(comidas);


var libro = { autor: "Lovecraft", genero: "Ciencia ficción", año: 1933};
//El método .hasOwnProperty() nos permite saber si existe una clave en un objeto
var tienePropiedad = libro.hasOwnProperty('autor');
//console.log(tienePropiedad);
//El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden dentro de un arreglo.
var todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);


var mundo = {continente: 7, paises: 195, oceanos: 5};
//El bucle For-In nos permite recorrer todos los valores dentro de un objeto. Se hace con dos variables, una representando la propiedad sobre la que se está iterando y otra para el objeto que se va a recorrer.
for(var prop in mundo)
{
    console.log("Esta es la propiedad " + prop);
    console.log("Este es el valor " + mundo[prop]);
}


//DENTRO DE UN OBJETO podemos usar el objeto global this. para llamar a una propiedad que hay en el objeto. Y por lo que he leído, se usa solo dentro de una función.
var mascota = {
    animal: 'Perro',
    raza: "Pitbull",
    amistoso: true,
    dueña: 'Margarita',
    info: function()
    {
        console.log('Mi perro es un ' + this.raza);
    },
};
mascota.info();

*/
