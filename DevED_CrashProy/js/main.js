function init() {
    const slides = document.querySelectorAll(".slide");
    const pages = document.querySelectorAll(".page");
    //tracker
    let current = 0;

    const background = [`radial-gradient(#2B3760, #0B1023)`,
        `radial-gradient(#4E3022, #161616)`,
        `radial-gradient(#4E4342, #161616)`
    ];

    slides.forEach((slide, index) => {
        slide.addEventListener("click", function() {
            changeColorDots(this);
            nextSlide(index);
        });
    });

    function changeColorDots(dot) {
        slides.forEach(slide => {
            slide.classList.remove("active");
        });
        dot.classList.add("active");
    }

    function nextSlide(pageNumber) {
        const nextPage = pages[pageNumber];
        const currentPage = pages[current];
        const nextLeft = nextPage.querySelector(".hero .model-left");
        const nextRight = nextPage.querySelector(".hero .model-right");
        const currentLeft = currentPage.querySelector(".hero .model-left");
        const currentRight = currentPage.querySelector(".hero .model-right");
        const nextText = nextPage.querySelector(".details");
        const portafolio = document.querySelector(".portafolio");

        const tl = new TimelineMax();

        tl.fromTo(currentLeft, 0.3, { y: '-10%' }, { y: '-100%' })
            .fromTo(currentRight, 0.3, { y: '10%' }, { y: '-100%' }, "-=2")
            .to(portafolio, 0.3, { backgroundImage: background[pageNumber] })
            .fromTo(currentPage, 0.3, { opacity: 1, pointerEvents: "all" }, { opacity: 0, pointerEvents: "none" })
            .fromTo(nextPage, 0.3, { opacity: 0, pointerEvents: "none" }, { opacity: 1, pointerEvents: "all" })
            .fromTo(nextLeft, 0.3, { y: '-100%' }, { y: '-10%' }, "-=0.6")
            .fromTo(nextRight, 0.3, { y: '-100%' }, { y: '10%' }, "-=0.6")
            .fromTo(nextText, 0.3, { opacity: 0, y: 30 }, { opacity: 1, y: 0 })
            .set(nextLeft, { clearProps: 'all' })
            .set(nextRight, { clearProps: 'all' });

        current = pageNumber;
    }

    const hamburguer = document.querySelector('.menu');
    const hamburguerLines = document.querySelectorAll('.menu line');
    const navOpen = document.querySelector('.nav-open');
    const contact = document.querySelector('.contact');
    const social = document.querySelector('.social');
    const logo = document.querySelector('.logo');

    const tl = new TimelineMax({ paused: true, reversed: true });
    tl.to(navOpen, 0.5, { y: 0 })
        .fromTo(contact, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
        .fromTo(social, 0.5, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, "-=0.1")
        .fromTo(logo, 0.2, { color: 'white' }, { color: 'black' }, "-=0.8")
        .fromTo(hamburguerLines, 0.2, { stroke: 'white' }, { stroke: 'black' }, "-=0.8");

    hamburguer.addEventListener("click", () => {
        tl.reversed() ? tl.play() : tl.reverse();
    });
}

init();