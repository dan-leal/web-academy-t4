const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
const images = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Declaring the alternative text for each image file */
const alternative = [
  "Persona 1",
  "Persona 2",
  "Persona 3",
  "Persona 4",
  "Persona 5",
];

/* Looping through images */
for (let i = 0; i < images.length; i++) {
  let newImage = document.createElement("img");
  let srcImage = `./images/${images[i]}.jpg`;
  newImage.setAttribute("src", srcImage);
  newImage.setAttribute("alt", alternative[i]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", () => {
    displayedImage.setAttribute("src", srcImage);
    displayedImage.setAttribute("alt", alternative[i]);
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") == "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb( 0 0 0 / 50% )";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb( 0 0 0 / 0% )";
  }
});
