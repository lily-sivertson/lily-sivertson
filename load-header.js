// Wait until the DOM is fully ready
document.addEventListener("DOMContentLoaded", () => {
    fetch("header.html")
        .then(response => response.text())
        .then(data => {
            // Inject the HTML data into the placeholder element
            document.getElementById("header-placeholder").innerHTML = data;
            initializeNavButtons();
        })
        .catch(error => console.error("Error loading header:", error));


        
});


function initializeNavButtons(){
    const home_btn= document.querySelector("#home-button")
    const abt_btn= document.querySelector("#abt-button")
    const art_btn= document.querySelector("#art-button")
    const games_btn= document.querySelector("#games-button")

    if (home_btn) {
        home_btn.addEventListener('click', () => {
        window.location.href="index.html"
    
        });
    }

    if (abt_btn) {
        abt_btn.addEventListener('click', () => {
        window.location.href="about-me.html"
        
        });
    }

      if (art_btn) {
        art_btn.addEventListener('click', () => {
        window.location.href="art.html"
        
        });
    }

      if (games_btn) {
        games_btn.addEventListener('click', () => {
        window.location.href="games.html"
        
        });
    }

}