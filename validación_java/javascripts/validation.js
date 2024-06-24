function emailValidation() {
    const form = document.getElementById('form');
    const confirmEmail = document.getElementById("email_confirm"); 
    const element = document.createElement('p');
    const message = document.createTextNode("El email no coincide.");
    const conteni = document.getElementById("contenido_cont");
    element.appendChild(message);
    element.setAttribute("id", "alerta");
    element.classList.add("alerta_color");


    confirmEmail.addEventListener('input', (e) => {
        if(form.email.value !== form.email_confirm.value) {
            if(!document.getElementById("alerta")) {
                conteni.parentNode.insertBefore(element, conteni);
                confirmEmail.classList.add("alerta_bg");
            }
        } else {
            confirmEmail.classList.remove("alerta_bg");
            element.parentNode.removeChild(element);
        }
    });
};
  
window.onload = emailValidation;