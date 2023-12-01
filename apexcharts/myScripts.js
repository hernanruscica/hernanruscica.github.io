

import { generateDates, generateRandomData, calcularPorcentajeEncendidoPorHora } from "./utils.js";

console.log("desde myScripts.js");

   let tiempoTrama = 300;
   let periodo = 3600; //una hora 360seg
   //porcentaje encendido por hora = sumatoria de valores de tiempo de trama que entran en  un periodo
   //Ejemplo de objeto de canal digital
   let canalDigital01 = [
     {
       ultimoEstado: 0,
       cantidadEncendidos: 2,
       tiempoEncendido: 64,
       fechaYhora: "2023-11-30T00:00:00.000Z", //date time
     },
   ];

   /* DESDE ACA, EL CODIGO ES PARA GENERAR LOS DATOS DE PRUEBA, EN EL CASO DE TENER ACCESO A LA BD, NO SERIA NECESARIO */
   // Definir el rango de fechas
   const startDate = new Date("2023-11-30T00:00:00Z").getTime() / 1000; // Convertir a segundos
   const endDate = new Date("2023-11-30T23:59:59Z").getTime() / 1000;

   // Generar fechas en el rango y con intervalos de 300 segundos
   const dateTimes = generateDates(startDate, endDate, 300);

   // Generar nuevos datos aleatorios
   const newData = Array.from({ length: dateTimes.length }, () =>
     generateRandomData()
   );

   // Crear el nuevo array con datos y timestamps
   const newDataset = dateTimes.map((datetime, index) => ({
     ultimoEstado: newData[index].ultimoEstado,
     cantidadEncendidos: newData[index].cantidadEncendidos,
     tiempoEncendido: newData[index].tiempoEncendido,
     fechaYhora: datetime,
   }));

   /* HASTA ACA, EL CODIGO ES PARA GENERAR LOS DATOS DE PRUEBA, EN EL CASO DE TENER ACCESO A LA BD, NO SERIA NECESARIO */
   //console.log(newDataset);



  
   /* Preparacion de datos para el grafico #1 */
   const myTimeStamps = newDataset.map(data => data.fechaYhora);
   const myCantidadEncendidos = newDataset.map(data => data.cantidadEncendidos);
   //console.log(myTimeStamps, myCantidadEncendidos);

   // Datos del gráfico #1
   var options = {
       title: {
       text : "Cantidad de encendidos"
       },
     chart: {
       type: 'line',
       height: 400,
       width: "100%",
       background: '#f4f4f4'
     },
     series: [{       
       name: "Cantidad de encendidos",
       data: myCantidadEncendidos
     }],
     xaxis: {
       categories: myTimeStamps,
       type: 'datetime'
     }
   }  
   // Inicializar el gráfico
   var chart = new ApexCharts(document.querySelector("#chart"), options);  
   // Renderizar el gráfico
   chart.render();

    /* Preparacion de datos    para la grafica #2 */
    // Generar el nuevo array con porcentajes de encendido por hora
    const nuevoArrayPorcentajes = calcularPorcentajeEncendidoPorHora(newDataset, tiempoTrama);
      
    const myTimeStamps2 = nuevoArrayPorcentajes.map(data => data.fechaYhora);
    const porcentajesEncendidoPorHora = nuevoArrayPorcentajes.map(data => data.promedioEncendido);
    console.log(myTimeStamps, myTimeStamps2);  

    // Datos del gráfico #2
    var options = {
        title: {
        text : "porcentaje de encendidos por hora"
        },
      chart: {
        type: 'line',
        height: 400,
        width: "100%",
        background: '#f4f4f4'
      },
      series: [{       
        name: "porcentaje de encendidos por hora",
        data: porcentajesEncendidoPorHora
      }],
      xaxis: {
        categories: myTimeStamps2,
        type: 'datetime'
      }
    }
  
    // Inicializar el gráfico
    var chart2 = new ApexCharts(document.querySelector("#chart2"), options);
  
    // Renderizar el gráfico
    chart2.render();