class MobileNavbar {
    constructor(mobileMenu,listaDeNavegacao,LinksDeNavegacao) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.listaDeNavegacao = document.querySelector(listaDeNavegacao);
        this.LinksDeNavegacao = document.querySelectorAll(LinksDeNavegacao);
        this.activeClass = "active";
    }



    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("hey igor"));
        
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


