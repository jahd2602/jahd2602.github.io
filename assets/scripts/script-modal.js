window.openModal = function (this_element, event, index) {
  console.log(index);
  console.log("open modal");

  // Se eu clicar no card, o display do modal muda de none pra block
  document.getElementById("modal-" + index).style.display = "block";
  console.log(event);
  console.log(this_element);
  // Adiciona a classe cards-expanded no card
  this_element.parentNode.parentNode.classList.add("cards-expanded");
};

window.closeModal = function (this_element, event, index) {
  console.log("close modal");
  // quando eu clico no card, o display do modal muda de block pra none
  document.getElementById("modal-" + index).style.display = "none";

  // Remove a classe cards-expanded do card
  console.log(this_element.parentNode.parentNode.parentNode);
  this_element.parentNode.parentNode.parentNode.classList.remove("cards-expanded");
};
