import "bootstrap/dist/js/bootstrap.bundle.js";

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

window.onload = function() {
let checkbox = document.getElementById("Checkbox");
let button = document.getElementById("btn");

    checkbox.addEventListener("change", function () {
    button.disabled = !this.checked; // Habilita o deshabilita el botón
});
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('btn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Mensaje enviado con exito!', 'success')
  })
}
