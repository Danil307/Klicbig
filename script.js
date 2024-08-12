let score = 0;
let multiplier = 1;

const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('click-button');
const shopItems = document.querySelectorAll('.shop-item');

// Функция для обновления отображаемого счёта
function updateScore() {
    scoreDisplay.textContent = score;
}

// Событие клика на кнопку
clickButton.addEventListener('click', () => {
    score += multiplier;
    updateScore();
});

// Событие покупки предмета в магазине
shopItems.forEach(item => {
    item.addEventListener('click', () => {
        const cost = parseInt(item.getAttribute('data-cost'));
        const itemMultiplier = parseInt(item.getAttribute('data-multiplier'));

        if (score >= cost) {
            score -= cost;
            multiplier += itemMultiplier;
            updateScore();
            item.disabled = true; // Отключаем кнопку после покупки
        }
    });
});