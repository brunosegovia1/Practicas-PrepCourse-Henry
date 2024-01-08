/*
//Un callback es cuando se pasa por parámetro una función dentro de otra función.
function quiero ()
{
    return 'Quiero ';
}

function comerPapas ()
{
    return 'comer papas fritas.';
}

function JuntarFrases (cb1, cb2)
{
    return cb1() + cb2();
}

resultado = JuntarFrases(quiero, comerPapas);
console.log(resultado);


function devuelvoFrase (amigo)
{
    return 'Hoy voy a llamar al ' + amigo;
}

function Llamar (cbdevuelvoFrase, amigo)
{
    return cbdevuelvoFrase(amigo);
}

resultado = Llamar (devuelvoFrase, 'Danielito');
console.log(resultado);
*/