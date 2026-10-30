// Общий скрипт страниц песен: меню, вкладки СЛУШАТЬ/КЛИП/ТЕКСТ, подвкладки треков
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

// Основные вкладки СЛУШАТЬ / ТЕКСТ
const songTabBtns = document.querySelectorAll('.song-tab-btn');
const songTabPanels = document.querySelectorAll('.song-tab-panel');
songTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        songTabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const tab = this.dataset.tab;
        songTabPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.dataset.tab === tab) {
                panel.classList.add('active');
            }
        });
    });
});

// Подвкладки для треков внутри вкладки ТЕКСТ
const subTabBtns = document.querySelectorAll('.sub-tab-btn');
const subTabPanels = document.querySelectorAll('.sub-tab-panel');
subTabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        subTabBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        const track = this.dataset.track;
        subTabPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.dataset.track === track) {
                panel.classList.add('active');
            }
        });
    });
});
