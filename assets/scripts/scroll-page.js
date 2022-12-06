var coll = document.getElementsByClassName("collapsible");
// array com [0] faz referência ao primeiro elemento da array
var see_more = document.getElementsByClassName("see-more")[0];
var see_less = document.getElementsByClassName("see-less")[0];

console.log("antes de apertar see more");

const scrollToContent = window.scrollTo(0, 1000);
for (var i = 0; i < coll.length; i++) {
  console.log("🚀 ~ file: scroll-page.js ~ line 31 ~ coll", coll)

  coll[i].addEventListener("click", function () {
    var state_open = document.getElementsByClassName("timeline")[0].classList.toggle("scrollable-out");
    console.log(
      "🚀 ~ file: scroll-page.js ~ line 13 ~ state_open",
      state_open
    );

    if (state_open) {
      console.log("🚀 ~ file: scroll-page.js ~ line 20 ~ see_more", see_more)
      see_more.style.display = "none";

      see_less.style.display = "block"
      console.log("🚀 ~ file: scroll-page.js ~ line 21 ~ see_less", see_less)

    } else {
      see_more.style.display = "block";
      see_less.style.display = "none";
    }

  });
}

