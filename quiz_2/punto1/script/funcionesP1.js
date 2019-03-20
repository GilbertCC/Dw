function ContarVeces(){
    var n = prompt("digite cuantas personas desea en el arreglo ","0");
    var personas = [];
    var contenido ="";
    
    
    if (n != null) {
        alert("usted va a ingresar " + n + " personas")
      }
    for (var i = 0 ; i<n ; i++){
        var nuevodato = prompt("digite la persona a agregar", "persona");
        personas.push(nuevodato)

        
    }
    contenido = "<b>" + "Arreglo completo: " + personas + "<br/><br/>";
    document.getElementById("mainContent").innerHTML = contenido;
    
}
