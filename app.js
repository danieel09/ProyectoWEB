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
    const personas = parseInt(document.getElementById("personas").value);
    let tipoSistema = document.getElementById("tipoSistema").value;
    let cotizado;

    if(tipoInstalacion == ""){
        alert("Seleccione un tipo de Instalacion.");
        return false;
    }else{
        if(tipoInstalacion == "industrial"){
            const kw36 = 48380;

            if(isNaN(litros) || isNaN(temperatura)){
                alert("Complete la información para su cotización industrial.");
                return false;
            }

            if(litros <= 0 || temperatura <= 20 ){
                alert("Los valores deben ser positivos.");
                return false;
            }

            let litrosCalentador = ((1080*25)/(temperatura-20))/60;

            if(litrosCalentador < litros){
                cotizado = (Math.ceil(litros/litrosCalentador)) * kw36;
            }else{
                cotizado = kw36;
            }
        }else if(tipoInstalacion == "domestico"){
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
            }else if(tipoCalentador == "Deposito220"){
                calentadores = Math.trunc(regaderas/3);
                residuo = regaderas % 3;
                const precios = { 1: 17700, 2: 19200, 3: 23600 };

                const costoCalentadores = calentadores * precios[3];

                let costoResiduo;
                if (residuo > 0) {
                    costoResiduo = precios[residuo];
                } else {
                    costoResiduo = 0;
                }

                cotizado = costoCalentadores + costoResiduo;
            }else if(tipoCalentador == "Deposito110"){
                calentadores = Math.trunc(regaderas/3);
                residuo = regaderas % 3;
                const precios = { 1: 15100, 2: 16500, 3: 21000 };

                const costoCalentadores = calentadores * precios[3];

                let costoResiduo;
                if (residuo > 0) {
                    costoResiduo = precios[residuo];
                } else {
                    costoResiduo = 0;
                }

                cotizado = costoCalentadores + costoResiduo;
            }
        }else if(tipoInstalacion == "solar"){
            if(isNaN(personas) || tipoSistema == ""){
                alert("Complete la información para su cotización Solar.");
                return false;
            }

            if(personas <= 0){
                alert("Los valores deben ser positivos.");
                return false;
            }

            if(!Number.isInteger(personas)){
                alert("Las personas deben ser números enteros.");
                return false;
            }

            if(tipoSistema == "tinaco" ){
                const precios = { 1: 3330, 2: 3780, 3: 4284, 4: 5886, 5: 6408, 6: 7518, 7: 8946, 8: 23544, 9: 37944};
                calentadores = Math.trunc(personas/9);
                residuo = personas % 9;

                const costoCalentadores = calentadores * precios[9];

                let costoResiduo;
                if (residuo > 0) {
                    costoResiduo = precios[residuo];
                } else {
                    costoResiduo = 0;
                }

                cotizado = costoCalentadores + costoResiduo;

            }else if(tipoSistema == "bomba"){
                const precios = { 1: 8550, 2: 10764, 3: 13428, 4: 16938, 5: 38934, 6: 57690};
                calentadores = Math.trunc(personas/6);
                residuo = personas % 6;

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
    let solar = document.getElementById("preguntasSolar");

    industrial.style.display = "none";
    domestico.style.display = "none";
    solar.style.display = "none";

     if(tipo == "industrial"){
        industrial.style.display = "flex";
    }

    if(tipo == "domestico"){
        domestico.style.display = "flex";
    }

    if(tipo == "solar"){
        solar.style.display = "flex";
    }
}