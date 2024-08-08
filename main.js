const arr = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

const li1 = document.getElementById('li1');
const li2 = document.getElementById('li2');
const li3 = document.getElementById('li3');
const li4 = document.getElementById('li4');
const li5 = document.getElementById('li5');
const li6 = document.getElementById('li6');
const li7 = document.getElementById('li7');

const topFilmsList = arr.map(item => item.top_rated_film);

const topFilmsListJoin = topFilmsList.join(', ');
const topFilms = document.getElementById('topFilms');
const paragraph = document.createElement('p');
paragraph.textContent = topFilmsListJoin;
topFilms.appendChild(paragraph);

const directorsList = arr.map(item => item.name);
const careersList = arr.map(item => item.career);
const filmsWorkList = arr.map(item => item.films);

directorsList.forEach((item, index) => {
    const paragraph = document.createElement("p");
    paragraph.classList.add('names');
    const strong = document.createElement("strong");
    strong.textContent = `${item}`;
    paragraph.appendChild(strong);
    if (index === 0) {
        li1.appendChild(paragraph);
    }
    if (index === 1) {
        li2.appendChild(paragraph);
    }
    if (index === 2) {
        li3.appendChild(paragraph);
    }
    if (index === 3) {
        li4.appendChild(paragraph);
    }
    if (index === 4) {
        li5.appendChild(paragraph);
    }
    if (index === 5) {
        li6.appendChild(paragraph);
    }
    if (index === 6) {
        li7.appendChild(paragraph);
    }
});

careersList.forEach((item, index) => {
    const paragraph = document.createElement("p");
    paragraph.classList.add('careers');
    paragraph.textContent = `${item}`;
    if (index === 0) {
        li1.appendChild(paragraph);
    }
    if (index === 1) {
        li2.appendChild(paragraph);
    }
    if (index === 2) {
        li3.appendChild(paragraph);
    }
    if (index === 3) {
        li4.appendChild(paragraph);
    }
    if (index === 4) {
        li5.appendChild(paragraph);
    }
    if (index === 5) {
        li6.appendChild(paragraph);
    }
    if (index === 6) {
        li7.appendChild(paragraph);
    }
});

filmsWorkList.forEach((item, index) => {
    const paragraph = document.createElement("p");
    paragraph.classList.add('films');
    const link = document.createElement('a');
    link.setAttribute('href', `${item}`);
    link.setAttribute('target', '_blank');
    link.textContent = "Фильмография";
    paragraph.appendChild(link);
    if (index === 0) {
        li1.appendChild(paragraph);
    }
    if (index === 1) {
        li2.appendChild(paragraph);
    }
    if (index === 2) {
        li3.appendChild(paragraph);
    }
    if (index === 3) {
        li4.appendChild(paragraph);
    }
    if (index === 4) {
        li5.appendChild(paragraph);
    }
    if (index === 5) {
        li6.appendChild(paragraph);
    }
    if (index === 6) {
        li7.appendChild(paragraph);
    }
});