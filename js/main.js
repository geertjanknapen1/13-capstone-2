document.addEventListener('DOMContentLoaded', function () {
    const htmlElement = document.documentElement;
    const navbar = document.getElementById('navbar');
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    toggleButton.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        let currentTheme = htmlElement.getAttribute('data-bs-theme');
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';
        let currentColor = currentTheme === 'light' ? 'text-white' : 'text-dark';
        let newColor = currentColor === 'text-white' ? 'text-dark' : 'text-white';
        let oldIcon = currentTheme === 'light' ? 'fa-moon' : 'fa-sun';
        let newIcon = oldIcon === 'fa-moon' ? 'fa-sun' : 'fa-moon';

        navbar.classList.remove(`bg-${newTheme}`);
        navbar.classList.remove(currentColor);
        navbar.classList.add(newColor);
        navbar.classList.add(`bg-${currentTheme}`);
        themeIcon.classList.remove(oldIcon);
        themeIcon.classList.add(newIcon);
        
        htmlElement.setAttribute('data-bs-theme', newTheme);
    });
});
