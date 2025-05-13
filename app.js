

let movimientos=[];


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

    let monto=prompt("Ingresa el monto :");
    if(isNaN(monto) || monto <=0){
        alert("Ingresar un monto mayor a cero")
        return;
    }

    movimientos.push({nombre,tipo,monto}); // pusheamos datos al array como un objeto
    alert("Datos ingresados correctamente");
}



function calcularTotalSaldo(){

    let saldo = 0 ;

   for (i=0 ; i<movimientos.length;i++){
    if(movimientos[i].tipo === "ingreso"){
        saldo += movimientos[i].monto;
    }else if(movimientos[i].tipo === "egreso"){
        saldo -= movimientos[i].monto;
    }
   }

   return saldo;

}



function mostrarResumen(){

    let cantidadMovimientos = movimientos.length;
    let totalGastos=0;
    let totalIngresos=0;
}