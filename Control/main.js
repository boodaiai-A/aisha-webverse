let images = [
  "simba-main.jpeg",
  "simba-calm.jpeg",
  "simba-open.jpeg",
  "simba-play.jpeg",
  "simba-soft.jpeg"
];

let index = 0;
let main = document.getElementById("main");

function changeImage() {
  index++;

  if (index >= images.length) {
    index = 0;
  }

  main.style.opacity = 0;

  setTimeout(() => {
    main.src = images[index];
    main.style.opacity = 1;
  }, 300);
}

setInterval(changeImage, 2000);