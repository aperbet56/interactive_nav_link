// Récupération des différents éléments
const marker = document.querySelector("#marker");
const navLinks = document.querySelectorAll("nav ul li a");

// Déclaration de la fonction Displayindicator qui va permettre de créér un efet de soulignement sous le lien
const displayIndicator = (e) => {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
};

navLinks.forEach((link) => {
  //Ecoute de l'événement "click" sur le lien
  link.addEventListener("click", (e) => {
    // Suppression du comportement par défaut au clic sur le lien
    e.preventDefault();
    // Appel de la fonction displayIndicator
    displayIndicator(e.target);
  });
});
