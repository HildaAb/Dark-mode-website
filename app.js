const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text");

function imageMode(color) {
  image1.src = `functions_${color}.svg`;
  image2.src = `online_${color}.svg`;
  image3.src = `searching_${color}.svg`;
}

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 /50%)"
    : "rgb(255 255 255/50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255/50%)"
    : "rgb(0 0 0 /50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

toggleSwitch.addEventListener("change", switchTheme);
