function generarIva(){
    //variables 
    var confirmacion = false;
    var valor = "";
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


}