// Общий скрипт страниц песен: меню и треклист релизов с несколькими треками
const burger = document.getElementById('burgerBtn');
const nav = document.querySelector('.main-nav');
burger.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('open');
});
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        nav.classList.remove('open');
    });
});

// Переключение треков (кнопки .sub-tab-btn / панели .sub-tab-panel)
const subTabBtns = document.querySelectorAll('.sub-tab-btn');
const subTabPanels = document.querySelectorAll('.sub-tab-panel');
const releaseText = document.querySelector('.release-text');
subTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        subTabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const track = this.dataset.track;
        subTabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.track === track);
        });
        // если начало текста ушло выше экрана — вернуть к началу текста трека
        if (releaseText && releaseText.getBoundingClientRect().top < 80) {
            releaseText.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
