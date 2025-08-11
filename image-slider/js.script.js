const slider = document.getElementById("slider");
const images = slider.getElementsByTagName("img");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;

images[currentIndex].classList.add("active");

setInterval(() => {
  images[currentIndex].classList.remove("active");

  currentIndex = (currentIndex + 1) % images.length;

  images[currentIndex].classList.add("active");
}, 5000);

const previousFc = () => {
  prev.addEventListener("click", () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].classList.add("active");
  });
};

const nextFc = () => {
  next.addEventListener("click", () => {
    images[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add("active");
  });
};

previousFc();
nextFc();
