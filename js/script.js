/*
----------------
Table Of Content
----------------
1. Window JS Start
2. Responsive JS Start
*/

(function () {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".website-header").style.padding = "8px 0";
      document.querySelector(".website-logo").style.width = "220px";
    } else {
      document.querySelector(".website-header").style.padding = "12px 0";
      document.querySelector(".website-logo").style.width = "260px";
    }
  };
  // Window Js End

  function responsiveNav() {
    let bar = document.querySelector(".solid-bar"),
      close = document.querySelector(".close"),
      navList = document.querySelector(".nav-list"),
      header = document.querySelector(".website-nav");

    bar.addEventListener("click", () => {
      if (navList.style.display === "block") {
        navList.style.display = "none";
        header.classList.remove("collapsed");
      } else {
        navList.style.display = "block";
        header.classList.add("collapsed");
      }
    });

    close.addEventListener("click", () => {
      navList.style.display = "none";
      header.classList.remove("collapsed");
    });
  }
  responsiveNav();
  // Responsive JS End
})();
