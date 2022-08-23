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
    }
    if (e.target.id == 'header_btn_menu'){
        console.log('click en el boton de abrir el menu');
        $navbar.classList.toggle('navbar_show')
    }
    if (e.target.id.includes('header_navbar_link')){
        console.log("btn navbar")
        $navbar.classList.toggle('navbar_show');
    }
    if (e.target.id == 'aboutme_showmore' || e.target.id == 'myskills_showmore' || e.target.id == 'recentprojects_showmore' ){        
        let isOpen = e.target.parentElement.hasAttribute('open');
        let textContent = '';
        if (isOpen == false){
            textContent = '<i class="fa-solid fa-angle-up"></i> Show me less <i class="fa-solid fa-angle-up"></i>'
        }else{
            textContent = '<i class="fa-solid fa-angle-down"></i> Show me more <i class="fa-solid fa-angle-down"></i>'
        }
        console.log(e.target.style.height)
        e.target.innerHTML = textContent;
    }    
    //console.log(window.scrollY);
}
);
window.addEventListener('scroll', (e) => {
    if (window.scrollY > 70){
        $header.classList.add('navbar_fixed');   
        $fakeHeader.style.height = '70px';
    }else{
        $header.classList.remove('navbar_fixed');        
        $fakeHeader.style.height = '0px';
    }    
    if (window.scrollY > 200){
        $topArrow.classList.add('top_arrow_show');
    }else{
        $topArrow.classList.remove('top_arrow_show');
    }


   //console.log("scrolling", window.scrollY);

}
)

/*navbar_fixed */
