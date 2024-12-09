function validarFormulario() {
    if (!validarFormulario2()) {
        alert("Formulario incorrecto!");
        return false;
    }
    alert("Formulario correcto!");
    return true;
}

function validarFormulario2() {
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje');

    if (nombre.length < 3) {
        mensaje.innerText = "El nombre debe tener al menos 3 caracteres.";
        mensaje.style.color = "red";
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        mensaje.innerText = "El email no es válido.";
        mensaje.style.color = "red";
        return false;
    }
    mensaje.innerText = "Formulario enviado correctamente.";
    mensaje.style.color = "green";
    return true;
}