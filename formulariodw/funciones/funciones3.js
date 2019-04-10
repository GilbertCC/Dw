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

var myTableDiv = document.getElementById("metric_results")
var table = document.createElement('TABLE')
var tableBody = document.createElement('TBODY')
var datosx = ["secuencias"];
var datosY = ["Valores de x","Valores de Y ", "Valores de z", 1];
table.border = '1'
table.appendChild(tableBody);

 for (i = menor ; i < mayor+1 ;  i++){
     datosx.push(i)

 }
alert(datosx)

  


//COLUMNAS DE LA TABLA
var tr = document.createElement('TR');
tableBody.appendChild(tr);
for (i = 0; i < datosx.length; i++) {
    var th = document.createElement('TH')
    th.width = '75';
    th.appendChild(document.createTextNode(datosx[i]));
    tr.appendChild(th);
}

//FILAS DE LA TABLA
for (i = 0; i < 4 ; i++) {
    var tr = document.createElement('TR');
    
    for (j = 0; j < datosY.length; j++) {
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(datosY[i]));
        tr.appendChild(td)
    }
    tableBody.appendChild(tr);
}  
myTableDiv.appendChild(table)
}



