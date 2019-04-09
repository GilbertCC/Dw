function generarTabla(){
    
//variables
var confirmacion = true ;
var mayor = 0;
var menor  = 0;

//verificaciones de campos
if($("#mayor").val() == ""){
    alert("El campo mayor no puede estar vacío.");
    $("#mayor").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
    return confirmacion;
}

if($("#menor").val() == ""){
    alert("El campo Menor no puede estar vacío.");
    $("#menor").focus();
    return confirmacion;
}

//captura de datos 

mayor = parseInt($("#mayor").val());
menor = parseInt($("#menor").val());


//tabla 

var t = "<table>";
for (i<= 0;i>mayor; i++){
    t += "<tr> +i";
    t*= "</tr>"
}
document.getElementById("tabla").innerHTML= t;
} 



