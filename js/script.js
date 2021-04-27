class MobileNavbar {
    constructor(mobileMenu,listaDeNavegacao,LinksDeNavegacao) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.listaDeNavegacao = document.querySelector(listaDeNavegacao);
        this.LinksDeNavegacao = document.querySelectorAll(LinksDeNavegacao);
        this.activeClass = "active";

        this.handleClick  = this.handleClick.bind(this)
    }

    animateLinks() {
        this.LinksDeNavegacao.forEach((link, index) => {
            link.style.animation
            ? (link.style.animation = "") 
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
            
        });
    } 

    handleClick() {
        this.listaDeNavegacao.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }


    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
        
    }

    init() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}


const mobileNavbar = new MobileNavbar (
    ".mobile-menu",
    ".lista-navegacao",
    ".lista-navegacao li",

);

mobileNavbar.init();


