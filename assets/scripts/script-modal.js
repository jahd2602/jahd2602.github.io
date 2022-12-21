var cardInformation = document.getElementsByClassName("card-informations");

for (var i = 0; i < cardInformation.length; i++) {
  // Get the card
  let cardInfo = cardInformation[i];

  // Get the index of the card. This is used to identify the modal
  let index = cardInfo.id.split("-")[2];

  // When the user clicks on the card, open the modal.
  cardInfo.addEventListener("click", function () {
    // If I click on the card, the display of the modal changes from none to block
    document.getElementById("modal-" + index).style.display = "block";

    // Add the cards-expanded class to the card
    cardInfo.parentNode.parentNode.classList.add("cards-expanded");
  });
}

// Iterate over btn-close-modal elements
var btnCloseModal = document.getElementsByClassName("btn-close-modal");
Array.from(btnCloseModal).forEach(function (btn) {
  // When the user clicks on the button, close the modal
  btn.addEventListener("click", function () {
    // If I click on the button, the display of the modal changes from block to none
    btn.parentNode.parentNode.style.display = "none";

    // Remove the cards-expanded class from the card
    btn.parentNode.parentNode.parentNode.classList.remove(
      "cards-expanded"
    );
  });
});
