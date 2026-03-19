document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const lottoNumbersContainer = document.querySelector('.lotto-numbers');
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? 'Light Mode' : 'Dark Mode';

    const getNumberColor = (number) => {
        if (number <= 10) return '#fbc400'; // Yellow
        if (number <= 20) return '#69c8f2'; // Blue
        if (number <= 30) return '#ff7272'; // Red
        if (number <= 40) return '#aaaaaa'; // Gray
        return '#b0d840'; // Green
    };

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeToggle.textContent = newTheme === 'dark' ? 'Light Mode' : 'Dark Mode';
    });

    generateBtn.addEventListener('click', () => {
        lottoNumbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const numberDiv = document.createElement('div');
                numberDiv.classList.add('number');
                numberDiv.textContent = number;
                numberDiv.style.backgroundColor = getNumberColor(number);
                lottoNumbersContainer.appendChild(numberDiv);
            }, index * 200); // Staggered animation
        });
    });
});
