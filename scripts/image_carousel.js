import {
    imageDetailToggle,
} from "./project_1.js";

const buttons = $("button");
let add = 1;
buttons.click(function () {
    let carouselClick = this.classList[1];
    if (carouselClick === "forward-button") {
        if (add === 6) {
            add = 1;
        }
        add++
        forward(add);
    } else if (carouselClick === "back-button") {
        if (add === 1) {
            add = 6;
        }
        add--
        back(add);
    }
    imageDetailToggle(document.querySelector(".image-show"));
});

function forward(number) {
    if (number === 2) {
        document.querySelector(".image:first-child").classList.remove("image-show");
        document.querySelector(".image:nth-child(2)").classList.add("image-show");
        document.querySelector(".indikator:first-child").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(2)").classList.add("indikator-on");
    } else if (number === 3) {
        document.querySelector(".image:nth-child(2)").classList.remove("image-show");
        document.querySelector(".image:nth-child(3)").classList.add("image-show");
        document.querySelector(".indikator:nth-child(2)").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(3)").classList.add("indikator-on");
    } else if (number === 4) {
        document.querySelector(".image:nth-child(3)").classList.remove("image-show");
        document.querySelector(".image:nth-child(4)").classList.add("image-show");
        document.querySelector(".indikator:nth-child(3)").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(4)").classList.add("indikator-on");
    } else if (number === 5) {
        document.querySelector(".image:nth-child(4)").classList.remove("image-show");
        document.querySelector(".image:nth-child(5)").classList.add("image-show");
        document.querySelector(".indikator:nth-child(4)").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(5)").classList.add("indikator-on");
    } else {
        document.querySelector(".image:nth-child(5)").classList.remove("image-show");
        document.querySelector(".image:first-child").classList.add("image-show");
        document.querySelector(".indikator:nth-child(5)").classList.remove("indikator-on");
        document.querySelector(".indikator:first-child").classList.add("indikator-on");
    }
}

function back(number) {
    if (number === 5) {
        document.querySelector(".image:first-child").classList.remove("image-show");
        document.querySelector(".image:nth-child(5)").classList.add("image-show");
        document.querySelector(".indikator:first-child").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(5)").classList.add("indikator-on");
    } else if (number === 4) {
        document.querySelector(".image:nth-child(5)").classList.remove("image-show");
        document.querySelector(".image:nth-child(4)").classList.add("image-show");
        document.querySelector(".indikator:nth-child(5)").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(4)").classList.add("indikator-on");
    } else if (number === 3) {
        document.querySelector(".image:nth-child(4)").classList.remove("image-show");
        document.querySelector(".image:nth-child(3)").classList.add("image-show");
        document.querySelector(".indikator:nth-child(4)").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(3)").classList.add("indikator-on");
    } else if (number === 2) {
        document.querySelector(".image:nth-child(3)").classList.remove("image-show");
        document.querySelector(".image:nth-child(2)").classList.add("image-show");
        document.querySelector(".indikator:nth-child(3)").classList.remove("indikator-on");
        document.querySelector(".indikator:nth-child(2)").classList.add("indikator-on");
    } else {
        document.querySelector(".image:nth-child(2)").classList.remove("image-show");
        document.querySelector(".image:first-child").classList.add("image-show");
        document.querySelector(".indikator:nth-child(2)").classList.remove("indikator-on");
        document.querySelector(".indikator:first-child").classList.add("indikator-on");
    }
}