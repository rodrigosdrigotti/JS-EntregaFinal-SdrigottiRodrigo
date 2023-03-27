const monedaUno = document.querySelector("#monedaUno");
const monedaDos = document.querySelector("#monedaDos");
const valorUno = document.querySelector("#valorUno");
const valorDos = document.querySelector("#valorDos");
const cambio = document.querySelector("#cambio");
const tasaIcon = document.querySelector("#tasa");

document.addEventListener('DOMContentLoaded', ()=>{
    convertirMoneda();
})

function convertirMoneda(){
    const opUno = monedaUno.value;
    const opDos = monedaDos.value;

    let url = `https://api.exchangerate-api.com/v4/latest/${opUno}`;
    fetch(url)
        .then(res =>res.json())
        .then(resultado => {
            const tasa = resultado.rates[opDos];
            cambio.innerText = `1 ${opUno} = ${tasa} ${opDos}`;
            valorDos.value = (valorUno.value * tasa).toFixed(2);
        })
        .catch(err => {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No hubo respuesta',
                toast: true,
                position: 'center',
                confirmButtonColor: '#fe6148',
            });
        })
}

monedaUno.addEventListener("change", convertirMoneda);
valorUno.addEventListener("input", convertirMoneda);
monedaDos.addEventListener("change", convertirMoneda);
valorDos.addEventListener("input", convertirMoneda);

tasa.addEventListener("click", () => {
    const temp = monedaUno.value;
    monedaUno.value = monedaDos.value;
    monedaDos.value = temp;
    convertirMoneda();
})
