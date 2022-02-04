const burger = document.querySelector("#burger");
const closeBurger = document.querySelector("#burger-close");
const mobileNav = document.querySelector("#mobile-nav");
const featureNav = document.querySelector("#features-nav");
const featurediv = document.querySelector("#features-div");
const feature1 = document.querySelector("#tab-1");
const feature2 = document.querySelector("#tab-2");
const feature3 = document.querySelector("#tab-3");
//toggle mobile menu
burger.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
});
closeBurger.addEventListener("click", () => {
  mobileNav.classList.toggle("hide");
});
// shuffle tabs
featureNav.addEventListener("click", (e) => {});
let NavLi = Array.from(featureNav.children);

NavLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.id);
    const tabContentItem = document.querySelector(`#${e.target.id}-content`);
    tabContentItem.classList.add("show");
  });
});
console.log(NavLi);

NavLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.target.id);
    const tabContentItem = document.querySelector(`#${e.target.id}-content`);
    tabContentItem.classList.contains("hide")
      ? tabContentItem.classList.remove("hide")
      : tabContentItem.classList.add("hide");
  });
});

// Listen for tab item click
NavLi.forEach((li) => {
  li.addEventListener("click", selectItem);
});
