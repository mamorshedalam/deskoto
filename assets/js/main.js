// menu toggle
document.getElementById("toggle-btn").onclick = function () {
     const menu = document.getElementById("menu");

     if (menu.style.display === "flex") {
          menu.style.display = "none";
     } else { menu.style.display = "flex"; }
}

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