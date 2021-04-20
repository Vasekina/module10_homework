const btn = document.querySelector('.btn');
const messageChat = document.querySelector('.message');
const container = document.querySelector('.container');
const geoBtn = document.querySelector('.geo');


function writeToScreen(message, classCss) {
    let p = document.createElement("p");
    p.style.wordWrap = 'break-word';
    p.innerHTML = message;
    p.classList.add('message');
    p.classList.add(classCss);
    container.appendChild(p);   
}

//websocket
const url = 'wss://echo.websocket.org/';
let websocket = new WebSocket(url);

websocket.onopen = function (evt)  {
    writeToScreen('Можно начинать чатиться');
}

websocket.onclose = function (evt) {
    console.log('DISCONNECTED');
}
websocket.onmessage = function (evt) {
    writeToScreen(evt.data);  
}

websocket.onerror = function (evt) {
    writeToScreen('Ошибка соединения, перезагрузи страницу!');
}

btn.addEventListener('click', () => {
    const textMessage = messageChat.value;
    writeToScreen(textMessage, 'from-client');
    websocket.send(textMessage)
    messageChat.value = '';
})

//геолокация
const error = () => {
    status.textContent = 'Невозможно получить ваше местоположение';
    ;
}

const success = (position) => {
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
let geoMessage = `<a href='https://www.openstreetmap.org/#map=18/${latitude}/${longitude}' target='_blank'>Ссылка на ваше местоположение</a>`;
writeToScreen(geoMessage);
}

geoBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        status.textContent = 'Геолокация не поддерживается вашим браузером';
        writeToScreen(status.textContent);
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
        
    }
});




