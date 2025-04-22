const toggle = document.getElementById('themeToggle');

const applyTheme = (theme) => {
    if (theme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
};

toggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
});

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    applyTheme(savedTheme);
};