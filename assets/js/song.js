// Общий скрипт страниц песен: переключение треков у релизов с несколькими треками
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
