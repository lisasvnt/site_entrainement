//Script JS permettant l'ajout de fonctionnalitées à la page

// Ouvrir la pop-up
function openPopup(imageElement) { //Création d'une fonction openPopup 
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    // Mettre à jour l'image et le titre
    popupImage.src = imageElement.src; // On demande d'afficher l'image sur laquelle on a cliqué
    popup.style.display = "flex"; //Afficher la pop-up
}
// Fermer la pop-up
function closePopup() { //Création d'une fonction closePopup 
    const popup = document.getElementById("imagePopup"); //La fonction s'applique aux élements ayant une classe imagePopup
    popup.style.display = "none"; //Cacher la pop-up
}