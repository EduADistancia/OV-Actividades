// Muestra de respuesta de acuerdo a opción seleccionada

function mostrarRtaInmediata() {
    let opciones = document.querySelectorAll('input');
    opciones.forEach(op => {
        let idInput = op.id;
        op.addEventListener('change', function() {
            let devolucion = document.querySelector(`p[name=${idInput}]`);
            let devoluciones = devolucion.parentElement;
            devoluciones.childNodes.forEach(d => d.classList.remove('visible'));
            devoluciones.childNodes.forEach(d => d.classList.add('oculto'));
            devolucion.classList.remove('oculto');
            devolucion.classList.add('visible');
            devolucion.nextElementSibling.classList.remove('oculto');
            devolucion.nextElementSibling.classList.add('visible');
        });
    });
}

export { mostrarRtaInmediata }