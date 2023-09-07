console.log('desde js');
const $d = document;
const $header = $d.getElementById('header');
const $navbarBtnOpen = $d.getElementById('header__btn-menu-open');
const $navbarBtnClose = $d.getElementById('header__btn-menu-close');
const $navbar = $d.getElementById('header__navbar');
const $topArrow = $d.getElementById('top_arrow');


$d.addEventListener('click', (e) => {  
    
    //console.log(e.target.id);
    if (e.target.id == 'header__btn-menu-close'){
        console.log('click en el boton de cerrar el menu');
        $navbar.classList.toggle('navbar_show');
        enableScroll();
    }
    if (e.target.id == 'header__btn-menu-open'){
        console.log('click en el boton de abrir el menu');
        $navbar.classList.toggle('navbar_show')
        disableScroll();
    }
    if (e.target.id.includes('header_navbar_link') || e.target.id.includes('header_navbar-desktop_link')){
        //Se hizo click en algun enlace del menu desktop o mobile     
        
        /*sistema de logros*/
        incrementarProgreso('menuClick');
        console.log(progreso['menuClick']);
        /*sistema de logros*/

        $navbar.classList.toggle('navbar_show');
        enableScroll();        
    }    
    if (e.target.id.includes('header_navbar-desktop_link')){
        $d.querySelectorAll('.header__navbar-desktop__list__item>a').forEach((item) => {            
            item.classList.remove('navbar-selected');
           // console.log(item)
        });            

        e.target.classList.add('navbar-selected');
    }    
}
);
window.addEventListener('scroll', (e) => {
     
    if (window.scrollY > 70){
        $topArrow.classList.add('top_arrow_show');
    }else{
        $topArrow.classList.remove('top_arrow_show');
    }
   //console.log("scrolling", window.scrollY);
}
)
/*
html {scroll-behavior: smooth;}
*/
function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
        //console.log($d.querySelector('html').setAttribute('scroll-behavior', 'unset'));
        $d.querySelector('html').setAttribute('style', 'scroll-behavior: unset');
}
  
function enableScroll() {
    window.onscroll = function() {};
    //$d.html.setAttribute('scroll-behavior', 'smooth');
    $d.querySelector('html').setAttribute('style', 'scroll-behavior: smooth');
}

window.addEventListener('scroll', () => {
    let idSection01 = 'aboutme';
    let idSection02 = 'myskills';
    let idSection03 = 'recentprojects';
    let idSection04 = 'contactme';
    let element01 = document.getElementById(idSection01); 
    let element02 = document.getElementById(idSection02); 
    let element03 = document.getElementById(idSection03); 
    let element04 = document.getElementById(idSection04); 
    
    let ySection01 = window.scrollY - element01.offsetTop ; // Restar el desplazamiento vertical del scroll con la posición del elemento
    let ySection02 = window.scrollY - element02.offsetTop ;
    let ySection03 = window.scrollY - element03.offsetTop ;
    let ySection04 = window.scrollY - element04.offsetTop ;
    console.clear();
    console.log(idSection01, ySection01);  
    console.log(idSection02, ySection02);  
    console.log(idSection03, ySection03);  
    console.log(idSection04, ySection04);  
    
})

