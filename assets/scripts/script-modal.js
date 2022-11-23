document.addEventListener("click", function (e) {
  //verifica se o alvo do seu clique está sendo o modal ou um botão
  if (
    e.target != document.getElementsByClassName("modal-timeline")[0] &&
    e.target != document.getElementsByClassName("btn-close-modal")[0]
  ) {
     closeModal();
  }
});

export function openModal() {
  document.getElementsByClassName("modal-timeline")[0].style.display =
    "block";
}

// função fechar modal lançamento
export function  closeModal() {
  document.getElementsByClassName("modal-timeline")[0].style.display = "none";
}
