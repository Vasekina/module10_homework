/*Задание 2.
Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert. */

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const widthScreen = window.screen.width;
    const heightScreen = window.screen.height;
    alert('Ширина экрана: ' + widthScreen + '. Высота экрана: ' + heightScreen + '.');
});