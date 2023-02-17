export function darkMode() {
  const root = document.querySelector('html');
  const darkbtn = document.querySelector('#dark-mode');

  function toggleDarkMode() {
    root.classList.toggle('dark');
  }

  darkbtn.addEventListener('click', toggleDarkMode);
}
