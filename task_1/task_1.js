/*Задание 1.
Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). 
При клике на кнопку иконка должна меняться на icon_02. Повторный клик меняет иконку обратно.
*/
const btn = document.querySelector('button');
const icon1 = document.querySelector('.icon1');
const icon2 = document.querySelector('.icon2');

btn.addEventListener('click', function () {
    icon1. classList.toggle('remove-icon');  
    icon2.classList.toggle('remove-icon');  
});