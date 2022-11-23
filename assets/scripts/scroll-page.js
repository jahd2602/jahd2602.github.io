export function scrollToPosition(seeMore) {
  const scrollContentIn = document.querySelector("btn-see-more");
  const scrollContentOut = document.querySelector("btn-see-less");

  document.querySelector(seeMore).addEventListener("click", () => {
    scrollContentIn.toggleClass("scrollable-in");
  });

  document.querySelector(seeMore).addEventListener("click", () => {
    scrollContentOut.toggleClass("scrollable-out");
  });
}
