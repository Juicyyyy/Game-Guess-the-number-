// Генерация случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let attempts = 0; // кол-во попыток

let minRange = parseInt(document.getElementById('minRange').value);
let maxRange = parseInt(document.getElementById('maxRange').value);


// функция для определения диапазона и случайного числа
function setNewRange() {
    minRange = parseInt(document.getElementById('minRange').value);
    maxRange = parseInt(document.getElementById('maxRange').value);
    targetNumber = getRandomNumber(minRange, maxRange);
    attempts = 0;
    attemptsElement.textContent = attempts;
    messageElement.textContent = '';
    hintElement.textContent = '';
    guessInput.value = '';
    minElement.textContent = minRange;
    maxElement.textContent = maxRange;
}

document.getElementById('setRange').addEventListener('click', setNewRange); // слушатель для отправки диапазона

const minElement = document.getElementById('min');
const maxElement = document.getElementById('max');
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const messageElement = document.getElementById('message');
const hintElement = document.getElementById('hint');
const attemptsElement = document.getElementById('attempts');
const resetButton = document.getElementById('reset');

submitButton.addEventListener('click', function () { // слушатель для отправки попытки
    const guess = parseInt(guessInput.value);
    if (guess < minRange || guess > maxRange || isNaN(guess)) { // если число выходит из диапазона
        messageElement.textContent = 'Введите число в заданном диапазоне!';
    } else {
        attempts++; 
        attemptsElement.textContent = attempts;
        if (guess === targetNumber) { // если число совпадает 
            messageElement.textContent = `Поздравляем! Вы угадали число ${targetNumber}`;
        } else {
            if (guess < targetNumber) { // если введенное число меньше
                messageElement.textContent = 'Загаданное число больше';
            } else { // если введенное число больше
                messageElement.textContent = 'Загаданное число меньше';
            }
            if (attempts % 3 === 0) { // если кол-во попыток кратно 3
                hintElement.textContent = `Подсказка: Загаданное число ${targetNumber % 2 === 0 ? 'четное' : 'нечетное'}`;
            }
        }
    }
});

// запустить игру заново
resetButton.addEventListener('click', function () {
    targetNumber = getRandomNumber(minRange, maxRange);
    attempts = 0;
    attemptsElement.textContent = attempts;
    messageElement.textContent = '';
    hintElement.textContent = '';
    guessInput.value = '';
});