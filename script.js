const burger = document.querySelector("#burger");
const closeBurger = document.querySelector("#burger-close");
const mobileNav = document.querySelector("#mobile-nav");
//toggle mobile menu
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
});
closeBurger.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
});

//to show and hide tabs
function openTab(evt, contentId) {
  let i, tabcontent, tablinks;
  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className
      ? tablinks[i].classList.remove("active")
      : tablinks[i].classList.add("active");
  }
  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(contentId).style.display = "flex";
  evt.currentTarget.className += " show";
  evt.currentTarget.className += " active";
}

const question = document.getElementsByClassName("question");

for (i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}
