// ========== Go Home ==========
function goHome() {
    window.location.href = 'index.html';
}

// ========== Language State ==========
let currentLang = localStorage.getItem('lendLang') || 'ar';

// ========== Language Toggle ==========
function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lendLang', currentLang);
    applyLanguage();
}

function applyLanguage() {
    const isAr = currentLang === 'ar';
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = isAr ? 'EN' : 'عربي';
    
    const backText = document.getElementById('backText');
    if (backText) backText.textContent = isAr ? 'الرئيسية' : 'Home';
    
    const hotTitle = document.getElementById('hotTitle');
    if (hotTitle) hotTitle.textContent = isAr ? 'المشروبات الساخنة' : 'Hot Drinks';
    
    const coldTitle = document.getElementById('coldTitle');
    if (coldTitle) coldTitle.textContent = isAr ? 'المشروبات الباردة' : 'Cold Drinks';
    
    const milkTitle = document.getElementById('milkTitle');
    const milkTitleCold = document.getElementById('milkTitleCold');
    if (milkTitle) milkTitle.textContent = isAr ? 'إضافة أنواع الحليب للمشروبات' : 'Milk Options';
    if (milkTitleCold) milkTitleCold.textContent = isAr ? 'إضافة أنواع الحليب للمشروبات' : 'Milk Options';
    
    const milk1 = document.getElementById('milk1');
    const milk2 = document.getElementById('milk2');
    const milk3 = document.getElementById('milk3');
    const milk1Cold = document.getElementById('milk1Cold');
    const milk2Cold = document.getElementById('milk2Cold');
    const milk3Cold = document.getElementById('milk3Cold');
    
    if (milk1) milk1.textContent = isAr ? 'حليب خالي من اللاكتوز' : 'Lactose-free milk';
    if (milk2) milk2.textContent = isAr ? 'حليب جوز الهند' : 'Coconut milk';
    if (milk3) milk3.textContent = isAr ? 'حليب اللوز' : 'Almond milk';
    if (milk1Cold) milk1Cold.textContent = isAr ? 'حليب خالي من اللاكتوز' : 'Lactose-free milk';
    if (milk2Cold) milk2Cold.textContent = isAr ? 'حليب جوز الهند' : 'Coconut milk';
    if (milk3Cold) milk3Cold.textContent = isAr ? 'حليب اللوز' : 'Almond milk';
    
    const drinksTitle = document.getElementById('drinksTitle');
    if (drinksTitle) drinksTitle.textContent = isAr ? 'مشروبات' : 'Drinks';
}

// ========== DOM Ready ==========
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
        langBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleLanguage();
        }, { passive: false });
    }

    // ========== Hot Accordion ==========
    const hotToggle = document.getElementById('hotToggle');
    const hotItems = document.getElementById('hotItems');
    const hotArrow = document.getElementById('hotArrow');

    if (hotToggle && hotItems && hotArrow) {
        hotToggle.addEventListener('click', () => {
            hotItems.classList.toggle('open');
            hotArrow.classList.toggle('open');
        });
    }

    // ========== Cold Accordion ==========
    const coldToggle = document.getElementById('coldToggle');
    const coldItems = document.getElementById('coldItems');
    const coldArrow = document.getElementById('coldArrow');

    if (coldToggle && coldItems && coldArrow) {
        coldToggle.addEventListener('click', () => {
            coldItems.classList.toggle('open');
            coldArrow.classList.toggle('open');
        });
    }

    // ========== Refreshments Accordion ==========
    const refreshmentsToggle = document.getElementById('refreshmentsToggle');
    const refreshmentsItems = document.getElementById('refreshmentsItems');
    const refreshmentsArrow = document.getElementById('refreshmentsArrow');

    if (refreshmentsToggle && refreshmentsItems && refreshmentsArrow) {
        refreshmentsToggle.addEventListener('click', () => {
            refreshmentsItems.classList.toggle('open');
            refreshmentsArrow.classList.toggle('open');
        });
    }

    // ========== Draggable Cups ==========
    initDraggableCup('fullPoster1', 'cup1');
    initDraggableCup('fullPoster2', 'cup2');
    initDraggableCup('fullPoster3', 'cup3');
    initDraggableCup('fullPoster4', 'cup4');
    initDraggableCup('fullPoster5', 'cup5');
    initDraggableCup('fullPoster6', 'cup6');
    initDraggableCup('fullPoster7', 'cup7');
    initDraggableCup('fullPoster8', 'cup8');
    initDraggableCup('fullPoster9', 'cup9');
    initDraggableCup('fullPoster10', 'cup10');
    initDraggableCup('fullPoster11', 'cup11');
    initDraggableCup('fullPoster12', 'cup12');
    initDraggableCup('fullPoster13', 'cup13');
    initDraggableCup('fullPoster14', 'cup14');
    initDraggableCup('fullPoster15', 'cup15');
    initDraggableCup('fullPoster16', 'cup16');
    initDraggableCup('fullPoster17', 'cup17');
    initDraggableCup('fullPoster18', 'cup18');

    // ========== Inactivity Timer ==========
    let inactivityTimer;

    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            window.location.href = 'index.html';
        }, 60000);
    }

    const interactionEvents = [
        'click',
        'touchstart',
        'touchmove',
        'touchend',
        'mousedown',
        'mousemove',
        'keydown',
        'scroll'
    ];

    interactionEvents.forEach(event => {
        document.addEventListener(event, resetInactivityTimer, { passive: true });
    });

    resetInactivityTimer();
});

// ========== Open Poster ==========
function openPoster(posterId) {
    const overlay = document.getElementById('posterOverlay');
    const poster = document.getElementById(posterId);
    
    document.querySelectorAll('.poster-full').forEach(p => {
        p.style.display = 'none';
    });
    
    poster.style.display = 'block';
    overlay.classList.add('active');
}

// ========== Close Poster ==========
function closePoster(event) {
    if (event.target === event.currentTarget || event.target.classList.contains('close-btn')) {
        const overlay = document.getElementById('posterOverlay');
        overlay.classList.remove('active');
    }
}

// ========== Draggable Cup Function ==========
function initDraggableCup(posterId, cupId) {
    const poster = document.getElementById(posterId);
    const cup = document.getElementById(cupId);

    if (!poster || !cup) return;

    let isDragging = false;
    let startX, startY;
    let baseX = 0;
    let baseY = 0;
    let currentX = 0;
    let currentY = 0;
    let posterWidth, posterHeight, cupWidth, cupHeight;

    function updateDimensions() {
        posterWidth = poster.offsetWidth;
        posterHeight = poster.offsetHeight;
        cupWidth = cup.offsetWidth;
        cupHeight = cup.offsetHeight;
    }

    function getBoundaries() {
        const maxX = (posterWidth - cupWidth) / 2;
        const maxY = (posterHeight - cupHeight) / 2;
        return { maxX, maxY };
    }

    function clampPosition(x, y) {
        const { maxX, maxY } = getBoundaries();
        return {
            x: Math.max(-maxX, Math.min(maxX, x)),
            y: Math.max(-maxY, Math.min(maxY, y))
        };
    }

    function updateCupPosition(x, y) {
        const clamped = clampPosition(x, y);
        cup.style.transform = `translate(-50%, -50%) translate(${clamped.x}px, ${clamped.y}px) rotate(-6deg)`;
    }

    function startDrag(e) {
        e.preventDefault();
        isDragging = true;
        cup.classList.add('dragging');
        updateDimensions();

        const touch = e.touches ? e.touches[0] : e;
        startX = touch.clientX;
        startY = touch.clientY;

        const cupRect = cup.getBoundingClientRect();
        const posterRect = poster.getBoundingClientRect();

        baseX = cupRect.left - posterRect.left + cupWidth / 2 - posterWidth / 2;
        baseY = cupRect.top - posterRect.top + cupHeight / 2 - posterHeight / 2;
    }

    function moveDrag(e) {
        if (!isDragging) return;
        e.preventDefault();

        const touch = e.touches ? e.touches[0] : e;
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;

        currentX = baseX + deltaX;
        currentY = baseY + deltaY;

        updateCupPosition(currentX, currentY);
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        cup.classList.remove('dragging');
    }

    poster.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('mouseup', endDrag);

    poster.addEventListener('touchstart', startDrag, { passive: false });
    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('touchend', endDrag);
}