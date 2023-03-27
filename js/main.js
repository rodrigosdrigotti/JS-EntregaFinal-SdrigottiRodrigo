let usuario = new Object();

let contador = 0;
let saldo = 50000;
let retiro = 0;
let deposito = 0;
let busquedaFecha;
let busquedaDescripion;

function limpiezaTicket(){
    document.getElementById("usuario").innerHTML = " ";
    document.getElementById("resultado").innerHTML = " ";
    document.getElementById("resultado2").innerHTML = " ";
    document.getElementById("listaMovimientos").innerHTML = `<li></li>`;  
}

function mostrarMovimientos(movimientos) {
    movimientos.forEach(movimiento  => {
        document.getElementById("listaMovimientos").innerHTML += `<li> ${Object.values(movimiento)} </li>`;  
    });
}
 
function filtrarFecha(movimiento){
   if(movimiento.fecha.includes(busquedaFecha)){
    return movimiento;
   } 
}

function filtrarDescripcion(movimiento){
    if(movimiento?.descripcion?.includes(busquedaDescripion)){
        return movimiento;
    } 
 }

function filtarMovimientosFecha(){
    let resul = movimientos.filter(filtrarFecha);
    if(resul.length){
        mostrarMovimientos(resul);
        document.getElementById("busquedaFechaDescripcion").appendChild(formFecha).remove();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'SIN RESULTADOS',
            toast: true,
            position: 'center',
            confirmButtonColor: '#fe6148',
        });
        document.getElementById("resultado").innerHTML = "";
        document.getElementById("resultado2").innerHTML = "";
    }
}

function filtarMovimientosDescripcion(){
    let resul = movimientos.filter(filtrarDescripcion);
    if(resul.length){
        mostrarMovimientos(resul);
        document.getElementById("busquedaFechaDescripcion").appendChild(formDescripcion).remove();
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'SIN RESULTADOS',
            toast: true,
            position: 'center',
            confirmButtonColor: '#fe6148',
        });
        document.getElementById("resultado").innerHTML = "";
        ocument.getElementById("resultado2").innerHTML = "";
    }
}

function showModal() {
    let formModalDiv = document.createElement('div');
    formModalDiv.id = "formModalDiv";
    document.getElementById("userInfo").appendChild(formModalDiv);
}
  
function hideModal() {
    document.getElementById("formModalDiv").remove();
}

function pedirModal(callback) {
    showModal();
    let form = document.getElementById('prompt-form');
    let container = document.getElementById('prompt-form-container');
    form.text.value = '';

    function complete(value) {
      hideModal();
      container.style.display = 'none';
      document.onkeydown = null;
      callback(value);
    }

    form.onsubmit = function() {
      let value = form.text.value;
      if (value == '') return false;

      complete(value);
      return false;
    };

    form.cancel.onclick = function() {
      complete(0);
    };

    document.onkeydown = function(e) {
      if (e.key == 'Escape') {
        complete(0);
      }
    };

    let lastElem = form.elements[form.elements.length - 1];
    let firstElem = form.elements[0];

    lastElem.onkeydown = function(e) {
      if (e.key == 'Tab' && !e.shiftKey) {
        firstElem.focus();
        return false;
      }
    };

    firstElem.onkeydown = function(e) {
      if (e.key == 'Tab' && e.shiftKey) {
        lastElem.focus();
        return false;
      }
    };

    container.style.display = 'block';
    form.elements.text.focus();
}

function pedirDescripcion(){
    preg = document.querySelector("#formulario");
    preg2 = document.querySelector("#formModalDiv");
    if(preg == null && preg2 == null) {
        formDescripcion = document.createElement("form");
        formDescripcion.id = "formulario";

        inputDescripcion = document.createElement("input");
        inputDescripcion.id = "ingresoDescripcion";
        inputDescripcion.className = "inputOp";
        inputDescripcion.placeholder = "Ingrese Descripcion)";
        formDescripcion.appendChild(inputDescripcion);

        btnOkDescripcion = document.createElement("button");
        btnOkDescripcion.id = "submit";
        btnOkDescripcion.innerHTML = "Enviar";
        btnOkDescripcion.type = "submit";
        btnOkDescripcion.className = "botonOp";
        formDescripcion.appendChild(btnOkDescripcion);

        btnCancelDescripcion = document.createElement("button");
        btnCancelDescripcion.innerHTML = "Cancel";
        btnCancelDescripcion.name = "cancel";
        btnCancelDescripcion.className = "botonOp";
        formDescripcion.appendChild(btnCancelDescripcion);

        document.getElementById("busquedaFechaDescripcion").appendChild(formDescripcion);

        let formulario = document.getElementById("formulario");
        formulario.ingresoDescripcion.value = '';

        formulario.onsubmit = function(e) {
            e.preventDefault();
            let value = formulario.ingresoDescripcion.value;
            if (value == '') return false; // ignorar submit vacíos
                
            busquedaDescripion = value.toUpperCase();
            filtarMovimientosDescripcion();
        };
        formulario.cancel.onclick = function(e) {
            e.preventDefault();
            document.getElementById("busquedaFechaDescripcion").appendChild(formDescripcion).remove();
        };
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'CANCELE LA BUSQUEDA PARA CONTINUAR',
            toast: true,
            position: 'center',
            confirmButtonColor: '#fe6148',
        });
    }
}

function pedirFecha() {
    preg = document.querySelector("#formulario");
    preg2 = document.querySelector("#formModalDiv");
    if(preg == null && preg2 == null) {
        formFecha = document.createElement("form");
        formFecha.id = "formulario";

        inputFecha = document.createElement("input");
        inputFecha.id = "ingresoFecha";
        inputFecha.className = "inputOp";
        inputFecha.placeholder = "Ingrese fecha (dd/mm)";
        formFecha.appendChild(inputFecha);

        btnOkFecha = document.createElement("button");
        btnOkFecha.id = "submit";
        btnOkFecha.innerHTML = "Enviar";
        btnOkFecha.type = "submit";
        btnOkFecha.className = "botonOp";
        formFecha.appendChild(btnOkFecha);

        btnCancelFecha = document.createElement("button");
        btnCancelFecha.innerHTML = "Cancel";
        btnCancelFecha.name = "cancel";
        btnCancelFecha.className = "botonOp";
        formFecha.appendChild(btnCancelFecha);

        document.getElementById("busquedaFechaDescripcion").appendChild(formFecha);

        let formulario = document.getElementById("formulario");
        formulario.ingresoFecha.value = '';

        formulario.onsubmit = function(e) {
            e.preventDefault();
            let value = formulario.ingresoFecha.value;
            if (value == '') return false; // ignorar submit vacíos
                
            busquedaFecha = value;
            filtarMovimientosFecha();
        };
        formulario.cancel.onclick = function(e) {
            e.preventDefault();
            document.getElementById("busquedaFechaDescripcion").appendChild(formFecha).remove();
        };
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'CANCELE LA BUSQUEDA PARA CONTINUAR',
            toast: true,
            position: 'center',
            confirmButtonColor: '#fe6148',
        });
    }
}

/* function pedirPagina(url) {
    fetch(url)
        .then((page) => {
            return page.text();
        })
        .then((pagina) => {
            document.querySelector(".pantalla").innerHTML = pagina;
        })
        .catch((err) => {
            console.log(err);
        })
} */

let opcion = document.getElementById("btnOpcion");
opcion.addEventListener("click", (e)=> {
    e.preventDefault();
    let opciones = e.target;
    switch (opciones.value) {
        case "1":
            document.getElementById("resultado").innerHTML = "Tu Saldo es: "+saldo;
            movimientos.push({fecha:diaHoy, operacion:" Consulta de saldo = " + saldo, saldo: " Saldo = " + saldo});
            break;
        case "2":
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("resultado2").innerHTML = "";
            pedirModal(function(value) {
                retiro = Number(value);
                if(retiro != 0){
                    if(retiro <= saldo && retiro != 0) {
                        saldo -= retiro;
                        document.getElementById("resultado").innerHTML = "Retiraste: "+retiro;
                        document.getElementById("resultado2").innerHTML = "Tu Saldo actual es: "+saldo;
                        movimientos.push({fecha:diaHoy, operacion:" Retiro = " + retiro, saldo: " Saldo = " + saldo});
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Fondos insuficientes',
                            toast: true,
                            position: 'center',
                            confirmButtonColor: '#fe6148',
                        });
                    }
                } else {
                    document.getElementById("resultado").innerHTML = "";
                    document.getElementById("resultado2").innerHTML = "";
                }
            });
            break;
        case "3":
            document.getElementById("resultado").innerHTML = "";
            document.getElementById("resultado2").innerHTML = "";
            pedirModal(function(value) {
                deposito = Number(value);
                if(deposito != 0){
                    saldo += deposito;
                    document.getElementById("resultado").innerHTML = "Depositaste: "+deposito;
                    document.getElementById("resultado2").innerHTML = "Tu Saldo actual es: "+saldo;
                    movimientos.push({fecha:diaHoy, operacion:" Deposito = " + deposito, saldo: " Saldo = " + saldo});
            
                } else {
                    document.getElementById("resultado").innerHTML = "";
                    document.getElementById("resultado2").innerHTML = "";
                }
            });
            break;
        case "4":
            for (const values of movimientos) {
                document.getElementById("resultado").innerHTML = " ";
                document.getElementById("resultado2").innerHTML = " ";
                document.getElementById("listaMovimientos").innerHTML += `<li> ${Object.values(values)} </li>`;  
            }
            setTimeout(limpiezaTicket, 3500);
            break;
        case "5":
            pedirFecha();
            setTimeout(limpiezaTicket, 3500);
            break;
        case "6":
            pedirDescripcion();
            setTimeout(limpiezaTicket, 3500);
            break;
        case "7":
            let userName = JSON.parse(localStorage.getItem("Usuario 1"));
            document.getElementById("usuario").innerHTML = "Usuario: "+ userName.nombre +" - Clave: " + userName.pass;
            setTimeout(limpiezaTicket, 3500);
            break;
        case "8":
            window.location.href = "pages/conversor.html";
            /* const url = "pages/conversor.html";
            pedirPagina(url); */
            break;
        case "9":
            window.location.href = "pages/salir.html";
            break;
    }
})

function validarUsuario(nombre,pass) {
    let userName = JSON.parse(localStorage.getItem("Usuario 1"));
    if(nombre == userName.nombre && pass == userName.pass){
        let gridContainer = document.getElementById("gridLogin");
        let botonesContainer = document.getElementById("btnOpcion");
        gridContainer.style.display = "none";
        botonesContainer.style.display = "flex";
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Datos Incorrectos',
            toast: true,
            position: 'center',
            confirmButtonColor: '#fe6148',
        });
    }
}

function login() {
    let gridContainer = document.getElementById("gridLogin");
    let registroContainer = document.getElementById("gridRegistro");
    gridContainer.style.display = "flex";
    registroContainer.style.display = "none";
}

function loginUsuarioCajero() {
    document.getElementById("formLogin").addEventListener('submit', (e) => {
        e.preventDefault();
        let n = document.getElementById("loginNombre").value;
        let p = document.getElementById("loginPass").value;
        
        validarUsuario(n,p);
    });
}

loginUsuarioCajero();






