# andreytrabl.online

Статический сайт артиста Андрея Трабла на GitHub Pages (ветка `main`, домен в `CNAME`).

## Структура
- `index.html` — главная (фоновое видео `assets/hero-video.mp4`, песни, клипы, студия, контакты)
- `assets/songs/*.html` — страницы песен/релизов, все на одном шаблоне
- `privacy.html`, `cookies.html` — юридические страницы
- `style.css` — общие стили сайта
- `assets/css/song.css`, `assets/js/song.js` — общие стили и скрипт страниц песен (меню, переключение треков)
- `assets/js/consent.js` — cookie-баннер + Яндекс.Метрика (счётчик 111863861, грузится только после согласия)

## Правила для каждой страницы (в т.ч. новых)
- ОБЯЗАТЕЛЬНО подключать Метрику с баннером перед `</body>`:
  - в корне: `<script src="assets/js/consent.js"></script>`
  - в `assets/songs/`: `<script src="../../assets/js/consent.js"></script>`
- В подвале — ссылки на политику, cookie и кнопка `id="cookieSettingsBtn"` «Настройки cookie».
- Новая страница песни: копировать существующую из `assets/songs/` и менять только содержание. Стили — в `assets/css/song.css`, не инлайном.
  - Страница песни — без вкладок, всё друг под другом внутри `<div class="release">`: `.song-detail` (обложка, артист, название, стриминги) → при наличии `.release-clip` (клип) → `.release-text` (кредиты + текст).
  - Релиз из нескольких треков (пример: `dtl.html`): `<div class="release release--multi">`, между `.song-detail` и `.release-text` — `<nav class="sub-tabs">` с кнопками `.sub-tab-btn[data-track]`, тексты в `.sub-tab-panel[data-track]`. На ПК это треклист слева, на мобильных — кнопки над текстом.
  - Текст песни внутри `.song-lyrics <p>` выводится с `white-space: pre-wrap` — не менять отступы строк.
  - Навигация на странице песни — только одна кнопка в шапке: `<a href="../../index.html" class="home-link">← На главную</a>`. Без меню, бургера, крестика и кнопки «Назад».
  - Все кредиты (включая клип: съёмка, монтаж) — в одном блоке `.track-credits` в `.release-text`, отдельных кредитов под клипом нет.
- Фоновое видео — ТОЛЬКО на главной. На страницах песен его нет.
- Внешние ссылки: `target="_blank" rel="noopener noreferrer"`.

## Медиа
- Обложки: `assets/covers/*.jpg`, 800×800, JPEG q85. Оригиналы большого размера в репозиторий не кладём.
- Видео: H.264 без звуковой дорожки, `-movflags +faststart`. Не использовать Git LFS — GitHub Pages его не отдаёт.
- Иконки: PNG 144×144.
