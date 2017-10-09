

function myfuntion(){
var un_numero = 1;
var un_flotante = 1.5;

var otro_numero = '1';

var un_texto ='esto es un texto';

var esVerdad = true;

alert("Hola mundo");
 

var arreglo=[];
arreglo[0]=11;

var cars = [
    "Saab", //0
    "Volvo", //1
    "BMW"  //2
];
var morbo = [
    "Hola",
    1,
    Math.PI,
    'Mundo',
    true
    ];
   alert(typeof(morbo[2]));

alert(cars[-1+2]);

console.log(arreglo);
console.log(un_numero);
 console.log(un_flotante);
 console.log(otro_numero);
 console.log(un_texto);
 console.log(esVerdad);
}

function myotrafunction(){
    var literal = .1E-13;
    
    console.log(literal);
    persona =  {nombre : "mario", edad:21};
    console.log(persona);
    alert(persona.nombre);
    alert(persona[0]);
    alert(typeof(literal));

    var persona2 = new Object();
    persona2.nombre ="Yadira";
    persona2.edad=21;

    alert(persona2);
    console.log(persona2);

}