//  TEMA OSCURO
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//PREVIOSLY SELECTED TOPIC (revisando el almasenamiento)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// OBTENEMOS EL TEMA ACTUAL QUE LA INTERFAZ TIENE VALIDANDO LA CLASE DE TEMA OSCURO
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//NECESITAMOS VALIDAR SI EL USIARIO HA SELECCIONADO PREVIAMENTE AQUEL TEMA
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

//ACTIVAR / DESACTIVAR EL TEMA MANUALMENTE
themeButton.addEventListener('click', () => {
    //AGREGAR O QUITAR EL ÍCONO CLARO/OSCURO
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //GUARDAMOS EL TEMA Y EL ACTUAL ÍCONO QUE EL USUARIO HA ELEJIDO
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("El tema sirve :D")

/* MOSTRAR Y OCULTAR EL MENU */
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

//MOSTRAR EL MENÚ
/* VALIDAR SI LA CONSTANTE EXISTE */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
} 

// ================  MENU HIDE  =============
/*  Validate if the constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
} 
console.log("si sirve")

//REMOVE MENU PROFILE
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //cuanto cliceamos sobre nav__links, removemos el show menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

