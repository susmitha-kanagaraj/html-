document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio Loaded!");

    let images = document.querySelectorAll(".skill img, .project img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("You clicked on " + img.alt);
        });
    });
});