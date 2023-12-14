import { createCard } from "./project_card.js";

//console.log("desde projects.js");




document.addEventListener('DOMContentLoaded', () => {
  
  const urlArchivoJSON = './projects.json';

  fetch(urlArchivoJSON)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error de red - ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Ahora, 'data' contiene el objeto JavaScript con el contenido del archivo JSON            
      const projects =  data;
      localStorage.setItem('projects', JSON.stringify(projects));

      const $projectsContainer = document.getElementById("projects_container");   
     
      projects.forEach(project => {
        //creo la card de un solo proyecto
        const currentProjectCard = createCard(project);
        $projectsContainer.append(currentProjectCard);        
      });
 /*
      const projectsToShow =  2;
      for (let i = 0; i < projectsToShow; i++ ){
        const currentProjectCard = createCard(projects[i]);
        $projectsContainer.append(currentProjectCard);    
      }
      */
    })
    .catch(error => {
      console.error('Error al leer el archivo:', error.message);      
    });

  
})








  