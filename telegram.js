// Telegram API конфигурация
const TOKEN = '7303371876:AAE3Sx_EK9QkPj0BjDnvbWxv1Ag5cQwlKY8';  // Укажите токен вашего бота
const CHAT_ID = '1271362249';  // Укажите ваш chat_id
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// Обработчик формы
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Получаем значения из формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Формируем текст сообщения
    const text = `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`;

    // Отправка данных в Telegram
    fetch(URI_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert('Сообщение успешно отправлено!');
            document.getElementById('contactForm').reset();
        } else {
            console.error('Ошибка при отправке:', data);
            alert('Ошибка при отправке сообщения. Проверьте токен и chat_id.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке сообщения. Проверьте соединение и токен.');
    });
});
