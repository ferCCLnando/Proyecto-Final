const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Verifica si ya existe un tema guardado en localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';
} else {
    body.classList.remove('dark-mode');
    themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';
}

// Cambia el tema al hacer clic en el botón
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleButton.innerHTML = '<i class="fas fa-sun"></i>';  // Cambia el ícono a sol
        localStorage.setItem('theme', 'dark');  // Guarda la preferencia del tema
    } else {
        themeToggleButton.innerHTML = '<i class="fas fa-moon"></i>';  // Cambia el ícono a luna
        localStorage.removeItem('theme');  // Elimina la preferencia del tema
    }
});
