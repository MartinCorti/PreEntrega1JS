const solicitarMonto = () => {
    let monto = 0;

    while ((monto <= 0) || (monto > 1000000)) {
        monto = parseInt(prompt("Ingrese el Monto: (Hasta $1.000.000 pesos )"));
    }

    return monto;
}

const solicitarPlazo = () => {
    let plazo = 0;

    while ((plazo != 3) && (plazo != 6) && (plazo != 12) && (plazo != 24) && (plazo != 48)) {
        plazo = parseInt(prompt("Ingrese la Cantidad de Cuotas: (3/6/12/24/48):"));
    }

    return plazo;
}

const calcularTasa = (plazo) => {
    switch (plazo) {
        case 3:
            tasa = 25;
            break;
        case 6:
            tasa = 55;
            break;
        case 9:
            tasa = 80;
            break;        
        case 12:
            tasa = 105;
            break;
        case 24:
            tasa = 200;
            break; 
        default:
            tasa = 500;
            break;
    }

    return tasa;
}

const calculoDeMontoConInteres = (monto, tasa) => {
    return (monto + (monto * (tasa /100)));
}

const calcularInflacion = (plazo) => {
    return (inflacionMensual * plazo);
}

const calcularDescuentoPorInflacion = (monto, inflacion) => {
    return (monto - (monto * (inflacion/100)));
}

const calcularCuotaPura = (montoConInteres, plazo) => {
    return (montoConInteres / plazo);
}

const calcularCuotaTotal = (cuotaPura, descuentoPorInflacion) => {
    return (cuotaPura - (descuentoPorInflacion / plazo));
}

const mostrarLogCalculosRealizados = (monto, plazo, tasa, inflacionMensual, inflacion, montoConInteres, cuotaPura, descuentoPorInflacion, cuotaTotal) => {
    console.log("Monto Ingresado: $" + monto);
    console.log("Plazo: " + plazo + " Cuotas");
    console.log("Tasa: " + tasa);
    console.log("Inflación: " + inflacionMensual);
    console.log("Inflación Acumulada: " + inflacion);
    console.log("Calculo de Monto con Interés: $" + montoConInteres);
    console.log("Calculo de Descuento Por Inflación: $" + descuentoPorInflacion);
    console.log("Cuota Pura: $" + cuotaPura);
    console.log("Cuota Total: $" + cuotaTotal);
}

const informarCalculosRealizados = (monto, plazo, tasa, inflacionMensual, inflacion, montoConInteres, cuotaPura, descuentoPorInflacion, cuotaTotal) => {
    let salida = "COMPARADOR PRECIO AL CONTADO Y EN CUOTAS\n\n";
    salida += "Monto Ingresado: $" + monto + "\n";
    salida += "Plazo: " + plazo + " Cuotas" + "\n";
    salida += "Tasa: " + tasa + "\n";
    salida += "Inflación: " + inflacionMensual + "%" + "\n";
    salida += "Inflación Acumulada: " + inflacion + "%" + "\n";
    salida += "Monto con Interés: $" + montoConInteres + "\n";
    salida += "Descuento Por Inflación: $" + descuentoPorInflacion + "\n";
    salida += "Cuota Pura: $" + cuotaPura.toFixed(2) + "\n";
    salida += "Cuota Total: $" + cuotaTotal.toFixed(2) + "\n";
    alert(salida);
} 