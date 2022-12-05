// criando um evento click para verificar se o modal existe
// document.addEventListener("click", function (e) {
//   //verifica se o alvo do seu clique está sendo o modal ou um botão
//   if (
//     e.target != document.getElementsByClassName("modal-timeline") &&
//     e.target != document.getElementsByClassName("btn-close-modal")
//   ) {
//      closeModal();
//   }
// });

console.log("modal");
window.openModal = function(t,e, index) {
  console.log(index);
  console.log("open modal");
  // por padrão o display é none, quando eu clico no card, o display do modal
  // muda de none pra block
  // document.getElementsByClassName("modal-timeline").style.display =
  // "flex";
  document.getElementById("modal-" + index).style.display = "block";
  console.log(e);
  console.log(t);
  console.log(t.parentNode.parentNode)
t.parentNode.parentNode.classList.add("cards-expanded");
  // document.getElementById("card-hidden-" + index).style.display = "none";


}


window.closeModal = function (e, index) {
  console.log(e);
  console.log("close modal");
  // quando eu clico no card, o display do modal muda de block pra none
  document.getElementById("modal-" + index).style.display = "none";

    document.getElementById("card-hidden-" + index).style.display = "block";
};
