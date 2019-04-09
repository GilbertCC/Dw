function generarIva(){
    //variables 
    var confirmacion = false;
    var valor = "";
    var valorR = 0 ;
    var iva = 0.0 ;
    var final = 0.0;
    var mensaje = ""; 

    //***********************************************************************
    //***********************************************************************
     


    // Campos de texto
    if($("#Valor").val() == ""){
        alert("El campo Valor no puede estar vacío.");
        $("#Valor").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return confirmacion;
    }
    

//captura de datos 
    valor = $("#Valor").val();
    valorR = parseInt(valor)
    alert ("el valor ingresado es : " + valor)
    iva = (valorR*0.16);


//logica

if (iva >= 1000 && iva < 2000){
    final = valorR + ( iva -(iva*0.02));
}
else if (iva >= 2000 && iva < 5000){
    final = valorR + (iva - (iva * 0.06));
}
else if (iva >= 5000){
    final = valorR + (iva -(iva * 0.06));
}
mensaje = "el valor del iva es :" + iva + "///////  El valor neto es de : " + final;
document.getElementById("resultado").innerHTML = mensaje;
$(document).ready(function(){
    $("#Valor").on("blur",function(){
        $("#resultado").show();
      });
    });
}