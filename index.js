let basket = document.getElementById('basket');
let fallingObject = document.getElementById('fallingObject');
let scoreElement = document.getElementById('score');

let score = 0;
let basketPosition = 250;
let fallingSpeed = 2;
let fallingPosition = -40;

// Управление корзиной с помощью клавиш стрелок
document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowLeft' && basketPosition > 0) {
        basketPosition -= 15;
    } else if (event.code === 'ArrowRight' && basketPosition < 500) {
        basketPosition += 15;
    }
    basket.style.left = basketPosition + 'px';
});

// Анимация падающего объекта
function fall() {
    fallingPosition += fallingSpeed;
    fallingObject.style.top = fallingPosition + 'px';

    // Проверка на столкновение с корзиной
    if (fallingPosition > 560 && fallingPosition < 600 &&
        fallingObject.offsetLeft + 40 > basketPosition &&
        fallingObject.offsetLeft < basketPosition + 100) {
        score++;
        scoreElement.textContent = score;
        resetObject();
    }

    // Сброс объекта, если он не пойман
    if (fallingPosition > 600) {
        resetObject();
    }

    requestAnimationFrame(fall);
}

// Перезапуск объекта
function resetObject() {
    fallingPosition = -40;
    fallingObject.style.left = Math.floor(Math.random() * 560) + 'px';
}

// Начало анимации
resetObject();
fall();
