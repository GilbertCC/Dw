function generarIva(){
    //variables 
    var confirmacion = false;
    var valor = "";
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
    valor = $("#valor").val();


//logica
iva = (parseInt(valor)*0.16)

final = iva
$(document).ready(function(){
    $("#Enviar").click(function(){
        $(mensaje).show();
      });
    });

}