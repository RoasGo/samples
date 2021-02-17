// Function expression to select elements
const selectElemet = (s) => document.querySelector(s);

// Open the menu on click
selectElemet(".open").addEventListener("click", () => {
    selectElemet(".nav-list").classList.add("active");
});

selectElemet(".close").addEventListener("click", () => {
    selectElemet(".nav-list").classList.remove("active");
});
