const body = document.querySelector("body");
const mainMenu = document.querySelector(".main-menu");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const div = document.createElement("div");
div.classList.add("menu-arrow");

let on = true;
hamburgerMenu.addEventListener("click", () => {
    mainMenu.append(div);
    event.stopPropagation();
    console.log("hamburger menu was clicked!");
    if (on === true) {
        hamburgerMenu.setAttribute("src", "../assets/hamburger_menu_x.png");
        mainMenu.classList.add("main-menu-visible");
        mainMenu.addEventListener("click", () => {
            event.stopPropagation();
            console.log("inside hamburger menu was clicked!");
        });
        on = false;
    } else if (on === false) {
        div.remove();
        hamburgerMenu.setAttribute("src", "../assets/hamburger_menu.png");
        mainMenu.classList.remove("main-menu-visible");
        on = true;
    }
});

body.addEventListener("click", () => {
    div.remove();
    console.log("outside hamburger menu was clicked!");
    hamburgerMenu.setAttribute("src", "../assets/hamburger_menu.png");
    mainMenu.classList.remove("main-menu-visible");
    on = true;
});
