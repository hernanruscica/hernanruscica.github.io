
// Definir los logros
const logros = [
    { nombre: 'Explorador de menues experto', descripcion: 'Has hecho click en 10 enlaces del menu' },
    { nombre: 'Explorador de proyectos', descripcion: 'Has entrado en mas de 5 proyectos' },
    // Agrega más logros aquí
  ];
    
// Obtener el progreso del visitante desde las cookies
let progreso = JSON.parse(localStorage.getItem('progreso'))                     
            || 
            {menuClick : 0,
                projectClick: 0,
                socialClick: 0,
                cvBajado: 0,
                mensajeEnviado: 0};
  
// Función para otorgar un logro
function otorgarLogro(logro) {
if (!progreso[logro.nombre]) {
    progreso[logro.nombre] = true;
    localStorage.setItem('progreso', JSON.stringify(progreso));
    // Aquí puedes agregar código para mostrar el logro en tu sitio web
    //console.log(`¡Ganaste el logro "${logro.nombre}"!`);
}
}  

//incrememta en uno la propiedad del progreso
function incrementarProgreso(propiedad)  {        
    progreso[propiedad] = (progreso[propiedad] || 0) + 1; //incrementa si existe        

    localStorage.setItem('progreso', JSON.stringify(progreso));
    // Si el visitante ha visto suficientes proyectos, otorga el logro de "Explorador experto"
    if (progreso.menuClick && progreso.menuClick >= 10) {
        otorgarLogro(logros[0]);
    }
    
    /* Si el visitante ha dejado comentarios en suficientes proyectos, otorga el logro de "Comentarista habitual"*/
    if (progreso.projectClick && progreso.projectClick >= 5) {
        otorgarLogro(logros[1]);
    }
    
}


 