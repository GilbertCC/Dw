function Hallarpromedio(){
    var notas = [75,80,45,70,34,67,34,67];
    var suma = 0;
    var prom =0;
    document.getElementById("mainContent").innerHTML = "sus notas son: "+ notas;
    for ( var i = 0; i < notas.length; i++){
        suma = suma + notas[i];

    }
    prom = suma/notas.length;

    if (prom > 60 ){
        alert("el promedio es "+ prom  +" aprobo ");
    }
    if (prom < 60){
        alert("el promedio es "+ prom  +" reprobo ");

    }
    

    
}