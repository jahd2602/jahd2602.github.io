// Purpose: Scroll page to the top when the user clicks on the button
// Get the button
var coll = document.getElementsByClassName("collapsible");
// array com [0] faz referência ao primeiro elemento da array
var see_more = document.getElementsByClassName("see-more")[0];
var see_less = document.getElementsByClassName("see-less")[0];

// For each button, add an "onclick" event listener
for (var i = 0; i < coll.length; i++) {

  // Add the event listener
  coll[i].addEventListener("click", function () {

    var state_open = document.getElementsByClassName("timeline")[0].classList.toggle("scrollable-out");
    if (state_open) {
      see_more.style.display = "none";
      see_less.style.display = "block"
    } else {
      see_more.style.display = "block";
      see_less.style.display = "none";
    }

  });
}
