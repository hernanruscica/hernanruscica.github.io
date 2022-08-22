console.log('desde js');
const $d = document;
const $header = $d.getElementById('header');
const $fakeHeader = $d.getElementById('fake_header');
const $navbarBtnOpen = $d.getElementById('header_btn_menu');
const $navbarBtnClose = $d.getElementById('navbarBtnClose');
const $navbar = $d.getElementById('header_navbar');

$d.addEventListener('click', (e) => {    
    console.log(e.target.name);
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

   console.log("scrolling", window.scrollY);
}
)

/*navbar_fixed */

