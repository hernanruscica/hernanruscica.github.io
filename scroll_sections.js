


let idSection01 = 'aboutme';
let idSection02 = 'myskills';    
let idSection03 = 'recentprojects';
let idSection04 = 'links';
let idSection05 = 'contactme';        
let idFooter = 'footer';

let element01 = null; 
let element02 = null; 
let element03 = null; 
let element04 = null;  
let element05 = null;  

let ySection01 =  null ; 
let ySection02 =  null ;
let ySection03 =  null ;
let ySection04 =  null ;   
let ySection05 =  null ;  

let currentPos = 'aboutme'; 


document.addEventListener('DOMContentLoaded', () => {
    element01 = document.getElementById(idSection01); 
    element02 = document.getElementById(idSection02); 
    element03 = document.getElementById(idSection03); 
    element04 = document.getElementById(idSection04);  
    element05 = document.getElementById(idSection05);  
   
    ySection01 =  element01.offsetTop ; 
    ySection02 =  element02.offsetTop ;
    ySection03 =  element03.offsetTop ;
    ySection04 =  element04.offsetTop ;   
    ySection05 =  element05.offsetTop ;   
   
})

window.addEventListener('scroll', () => {            
    
    
    let tolerance = null;//   mobile
    if (window.innerWidth > 1000){
        tolerance = 0;
    }else {
        tolerance = 120;
    }

    console.log(tolerance, window.innerWidth)

    let scroollPosY = window.scrollY;
    

    if  (scroollPosY > ySection01 - 20){
        currentPos = idSection01;
    }
    if  (scroollPosY > ySection02 - 20){
        currentPos = idSection02;
    }
    if  (scroollPosY > ySection03 - 20){
        currentPos = idSection03;
    }
    if  (scroollPosY > ySection04 - 20 ){
        currentPos = idSection04;
    }
    if  (scroollPosY > ySection05 - tolerance ){
        currentPos = idSection05;
    }   


    $d.querySelectorAll('.header__navbar-desktop__list__item>a').forEach((item) => {            
                 item.classList.remove('navbar-selected');
                });        
    $d.getElementById(`${currentPos}_desktop_navbar_link`).classList.add('navbar-selected');    

    
    $d.querySelectorAll('.header__navbar-mobile__list__item>a').forEach((item) => {            
        item.classList.remove('navbar-mobile-selected');
        // console.log(currentPos)
       });  

    $d.getElementById(`${currentPos}_mobile_navbar_link`).classList.add('navbar-mobile-selected');    
     

});