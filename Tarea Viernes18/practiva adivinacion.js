console.log("Piensa en un numero");


const adivinaNumero = () => {
    let numMax = 100;
    let numMin = 1;
    let mitad = 50;
    let seguir = confirm("¿Tú numero es el 50?") ? adivineNumero(mitad) : false;

    while (seguir == false) {
        if (confirm(`¿Tu número es mayor a ${mitad}?`)) {
            numMin = mitad + 1;
        } else {
            numMax = mitad - 1;
        }
        mitad = Math.floor((numMax + numMin) / 2)
        seguir = confirm(`¿Tu número es el ${mitad}?`) ? adivineNumero(mitad) : false;
    }
};

function adivineNumero (number) {
    const adivine = appendAlert(`ADIVINE!!! Tu número es el: ${number}`, 'warning');
}

const alertPlaceholder = document.getElementById('adivineNumero')
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