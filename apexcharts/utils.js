export const Saludo = () => {
    return "saludo";
}

// Función para generar un número aleatorio entre un rango
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función para generar fechas en un rango específico con intervalos
export const generateDates = (startDate, endDate, interval) => {
  const dates = [];
  for (let current = startDate; current <= endDate; current += interval) {
    dates.push(new Date(current * 1000).toISOString()); // Convertir a formato ISO
  }
  return dates;
};

// Función para generar datos aleatorios
export const generateRandomData = () => {
  return {
    ultimoEstado: getRandomInt(0, 1),
    cantidadEncendidos: getRandomInt(1, 20),
    tiempoEncendido: getRandomInt(1, 300),
  };
};

// Función para calcular el promedio de tiempo encendido por hora
export const calcularPorcentajeEncendidoPorHora = (data, tiempoTrama) => {
    const promedioEncendidoPorHora = [];
  
    // Iterar por cada hora en el día
    for (let hora = 0; hora < 24; hora++) {
      let tiempoEncendidoEnHora = 0;
      let tramasEnHora = 0;
  
      // Iterar por cada dato en el array
      data.forEach((item) => {
        const { tiempoEncendido, fechaYhora } = item;
        const horaDato = new Date(fechaYhora).getUTCHours();
  
        // Verificar si el dato está en la hora actual
        if (horaDato === hora) {
          tiempoEncendidoEnHora += tiempoEncendido ;
          tramasEnHora += tiempoTrama;
        }
        
      });      
      // Calcular el promedio si hay datos en la hora
      const promedioEncendido = tramasEnHora > 0 ? (tiempoEncendidoEnHora / tramasEnHora) : 0;
  
      // Crear el objeto para la hora actual
      const fechaYhora = new Date(`2023-11-30T${hora.toString().padStart(2, '0')}:00:00.000Z`).toISOString();
      promedioEncendidoPorHora.push({
        promedioEncendido: promedioEncendido.toFixed(2), // Redondear a dos decimales
        fechaYhora
      });
    }
  
    return promedioEncendidoPorHora;
  }