// menu toggle
document.getElementById("toggle-btn").onclick = function () {
     const menu = document.getElementById("menu");
     const open = document.getElementById("open");
     const close = document.getElementById("close");

     if (menu.style.display === "flex") {
          menu.style.display = "none";
          close.style.display = "none";
          open.style.display = "block";
     } else {
          menu.style.display = "flex";
          close.style.display = "block";
          open.style.display = "none";
     }
}

// scroll top
// document.getElementById("scroll").onclick = function(){
//      window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// faq body toggle
const faqToggle = document.querySelectorAll(".faqToggle");
faqToggle.forEach(toggle => {
     toggle.onclick = function () {
          const toggleBody = toggle.nextElementSibling;
          const icon = toggle.querySelector(".icon");

          if (toggleBody.style.display === "block") {
               toggleBody.style.display = "none";
               icon.classList.remove("rotate-90");
          } else {
               toggleBody.style.display = "block";
               icon.classList.add("rotate-90");
          }
     }
})


// sub menu toggle
const dropDown = document.querySelectorAll(".dropDown");
dropDown.forEach(item => {
     item.onclick = function toggle() {
          const submenu = item.nextElementSibling;

          if (submenu.style.display === "block") {
               submenu.style.display = "none";
          } else { submenu.style.display = "block"; }
     }
})

// faq btn toggle
const section = document.querySelectorAll(".faqItem");
let sections = {};
let i = 0;

Array.prototype.forEach.call(section, function (e) {
     sections[e.id] = e.offsetTop;
});

// sticky navbar
window.onscroll = function () {
     const navbar = document.querySelector("header");
     const scroll = document.getElementById("scroll");

     let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
     for (i in sections) {
          if (sections[i] <= scrollPosition) {
               const removeSection = document.querySelectorAll(".faqList");
               removeSection.forEach(title => {
                    title.classList.remove("bg-[#ffffff33]");
                    if (title.children.length > 0) {
                         title.children[0].remove();
                    }
               })

               const activeSection = document.querySelector('a[href*=' + i + ']');
               activeSection.classList.add("bg-[#ffffff33]");
               const icon = document.createElement("i");
               icon.className = "text-base fa-solid fa-angle-right pr-3";
               activeSection.prepend(icon)
          }
     }

     if (window.scrollY > 100) {
          navbar.classList.remove("bg-transparent");
          navbar.classList.add("bg-indigo-600");
     } else {
          navbar.classList.remove("bg-indigo-600");
          navbar.classList.add("bg-transparent");
     }
     if (window.scrollY > 500) {
          scroll.style.display = "block";
     } else {
          scroll.style.display = "none";
     }
}  