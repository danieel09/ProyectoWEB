function validar() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let comentarios = document.getElementById("comentarios").value;

    if((nombre == "") || (email == "") || (telefono == "") || (comentarios == "")){
        alert("Llena el formulario por completo, por favor.");
        return false;
    }
    
    if(telefono.length != 10){
        alert("Solamente 10 dígitos para el teléfono");
        return false;
    }

    return true;
}