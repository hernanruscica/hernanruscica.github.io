export function createCard(project) {
    console.log(`desde CreateCard id ${project.name}`);
    const projectHTML = `         
            
            <div class="recentprojects-project__img-container">
                <img class="recentprojects-project__img-container__img" 
                src="${project.images[0].src}" alt="${project.images[0].alt}">            
                <a href="project.html?id=${project.id}" class="btn recentprojects-project__btn">
                Ver más</a>                   
            </div>
            
            <div class="recentprojects-project-info">
                <h3 class="recentprojects-project-info__title">${project.name}</h3>
                <div class="recentprojects-project-info__tags-container">
                    ${project.skills.map(skill => `<span class="tecnology-tag">${skill}</span>`).join('')}
                </div>
            </div>    
       
    `;      
    const $cardDiv = document.createElement("div");
    $cardDiv.classList.add("recentprojects-project");
    $cardDiv.innerHTML = projectHTML;    

    return $cardDiv;
}