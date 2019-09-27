//Website header scroll
function arrowDown() {
    document.querySelector('.navBar').scrollIntoView({ 
        behavior: 'smooth' 
    });
}
//Navbar buttons
function homePage() {
    document.location = ("index.html");
}
function touristPage() {
    document.location = ("touristLocations.html");
}
function eventPage() {
    document.location = ("events.html");
}
