function crearCuestionario(datos){
    let contenidoDinamico = document.querySelector('#contenidoDinamico');

    let divItem;
    let respuestasUl;
    let pregunta;
    let devolucionDiv;
    let contadorId = 0;

    for (let d of datos) {
        

        if (d["Tipo"] === "Pregunta"){
            pregunta = d["Respuesta"];
            divItem = document.createElement('div');
            divItem.className = 'marco';
            let preguntaP = document.createElement('p');
            preguntaP.innerHTML = d["Respuesta"];
            divItem.append(preguntaP);
            respuestasUl = document.createElement('ul');
            devolucionDiv = document.createElement('div');

        } else if (d["Tipo"] === "Respuesta") {
            let rta = document.createElement('li');
            let chBox = document.createElement('input');
            chBox.type = 'radio';
            chBox.name = pregunta
            chBox.id = `${d["Respuesta"] === "No" ? d["Respuesta"] : "Si"}${contadorId}`;
            
            let etiqRta = document.createElement('label');
            etiqRta.setAttribute('for', `${d["Respuesta"]  === "No" ? d["Respuesta"] : "Si"}${contadorId}`);
            etiqRta.innerHTML = d["Respuesta"]
            
            let devolucionP = document.createElement('p');
            devolucionP.classList = 'marco oculto';
            devolucionP.setAttribute('name', `${d["Respuesta"] === "No" ? d["Respuesta"] : "Si"}${contadorId}`);
            devolucionP.innerText = d["Devolucion"];

            devolucionDiv.append(devolucionP);
            rta.append(chBox, etiqRta);
            respuestasUl.append(rta);
            divItem.append(respuestasUl, devolucionDiv);
        }

        contenidoDinamico.append(divItem);
        contadorId++;
    }

};

export { crearCuestionario }