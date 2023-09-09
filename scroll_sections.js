window.addEventListener('scroll', () => {    
    const $d = document;
    let idSection01 = 'aboutme';
    let idSection02 = 'myskills';
    let idSection03 = 'recentprojects';
    let idSection04 = 'contactme';    
    let idFooter = 'footer';

    let element01 = $d.getElementById(idSection01); 
    let element02 = $d.getElementById(idSection02); 
    let element03 = $d.getElementById(idSection03); 
    let element04 = $d.getElementById(idSection04);  
    let footer = $d.getElementById(idFooter);  

    let ySection01 =  element01.offsetTop ; 
    let ySection02 =  element02.offsetTop ;
    let ySection03 =  element03.offsetTop ;
    let ySection04 =  element04.offsetTop ;   
    let yFooter =  footer.offsetTop ;  
    
    let scroollPosY = window.scrollY;
    let tolerance = 200;   

    if  (scroollPosY > ySection01 - 20){
        currentPos = idSection01;
    }
    if  (scroollPosY > ySection02 - 20){
        currentPos = idSection02;
    }
    if  (scroollPosY > ySection03 - 20){
        currentPos = idSection03;
    }
    if  (scroollPosY > ySection04 - tolerance ){
        currentPos = idSection04;
    }

    console.clear();      
    console.log(idSection01, ySection01);  
    console.log(idSection02, ySection02);  
    console.log(idSection03, ySection03);  
    console.log(idSection04, ySection04);  
    console.log(idFooter, yFooter);  
    console.log(`Posicion de Y: ${scroollPosY}. tipo de dato: ${typeof scroollPosY}`);
    console.log(`seccion actual : ${currentPos}`);


    $d.querySelectorAll('.header__navbar-desktop__list__item>a').forEach((item) => {            
                 item.classList.remove('navbar-selected');
                });  
      
    $d.getElementById(`${currentPos}_desktop_navbar_link`).classList.add('navbar-selected');    
    
    $d.querySelectorAll('.header__navbar-mobile__list__item>a').forEach((item) => {            
        item.classList.remove('navbar-mobile-selected');
       });  

    $d.getElementById(`${currentPos}_mobile_navbar_link`).classList.add('navbar-mobile-selected');    
     

});