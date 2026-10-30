# andreytrabl.online

Статический сайт артиста Андрея Трабла на GitHub Pages (ветка `main`, домен в `CNAME`).

## Структура
- `index.html` — главная (фоновое видео `assets/hero-video.mp4`, песни, клипы, студия, контакты)
- `assets/songs/*.html` — страницы песен/релизов, все на одном шаблоне
- `privacy.html`, `cookies.html` — юридические страницы
- `style.css` — общие стили сайта
- `assets/css/song.css`, `assets/js/song.js` — общие стили и скрипт страниц песен (вкладки, подвкладки треков, меню)
- `assets/js/consent.js` — cookie-баннер + Яндекс.Метрика (счётчик 111863861, грузится только после согласия)

## Правила для каждой страницы (в т.ч. новых)
- ОБЯЗАТЕЛЬНО подключать Метрику с баннером перед `</body>`:
  - в корне: `<script src="assets/js/consent.js"></script>`
  - в `assets/songs/`: `<script src="../../assets/js/consent.js"></script>`
- В подвале — ссылки на политику, cookie и кнопка `id="cookieSettingsBtn"` «Настройки cookie».
- Новая страница песни: копировать существующую из `assets/songs/` и менять только содержание. Стили — в `assets/css/song.css`, не инлайном.
- Внешние ссылки: `target="_blank" rel="noopener noreferrer"`.

## Медиа
- Обложки: `assets/covers/*.jpg`, 800×800, JPEG q85. Оригиналы большого размера в репозиторий не кладём.
- Видео: H.264 без звуковой дорожки, `-movflags +faststart`. Не использовать Git LFS — GitHub Pages его не отдаёт.
- Иконки: PNG 144×144.
