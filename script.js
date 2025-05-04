//nav start//

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

//nav end//

// //filter image start//

let list = document.querySelectorAll(".list");
let itemBox = document.querySelectorAll(".itemBox");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    for (let j = 0; j < list.length; j++) {
      list[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < itemBox.length; k++) {
      itemBox[k].classList.remove("active");
      itemBox[k].classList.add("hide");

      if (
        itemBox[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        itemBox[k].classList.remove("hide");
        itemBox[k].classList.add("active");
      }
    }
  });
}

//filter image end//

//accordion start//

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const title = item.querySelector(".accordion-title");
  const content = item.querySelector(".accordion-content");

  title.addEventListener("click", () => {
    for (var i = 0; i < accordionItems.length; i++) {
      if (accordionItems[i] != item) {
        accordionItems[i].classList.remove("active");
      } else {
        item.classList.toggle("active");
      }
    }
  });
});

//accordion end//

//jquery review star//

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 2000,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

//jquery review end//

//scroll to top start//

const scrollBtn = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//scroll to top end//
