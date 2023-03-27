let movimientos = new Array();
let diaHoy = new Date();

diaHoy = "FECHA: " + diaHoy.getDate() + "/" + diaHoy.getMonth() + "-" + "Hora: " + diaHoy.getHours() + ":" + diaHoy.getMinutes() + "hs";

const user = {nombre: "profesor", pass: 12345};
const userJSON = JSON.stringify(user);

localStorage.setItem("Usuario 1", userJSON);

movimientos = [{
        fecha: "FECHA: 14/1-HORA: 9:11HS",
        descripcion: " ACREDITAMIENTO DE HABERES = 200000",
        saldo: " SALDO = 200000"
    },
    {
        fecha: "FECHA: 14/1-HORA: 19:12HS",
        descripcion: " PAGO DE SERVICIOS = 10000",
        saldo: " SALDO = 180000"
    },
    {
        fecha: "FECHA: 20/1-HORA: 11:24HS",
        descripcion: " RETIRO = 35000",
        saldo: " SALDO = 135000"
    },
    {
        fecha: "FECHA: 22/1-HORA: 16:11HS",
        descripcion: " CONSULTA DE SALDO = 135000",
        saldo: " SALDO = 135000"
    },
    {
        fecha: "FECHA: 24/1-HORA: 8:12HS",
        descripcion: " DEPOSITO = 30000",
        saldo: " SALDO = 165000"
    },
    {
        fecha: "FECHA: 24/1-HORA: 11:32HS",
        descripcion: " PAGO DE SERVICIOS = 15000",
        saldo: " SALDO = 150000"
    },
    {
        fecha: "FECHA: 24/1-HORA: 8:12HS",
        descripcion: " DEPOSITO = 30000",
        saldo: " SALDO = 165000"
    },
    {
        fecha: "FECHA: 27/1-HORA: 20:2HS",
        descripcion: " RETIRO = 15000",
        saldo: " SALDO = 115000"
    },
    {
        fecha: "FECHA: 27/1-HORA: 23:23HS",
        descripcion: " CONSULTA DE SALDO = 115000",
        saldo: " SALDO = 115000"
    }
] 
