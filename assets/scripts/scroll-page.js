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

console.log("antes de apertar see more");

const scrollToContent = window.scrollTo(0, 1000);
for (var i = 0; i < coll.length; i++) {
  console.log("🚀 ~ file: scroll-page.js ~ line 31 ~ coll", coll)

  coll[i].addEventListener("click", function () {
    this.classList.toggle("scrollable-out");
    document.getElementsByClassName("timeline")[0].classList.toggle("scrollable-out");
    console.log("🚀 ~ file: scroll-page.js ~ line 26 ~ classList", this.classList)
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
