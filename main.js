const $checkbox = document.getElementById('checkbox');
const mode = document.getElementById('mode');
const imgMode = document.getElementById('imgMode');
const url = "https://i.postimg.cc/8CWFF8SR/moon-png.webp"
const url2 = "https://i.postimg.cc/25BW4b4B/sol.png"

function theme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'light');
    mode.innerHTML = "Dark Mode";
    imgMode.style.backgroundImage = `url(${url})`;
 } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    mode.innerHTML = "Light Mode" 
    imgMode.style.backgroundImage = `url(${url2})`;
  }
}
$checkbox.addEventListener('change', theme)