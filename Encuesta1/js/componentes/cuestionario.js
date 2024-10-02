function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    // let devolucionDiv;
    let contadorId = 0;

    for (let d of datos) {
        let devolucionDiv;

        if (d["Tipo"] === "Pregunta"){
            pregunta = d["Texto"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Texto"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            // devolucionDiv = document.createElement('div');
            
        } else if (d["Tipo"] === "Respuesta") {
            devolucionDiv = document.createElement('div');
            let rta = document.createElement('li');
            let chBox = document.createElement('input');
            chBox.type = 'checkbox';
            chBox.name = pregunta
            chBox.id = `${d["Texto"] === "No" ? d["Texto"] : "Si"}${contadorId}`;
            
            let etiqRta = document.createElement('label');
            etiqRta.setAttribute('for', `${d["Texto"]  === "No" ? d["Texto"] : "Si"}${contadorId}`);
            etiqRta.innerHTML = d["Texto"]
            
            let devolucionP = document.createElement('p');
            devolucionP.classList = 'marco oculto';
            devolucionP.setAttribute('name', `${d["Texto"] === "No" ? d["Texto"] : "Si"}${contadorId}`);
            devolucionP.innerText = d["Devolucion"];

            let img = document.createElement('img');
            
            if (d["Estado"]) {
                img.setAttribute('src', './img/correcto.png');
                img.setAttribute('alt', 'Correcto');
                devolucionP.classList.add('marcoOK');
            } else {
                img.setAttribute('src', './img/incorrecto.png');
                img.setAttribute('alt', 'Incorrecto');
                devolucionP.classList.add('marcoNoOk');
            }
            
            img.setAttribute('name', `${d["Texto"] === "No" ? d["Texto"] : "Si"}${contadorId}`);
            img.className = 'imgEstado oculto';

            devolucionDiv.append(devolucionP, img);
            // rta.append(chBox, etiqRta);
            rta.append(chBox, etiqRta, devolucionDiv);
            // respuestasUl.append(rta);
            respuestasUl.append(rta);
            // divItem.append(respuestasUl, devolucionDiv);
            divItem.append(respuestasUl);
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

};

export { crearCuestionario }