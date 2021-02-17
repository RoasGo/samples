// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

// Open the menu on click
selectElement(".open").addEventListener("click", () => {
    selectElement(".nav-list").classList.add("active");
});

selectElement(".close").addEventListener("click", () => {
    selectElement(".nav-list").classList.remove("active");
});

selectElement(".nav-list").addEventListener("click", (e) => {

    if (e.target.parentElement.parentElement.classList.contains("active")) {

        selectElement(".nav-list").classList.remove("active");
        console.log("Entro aqui");

    }
    console.log(e.target.parentElement.parentElement);

})
