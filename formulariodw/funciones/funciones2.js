function generarIva(){
    //variables 
    var confirmacion = false;
    var valor = "";
    var iva = 0.0 ;

    //***********************************************************************
    //***********************************************************************
     


    // Campos de texto
    if($("#Valor").val() == ""){
        alert("El campo Valor no puede estar vacío.");
        $("#Valor").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return confirmacion;
    }
    $(document).ready(function(){
        $("#show").click(function(){
            $("p").show();
          });
        });


//captura de datos 
    valor = $("#valor").val();


//logica
iva = (parseInt(valor)*0.16)


}