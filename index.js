document
  .getElementById("navOptions")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      var clickedLinkId = event.target.id;
      console.log("Clicked link ID: " + clickedLinkId);
      showPage(clickedLinkId);
    }
  });

function showPage(pageId) {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
    document.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
  });
  document.querySelector(`.${pageId}`).classList.remove("hidden");
  document.getElementById(pageId).classList.add("active");
}

window.onload = function () {
  showPage("home");
};
