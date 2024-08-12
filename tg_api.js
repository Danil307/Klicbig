<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
    const tg = window.Telegram.WebApp;

    tg.expand(); // Расширяем приложение на весь экран

    // Можно также использовать данные пользователя или тему оформления Telegram
    console.log(tg.initDataUnsafe);

    // Обработка кликов и отправка данных обратно в Telegram
    function sendScore() {
        tg.sendData(JSON.stringify({ score: score }));
    }
    
    // Добавим вызов этой функции при покупке или клике
    // Например, в функции clickButton.addEventListener('click', ...);
}
</script>