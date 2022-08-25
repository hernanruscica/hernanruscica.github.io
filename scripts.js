console.log('desde js');
const $d = document;
const $header = $d.getElementById('header');
const $fakeHeader = $d.getElementById('fake_header');
const $navbarBtnOpen = $d.getElementById('header_btn_menu');
const $navbarBtnClose = $d.getElementById('navbarBtnClose');
const $navbar = $d.getElementById('header_navbar');
const $aboutmeShowMore = $d.getElementById('aboutme_showmore');
const $topArrow = $d.getElementById('top_arrow');


$d.addEventListener('click', (e) => {  
    
    
    if (e.target.id == 'navbarBtnClose'){
        console.log('click en el boton de cerrar el menu');
        $navbar.classList.toggle('navbar_show');
        enableScroll();
    }
    if (e.target.id == 'header_btn_menu'){
        console.log('click en el boton de abrir el menu');
        $navbar.classList.toggle('navbar_show')
        disableScroll();
    }
    if (e.target.id.includes('header_navbar_link')){
        console.log("btn navbar")
        $navbar.classList.toggle('navbar_show');
        enableScroll();
    }
    if (e.target.id == 'aboutme_showmore' || e.target.id == 'myskills_showmore' || e.target.id == 'recentprojects_showmore' ){                
                
        console.log(e.target);        
        let nameSection = e.target.id.slice(0, -9);
        let currentMoreClass = `${nameSection}_textcontent_more`;
        
        const $currentMore = $d.querySelector(`.${currentMoreClass}`);        
        console.log($currentMore);        
        let isOpen = !$currentMore.classList.contains(`${currentMoreClass}_expanded`);    
        //console.log(isOpen);
               
        let textContent = ""; 
        //console.log(isOpen);   
        if (isOpen == true){
            textContent = '<i class="fa-solid fa-angle-up "></i> Show me less <i class="fa-solid fa-angle-up "></i>'                        
        }else{
            textContent = '<i class="fa-solid fa-angle-down "></i> Show me more <i class="fa-solid fa-angle-down "></i>'           
        }        
        e.target.innerHTML = textContent; 
        $currentMore.classList.toggle(`${currentMoreClass}_expanded`);     
           
    }    
    //console.log(window.scrollY);
}
);
window.addEventListener('scroll', (e) => {
    /*
    if (window.scrollY > 0){
        $header.classList.add('navbar_fixed');   
        $fakeHeader.style.height = '70px';
    }else{
        $header.classList.remove('navbar_fixed');        
        $fakeHeader.style.height = '0px';
    }  
    */  
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
