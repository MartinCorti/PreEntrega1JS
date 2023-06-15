// DEFINIR SI CONVIENE AL CONTADO O EN CUOTAS, DEVOLVIENDO AMBOS VALORES

/*LA IDEA:
    1. Insertar precio al contado
    2. calcular el valor de un producto en cuotas
        a- primero tomo precio al contado
        b-  luego lo calculo en cuotas 
            primero precio al contado
            luego le sumo el interés
                primero obtengo tasa de interés
                luego cantidad de cuotas
            luego le resto la inflación
    3. Entonces:
        a- si precio al contado < precio en cuotas => precio al contado
        b- si precio al contado > precio en cuotas => precio en cuotas
        c- si precio al contado = precio en cuotas => hacé lo que quieras!*/



// ENTRADA DE DATOS > PROCESAMIENTO DE DATOS > SALIDA (O INFORMACIÓN)
const IVA = 21;
let inflacion;
let tasa;

// Etapa 1 - Entrada de Datos
// Solicito el Monto

let monto = 0;

while ((monto <= 0) || (monto > 1000000)) {
    monto = parseInt(prompt("Ingrese el Monto al Contado: (Hasta $1.000.000 pesos )"));
}

//Solicitar el Plazo
let plazo = 0;

while ((plazo != 3) && (plazo != 6) && (plazo != 12) && (plazo != 24) && (plazo != 48)) {
    plazo = parseInt(prompt("Ingrese la Cantidad de Cuotas: (3/6/12/24/48):"));
}

// Calculo la Tasa de Interés según el Plazo en Cuotas
switch (plazo) {
    case 3:
        tasa = 25;
        break;
    case 6:
        tasa = 45;
        break;
    case 12:
        tasa = 90;
        break;        
    case 24:
        tasa = 180;
        break;
    case 48:
        tasa = 360;
        break; 
    default:
        break;
}

// Solicito el Tipo de Inflación
let tipoInflacion = prompt("Ingrese el País: (Argentina/Brasil/Uruguay/Otros)").toUpperCase();

// Valido el Tipo de Inflación
switch (tipoInflacion) {
    case "ARGENTINA":
        inflacion = 100;
        break;
    case "BRASIL":
        inflacion = 15;
        break;
    case "URUGUAY":
        inflacion = 30;
        break;        
    default:
        inflacion = 10;
        break;
}

// Realizamos los Calculos
function calculoDePrecioCuotas(monto, tna, cuotas) {
    return (monto + ((monto * (tna - 100)) /100)) / cuotas;
}

const calcularMontoInteresConIVA = (valor) => {
    return (valor * IVA) / 100;
}

const calcularMontoCapital = (valor) => {
    return (valor * tasa) / 100;
}


// // Realizamos los Cálculos
// function calculoDePrecioCuotas(mon)

console.log("Monto al Contado: $" + monto)
console.log("Monto en Cuotas: $" + monto)
console.log("Cantidad de Cuotas: " + cuotas)
console.log("Interés Mensual por Cuota: " + interes)
console.log("Inflación en " + inflacionMensual)

// function calculoDePrecioCuotas(montoContado/cuotas - montoCuotas)





// cuota + interes - inflacion

// 100 + 30 - (40 * nrodecuota)

// 90

// 1300 / 10

// 1000 / 10 + 300 /10

// function (Math.pow(2,4));

// console.log(function);

// Para la respuesta final usar IF .. ELSE

//let precioContado >= precioCuotas:

/*if (precioContado >= precioCuotas) {
    alert("Tu mejor opción es comprar al Contado")
    }*/
/*else {
    alert ("Tu mejor opción es comprar en cuotas")
}*/