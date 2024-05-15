// Функція для відображення новин на сторінці
function displayNews(newsData) {
    const latestNews = document.querySelector('.latest-news');
    // Очищаємо існуючий контент перед додаванням нових новин
    latestNews.innerHTML = '';

    // Перебираємо кожен об'єкт у масиві новин і створюємо HTML елемент для кожної новини
    newsData.forEach(item => {
        const cardNews = document.createElement('div');
        cardNews.className = 'card-news';
        cardNews.innerHTML = `
            <h2 class="card-news__title">${item.title}</h2>
            <p class="card-news__description">${item.description}</p>
            <a class="card-news__link" href="${item.link}" target="_blank">Read More</a>
            <p class="card-news__date">${item.date}</p>
        `;
        latestNews.appendChild(cardNews);
    });
}

// Виконуємо запит до API за даними
fetch('https://2fa92a4d-e46b-45dc-bde8-65daf2211448.mock.pstmn.io')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        console.log("Data received from API:", data);
        displayNews(data); // Викликаємо функцію displayNews з даними з API
    })
    .catch(error => console.error('Error fetching data:', error));

// Налаштування функції displayNews як обробника події завантаження сторінки
window.onload = () => {
    // Тут можна виконати додатковий код після завантаження сторінки, якщо потрібно
    console.log("Page loaded and ready to display news.");
};