let contador = 0;
let ubicacionInicial = window.pageYOffset;

document.addEventListener('DOMContentLoaded', function() {

    let numero = document.querySelectorAll('.carousel').length;
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true
    });


    var mapa = document.getElementById("mapa");
    if (mapa == null) {
        console.log("mapa no existe");
    } else {
        var map = L.map('mapa').setView([-12.054634, -77.033772], 18);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-12.054634, -77.033772]).addTo(map)
            .bindTooltip('Representaciones Guerra S.A.C')
            .openTooltip();
    }

    /*setInterval(() => {
        let elem = document.querySelector('.carousel')[0];
        console.log(elems);
        var instance = M.Carousel.getInstance(elem);
        console.log(instance);

        instance.next();
        if (numero === contador) {
            contador = 0;
        }
        contador++;
    }, 3000);*/

    const categorias = document.querySelector(".categorias");

    if(categorias){
        categorias.addEventListener("click", (e) => {

            if (e.target.classList.contains("bloque-categoria")) {
                const categorias = e.target.parentElement;
                
                categorias.classList.toggle('aparece');
        
            }
        });
    }

    const logo = document.querySelector('.logo');

    logo.addEventListener('click', () => {
        window.location = 'index.html';
    });

});
window.addEventListener("scroll", () => {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionInicial >= desplazamientoActual) {
        document.getElementsByTagName('header')[0].style.top = "0px";
    } else {
        document.getElementsByTagName('header')[0].style.top = "-250px";
    }
    ubicacionInicial = desplazamientoActual;
});

let hamburguersa = document.querySelector('.hamburguesa');

hamburguersa.addEventListener('click', () => {
    let navHeader = document.querySelector('.links');
    navHeader.classList.toggle('open');
    hamburguersa.classList.toggle('blanca');
});