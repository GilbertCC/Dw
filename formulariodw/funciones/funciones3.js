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
var datos = [];
table.border = '1'
table.appendChild(tableBody);

var heading = new Array();
heading[0] = "secuencia"
for( i = 1 ; i >= mayor;  i++  ){
    heading[i] = "" + i
}


var stock = new Array()
stock[0] = new Array("valores de x", "88.625", "85.50", "85.81", "987")
stock[1] = new Array("valores de y", "88.625", "85.50", "85.81", "989")
stock[2] = new Array("valores de z", "88.625", "85.50", "85.81", "990")


//COLUMNAS DE LA TABLA
var tr = document.createElement('TR');
tableBody.appendChild(tr);
for (i = 0; i < heading.length; i++) {
    var th = document.createElement('TH')
    th.width = '75';
    th.appendChild(document.createTextNode(heading[i]));
    tr.appendChild(th);
}

//FILAS DE LA TABLA
for (i = 0; i < stock.length; i++) {
    var tr = document.createElement('TR');
    for (j = 0; j < stock[i].length; j++) {
        var td = document.createElement('TD')
        td.appendChild(document.createTextNode(stock[i][j]));
        tr.appendChild(td)
    }
    tableBody.appendChild(tr);
}  
myTableDiv.appendChild(table)
}



