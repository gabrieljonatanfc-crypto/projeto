// Obtém o botão e o elemento body
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já preferiu um tema (bom para persistência)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// 1. Função de Alternância de Tema
themeToggle.addEventListener('click', () => {
    // Alterna a classe 'light-mode' no body
    body.classList.toggle('light-mode');
    
    // Salva a preferência no armazenamento local
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light-mode');
        themeToggle.textContent = '🌙 Dark Mode'; // Muda o texto do botão
    } else {
        localStorage.removeItem('theme'); // Remove se voltar ao padrão (dark)
        themeToggle.textContent = '☀️ Light Mode'; // Muda o texto do botão
    }
});