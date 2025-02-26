document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const wallpaper = document.getElementById('wallpaper');

    // Verificar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Verificar tema guardado o usar preferencia del sistema
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
    setTheme(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    });

    function setTheme(theme) {
        root.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);

        // Actualizar colores según el tema
        if (theme === 'light') {
            document.body.style.backgroundColor = '#F8FAFC';
            document.body.style.color = '#1E293B';
            wallpaper.style.opacity = '0.1';
        } else {
            document.body.style.backgroundColor = '#0F172A';
            document.body.style.color = '#F8FAFC';
            wallpaper.style.opacity = '0.2';
        }
    }
});