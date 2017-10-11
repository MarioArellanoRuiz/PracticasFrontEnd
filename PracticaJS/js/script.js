function myFunction(){

var variable="Variable que varia";     
alert(variable);

console.log(variable);

variable=10;

console.log(variable);

}

// Function bucles

function bucles(){

    for(var x=0; x<10;x++){
        console.log(x);
    }
console.log(x);
}

// bucles while y do-while
function bucleWhile(){

    var contador = 0;

    while(contador<10){
    console.log(contador);
    contador++;
    }

    contador=10;
    while(contador>0){
        console.log(contador);
        contador--;
    }

   
}

function mydoWhile(){
    var contador=0;
    do{
        console.log(contador);
        
    }while(contador++, contador<10)
    
}

function operacionesAritmeticas(){

        //Definicion de variables

        //Suma
        var op1=3;
        var op2=10;
        var res = 0;
        res=op1+op2;
        console.log("Suma:");
        console.log(res);

        //multiplicacion
        var op1=3;
        var op2=10;
        var res = 0;
        res=op1*op2;
        console.log("Multiplicacion:");
        console.log(res);
        

        //division
        var op1=3;
        var op2=10;
        var res = 0;
        res=op1/op2;
        console.log("Division:");
        console.log(res);

        //modulo
        var op1=3;
        var op2=10;
        var res = 0;
        res=op1%op2;
        console.log("Modulo:");
        console.log(res);

         //exponencial
         var op1=3;
         var op2=10;
         var res = 0;
         res=2**4;
         console.log("Exponencial:");
         console.log(res);

             //Raiz cuadrada
            
             res=Math.sqrt(144);
             console.log("Raiz Cuadrada:");
             console.log(res);

             //Logaritmo
             res=Math.sqrt(144);
             console.log("Logaritmo:");
             console.log(Math.log(op2));
             console.log(Math.log(-op2));
             console.log(Math.log(res));
             console.log(Math.log(0));
             
        

}

function operacionesLogicas(){
    //valores boleanos
    var b= true;
    var c= false;

    // AND 
    if(true && true){
        console.log(true);
    }

    // Or 
    if(true || false){
        console.log(true);
    }
      // Or 
    var a;
    console.log(false |(5>a++));
    
}
function mySwitch(){
        var option=7;

        switch(option){

            case 1:{
                console.log(option);
                break;
            } 
            case 2:{
                console.log(option);
                break;
            } 
            case 3:{
                console.log(option);
                break;
            } 
            default:{
                console.error("opcion no valida");
                break;
            }
        }

}

function manejarArreglos(){
    var miArreglo = [5,3,7,8,0,9,4];

    console.log("Inicializacion:");

    for(var t=0; t< miArreglo.length;t++){
        console.log(t + ":" + miArreglo[t]);
    }

    //busqueda binaria
        var valorDeReferencia=9;
     for(var t=0; t< miArreglo.length;t++){
        if(miArreglo[t]===valorDeReferencia){
        console.log("Valor:"+miArreglo[t]+" Encontrado en el index:" + t);
        break; 
        }else{
        console.log(miArreglo[t]);
        }
     }

     for(var t=0; t< miArreglo.length;t++){
        if(miArreglo[t]===valorDeReferencia){
        console.log("Valor:"+miArreglo[t]+" Encontrado en el index:" + t);
        break; 
        }else{
        console.log(miArreglo[t]);
        }
     }
   
}
