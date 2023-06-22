// ENTRADA DE DATOS > PROCESAMIENTO DE DATOS > SALIDA (O INFORMACION)
const inflacionMensual = 10;
let tasa;

// Etapa 1 - Entrada de Datos
// Solicito el Monto
let monto = solicitarMonto();
//Solicito el Plazo
let plazo = solicitarPlazo();

// Calculo la Tasa de Interés según el Plazo en Cuotas
tasa = calcularTasa(plazo);
//Obtengo la Inflación según el Plazo en Cuotas
inflacionTotal = calcularInflacion(plazo);

// Realizamos los Calculos
let montoConInteres = calculoDeMontoConInteres(monto, tasa);
let inflacion = calcularInflacion(plazo);
let descuentoPorInflacion = calcularDescuentoPorInflacion(monto, inflacion, plazo);
let cuotaPura = calcularCuotaPura(montoConInteres, plazo);
let cuotaTotal = calcularCuotaTotal(cuotaPura, descuentoPorInflacion, plazo);

//Salida;
informarCalculosRealizados (monto, plazo, tasa, inflacionMensual, inflacion, montoConInteres, cuotaPura, descuentoPorInflacion, cuotaTotal);
mostrarLogCalculosRealizados (monto, plazo, tasa, inflacionMensual, inflacion, montoConInteres, cuotaPura, descuentoPorInflacion, cuotaTotal);