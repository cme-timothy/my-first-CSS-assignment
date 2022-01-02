const body = document.querySelector("body");
let image = document.querySelector(".image-show");
const container = document.querySelector(".carousel-container");
const indikators = document.querySelector(".carousel-indikators");
const back = document.querySelector(".back-button");
const forward = document.querySelector(".forward-button");

imageDetailToggle(image);

function imageDetailToggle(imageChange) {
    imageChange.addEventListener("click", (event) => {
        event.stopPropagation();
        let imageShow = document.querySelector(".image-show");
        imageShow.classList.add("image-enlarged");
        container.classList.add("carousel-container-fullscreen");
        indikators.classList.add("element-hidden");
        back.classList.add("element-hidden");
        forward.classList.add("element-hidden");
    });
}

body.addEventListener("click", () => {
    let imageShow = document.querySelector(".image-show");
    imageShow.classList.remove("image-enlarged");
    container.classList.remove("carousel-container-fullscreen");
    indikators.classList.remove("element-hidden");
    back.classList.remove("element-hidden");
    forward.classList.remove("element-hidden");
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        let imageShow = document.querySelector(".image-show");
        imageShow.classList.remove("image-enlarged");
        container.classList.remove("carousel-container-fullscreen");
        indikators.classList.remove("element-hidden");
        back.classList.remove("element-hidden");
        forward.classList.remove("element-hidden");
    }
});

export {
    imageDetailToggle,
};
