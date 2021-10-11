function calculo() {
    //alert("hellow");
    let totalCuenta = document.getElementById('total').value;
    //alert(totalCuenta);
    // let servicio = document.getElementsByName('servicio')[0].value;
    let servicio = document.getElementById('servicio').value;
    //alert(servicio);
    // let personas = document.getElementsByClassName('personas')[0].value;
    let personas = document.getElementById('personas').value;
    //alert(personas);
    let resultado = (servicio * totalCuenta) / personas;
    console.log('Total: ' + resultado);
    if (isNaN(resultado)) {
        alert('No se ha introducido ningun dato');
    } else if (personas == '' || personas == 0) {
        alert('No se ha introducido ningun dato');
    } else {
        // innerHTML es para ver el contenido del javascript en el html (Donde llamo a la función)
        document.getElementById("res").innerHTML = "<p>Total a pagar</p><h3>" + resultado + " por persona </h3>";
    }
}
// Para limpiar los resultados del formulario más el resultado
function limpiar() {
    document.getElementById("form").reset();
    document.getElementById("res").innerHTML = "";
}