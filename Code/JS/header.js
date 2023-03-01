let btn1 = document.getElementById("pic_hamburger");
let btn2 = document.getElementById("open");
let text1 = document.getElementById("event");
let menu1 = document.getElementById("navigation");
let menu2 = document.getElementById("submenu_display");

function OpenNav() {
  if (getComputedStyle(menu1).visibility != "visible") {
    menu1.style.visibility = "visible";
    menu2.style.display = "none";
  } else {
    menu1.style.visibility = "hidden";
    menu2.style.display = "none";
  }
}

function OpenSubNav() {
  if (getComputedStyle(menu2).display != "block") {
    menu2.style.display = "block";
    menu2.style.visibility = "visible";
    btn2.style.transform = "rotate(90deg)";
  } else {
    menu2.style.display = "none";
    menu2.style.visibility = "hidden";
    btn2.style.transform = "rotate(0deg)";
  }
}

btn1.onclick = OpenNav;
btn2.onclick = OpenSubNav;