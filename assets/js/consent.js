// Cookie-баннер + Яндекс.Метрика (загружается только после согласия).
// Подключать на КАЖДОЙ странице сайта перед </body>:
//   корень:            <script src="assets/js/consent.js"></script>
//   assets/songs/*:    <script src="../../assets/js/consent.js"></script>
(function () {
    var YM_ID = 111863861;
    var CONSENT_KEY = 'cookieConsent'; // 'accepted' | 'declined'

    // Корень сайта вычисляется от адреса этого файла (assets/js/consent.js)
    var me = document.currentScript;
    var ROOT = me ? new URL('../../', me.src).href : '/';

    function loadYandexMetrika() {
        if (window.__ymLoaded) return;
        window.__ymLoaded = true;

        (function (m, e, t, r, i, k, a) {
            m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
            m[i].l = 1 * new Date();
            for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
            k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
        })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=' + YM_ID, 'ym');

        window.ym(YM_ID, 'init', {
            ssr: true,
            webvisor: true,
            clickmap: true,
            ecommerce: 'dataLayer',
            referrer: document.referrer,
            url: location.href,
            accurateTrackBounce: true,
            trackLinks: true
        });
    }

    function getConsent() {
        try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
    }
    function setConsent(value) {
        try { localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* хранилище недоступно — баннер будет показываться повторно */ }
    }

    var banner = document.getElementById('cookieBanner');
    if (!banner) {
        banner = document.createElement('div');
        banner.className = 'cookie-banner';
        banner.id = 'cookieBanner';
        banner.setAttribute('role', 'dialog');
        banner.setAttribute('aria-live', 'polite');
        banner.setAttribute('aria-label', 'Уведомление об использовании cookie');
        banner.innerHTML =
            '<div class="cookie-banner-inner container">' +
                '<p class="cookie-banner-text">' +
                    'Мы используем файлы cookie и сервис аналитики «Яндекс.Метрика» для улучшения работы сайта и анализа посещаемости. ' +
                    'Счётчик аналитики включается только после вашего согласия. Подробнее — в ' +
                    '<a href="' + ROOT + 'privacy.html" class="cookie-banner-link">Политике конфиденциальности</a> и ' +
                    '<a href="' + ROOT + 'cookies.html" class="cookie-banner-link">Политике использования cookie</a>.' +
                '</p>' +
                '<div class="cookie-banner-actions">' +
                    '<button type="button" class="cookie-btn cookie-btn-decline" id="cookieDecline">Отклонить</button>' +
                    '<button type="button" class="cookie-btn cookie-btn-accept" id="cookieAccept">Принять</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(banner);
    }

    function showBanner() { banner.classList.add('is-visible'); }
    function hideBanner() { banner.classList.remove('is-visible'); }

    var consent = getConsent();
    if (consent === 'accepted') {
        loadYandexMetrika();
    } else if (consent !== 'declined') {
        // небольшая задержка, чтобы сработала анимация появления
        requestAnimationFrame(function () { requestAnimationFrame(showBanner); });
    }

    document.getElementById('cookieAccept').addEventListener('click', function () {
        setConsent('accepted');
        hideBanner();
        loadYandexMetrika();
    });
    document.getElementById('cookieDecline').addEventListener('click', function () {
        setConsent('declined');
        hideBanner();
    });

    var settingsBtn = document.getElementById('cookieSettingsBtn');
    if (settingsBtn) settingsBtn.addEventListener('click', showBanner);
})();
