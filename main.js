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
// Etapa 1 - Entrada de Datos

let monto = parseInt(prompt("Ingrese el Monto al Contado: (Hasta $1.000.000 pesos)"));

while ((monto <= 0) || (monto > 1000000)) {
    monto = parseInt(prompt("Ingrese el Monto al Contado: (Hasta $1.000.000 pesos )"));
}

for (let i = 1; i <= 20; i++){
    let cuotas = parseInt(prompt("Ingrese la Cantidad de Cuotas:")); 
}

let interes = parseInt(prompt("Ingrese el Interés Mensual"));

const inflacionMensual = 8;

// Etapa 2 - Procesamiento de Datos


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