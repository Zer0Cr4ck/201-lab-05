

let movimientos=[];
let ingresos;
let egresos;


function registrarMovimiento(){

    let nombre= prompt("Ingresar concepto del movimiento");
    if(!nombre || nombre.trim() === ""){
        alert("Ingrese un nombre para el movimiento , no puede estar vacio");
        return //para q termine aca la condicion
    }

    let tipo= prompt("Ingrese tipo movimiento (Ingreso o Egreso");
    tipo= tipo.toLowerCase(); //hacemos minuscula para que no haya errores

    if(tipo !== "ingreso" && tipo !== "egreso"){
        alert("Debe ingresar : Ingreso o Egreso");
        return // terminamos condicion
    }

    let monto=Number(prompt("Ingresa el monto :"));
    if(isNaN(monto) || monto <=0){
        alert("Ingresar un monto mayor a cero")
        return;
    }

    movimientos.push({nombre,tipo,monto}); // pusheamos datos al array como un objeto
    alert("Datos ingresados correctamente");
}



function calcularTotalSaldo(){

    let saldo = 0 ;
    ingresos=0;
    egresos=0;

   for (i=0 ; i<movimientos.length;i++){
    if(movimientos[i].tipo === "ingreso"){
        ingresos+= movimientos[i].monto;
        saldo += movimientos[i].monto;
    }else if(movimientos[i].tipo === "egreso"){
        egresos+=movimientos[i].monto;
        saldo -= movimientos[i].monto;
    }
   }

   return saldo;

}



function mostrarResumen(){
    let saldoTotal=calcularTotalSaldo();
    let cantidadMovimientos = movimientos.length;

    console.log(`Cantidad de movimientos : ${cantidadMovimientos}`);
    console.log(`Total Ingresos : ${ingresos}`);
    console.log(`Total Egresos : ${egresos}`);
    console.log(`Saldo Total : ${saldoTotal}`);

}
function menu(){

    let opcion=0;
        

    while(opcion !==3) {
        opcion = Number(prompt(`Bienvenidos a Personal Budget V1.0
            \n Escoja una opcion :
            \n1.Registrar Movimiento
            \n2.Ver Resumen
            \n3.Salir`));
        if(opcion ===1){
            registrarMovimiento();
        }else if(opcion ===2){
            mostrarResumen();
        }else if(opcion === 3){
            alert("Gracias por usar Personal Budget V1.0");
        }else{
            alert("Opcion Invalidad, ingrese solo : 1 , 2 o 3");
        }
    }           

}


menu();