function validar() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let comentarios = document.getElementById("comentarios").value;
    let privacidad = document.getElementById("privacidad");

    if((nombre == "") || (email == "") || (telefono == "") || (comentarios == "")){
        alert("Llena el formulario por completo, por favor.");
        return false;
    }
    
    if(telefono.length != 10){
        alert("Solamente 10 dígitos para el teléfono");
        return false;
    }

    if (!privacidad.checked) {
        alert("Debes aceptar el aviso de privacidad.");
        return false;
    }

    return true;
}

function cotizar() {
    let tipoInstalacion = document.getElementById("tipoInstalacion").value;
    const litros = parseFloat(document.getElementById("litros").value);
    const temperatura = parseFloat(document.getElementById("temperatura").value);
    const regaderas = parseInt(document.getElementById("regaderas").value);
    let tipoCalentador = document.getElementById("tipoCalentador").value;
    let cotizado;

    if(tipoInstalacion == ""){
        alert("Seleccione un tipo de Instalacion.");
        return false;
    }else{
        if(tipoInstalacion == "industrial"){
            if(isNaN(litros) || isNaN(temperatura)){
                alert("Complete la información para su cotización industrial.");
                return false;
            }

            if(litros <= 0 || temperatura <= 0){
                alert("Los valores deben ser positivos.");
                return false;
            }

            //cotizado = ((1080*25)/(temperatura-20))/60;
        }else{
            let calentadores;
            let residuo;
            let aux = 0;
            if(isNaN(regaderas) || tipoCalentador == ""){
                alert("Complete la información para su cotización doméstica.");
                return false;
            }

            if(regaderas <= 0){
                alert("Los valores deben ser positivos.");
                return false;
            }

            if(!Number.isInteger(regaderas)){
                alert("Las regaderas deben ser números enteros.");
                return false;
            }

            if(tipoCalentador == "dePaso"){
                calentadores = Math.trunc(regaderas/6);
                residuo = regaderas % 6;
                const precios = { 1: 27376, 2: 27376, 3: 29618, 4: 33276, 5: 48380, 6: 48380 };

                const costoCalentadores = calentadores * precios[6];

                let costoResiduo;
                if (residuo > 0) {
                    costoResiduo = precios[residuo];
                } else {
                    costoResiduo = 0;
                }

                cotizado = costoCalentadores + costoResiduo;
            }
        }
    }

    alert("Su cotización inicial es de: " + cotizado + " Pesos");

    return true;
}

function mostrarPreguntas(){

    let tipo = document.getElementById("tipoInstalacion").value;

    let industrial = document.getElementById("preguntasIndustrial");
    let domestico = document.getElementById("preguntasDomestico");

    industrial.style.display = "none";
    domestico.style.display = "none";

     if(tipo == "industrial"){
        industrial.style.display = "flex";
    }

    if(tipo == "domestico"){
        domestico.style.display = "flex";
    }
}