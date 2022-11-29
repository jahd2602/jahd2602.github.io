// console.log("antes de apertar see more");
// function scrollToPosition(seeMore) {
//   console.log("depois de apertar see more");
//   const scrollContentIn = document.querySelector("btn-see-more");
//   const scrollContentOut = document.querySelector("btn-see-less");

//   document.querySelector(seeMore).addEventListener("click", () => {
//     scrollContentIn.toggleClass("scrollable-in");
//   });

//   document.querySelector(seeMore).addEventListener("click", () => {
//     scrollContentOut.toggleClass("scrollable-out");
//   });
// }

var coll = document.getElementsByClassName("collapsible");
var i;
console.log("antes de apertar see more");

const scrollToContent = window.scrollTo(0, 1000);
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
