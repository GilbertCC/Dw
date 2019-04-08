function validafunc()
{
    var confirmacion = false;
    var datos = null;
    var nombre = "";
    var apellido ="";
    var sueldoB = "";
    var sueldo = 0;
    var nivel = "";
    var Ftrabajo ="";
    var extra = 0.0;
    var final = 0.0;

// Campos de texto
if($("#nombre").val() == ""){
    alert("El campo Nombre no puede estar vacío.");
    $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
    return confirmacion;
}

if($("#apellidos").val() == ""){
    alert("El campo Apellidos no puede estar vacío.");
    $("#apellidos").focus();
    return confirmacion;
}

//Recuperación de los datos con jQuery
confirmacion = true;
nombre = $("#nombre").val();
apellido = $("#apellidos").val();
sueldoB = $("#sueldoB").val();
Ftrabajo = $('input[name=Ftrabajo]:checked').attr('id');
nivel = $('input[name=Nivel]:checked').attr('id');
sueldo = parseInt(sueldoB)
if (Ftrabajo = "8a10"){
    extra = sueldo + (sueldo*0.1);
    if (nivel = "I"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0125)  
    }
    if (nivel = "II"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0225)  
    }
    if (nivel = "III"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0325)  
    }
    if (nivel = "VI"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0425)  
    }
    if (nivel = "V"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.525)  
    }

}
if(Ftrabajo = "10a6"){
    extra = sueldo + (sueldo*0.2);
    if (nivel = "I"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0125)  
    }
    if (nivel = "II"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0225)  
    }
    if (nivel = "III"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0325)  
    }
    if (nivel = "VI"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0425)  
    }
    if (nivel = "V"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.525)  
    }
}
if(Ftrabajo = "6a8"){
    extra = sueldo ;
    if (nivel = "I"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0125)  
    }
    if (nivel = "II"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0225)  
    }
    if (nivel = "III"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0325)  
    }
    if (nivel = "VI"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.0425)  
    }
    if (nivel = "V"){
        final = extra - (sueldo*0.15) -(sueldo * 0.145) - (sueldo * 0.525)  
    
    }
}


//Encapsulamos los datos en el formulario
    var datos = new DatosFormulario(confirmacion,nombre,apellido,sueldoB,nivel,Ftrabajo,extra,final);

    console.log ('*************************************');
    console.log ('*************************************');
    console.log ('Se puede enviar el formulario ');
    console.log ('*************************************');
    console.log ('*************************************');

    //return true; // Si todo está correcto
    return (datos);
}
    function DatosFormulario(confirmacionEnvio,nombre,apellido,sueldoB,nivel,Ftrabajo,extra,final)
    {
        this.confirmacionEnvio = confirmacionEnvio;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sueldoB = sueldoB;
        this.nivel = nivel;
        this.Ftrabajo = Ftrabajo;
        this.extra = extra;
        this.final = final;
    }
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    //****************************************************************************
    
    


