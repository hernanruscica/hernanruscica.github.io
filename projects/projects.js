import { createCard } from "./project_card.js";

console.log("desde projects.js");




const loadJson = () => {
  

}



document.addEventListener('DOMContentLoaded', () => {
  
  const urlArchivoJSON = '../projects02.json';

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


      const $projectsContainer = document.getElementById("projects_container");   
      projects.forEach(project => {
        //creo la card de un solo proyecto
        const currentProjectCard = createCard(project);
        $projectsContainer.append(currentProjectCard);        
      });
      
    })
    .catch(error => {
      console.error('Error al leer el archivo:', error.message);      
    });

  
})








  