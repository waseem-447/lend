// ========== Welcome Messages ==========
const welcomeMessagesAR = [
    'أهلاً وسهلاً في لند',
    'نورت لند',
    'حياك الله في لند',
    'يسعدنا وجودك في لند',
    'أهلاً بك في لند',
    'لند يسعد بزيارتك',
    'تفضل، لند في خدمتك',
    'مرحباً في لند'
];

const welcomeMessagesEN = [
    'Welcome to Lend',
    'Glad you are here',
    'Welcome in',
    'Happy to see you',
    'Welcome to Lend',
    'Lend is happy to serve you',
    'Come on in',
    'Hello at Lend'
];

// ========== State ==========
let currentLang = localStorage.getItem('lendLang') || 'ar';
let posterDismissed = false;

// ========== Language ==========
function applyLanguage() {
    const isAr = currentLang === 'ar';
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = isAr ? 'EN' : 'عربي';

    const welcomeTitle = document.getElementById('welcomeTitle');
    const welcomeText = document.getElementById('welcomeText');
    const preOrderText = document.getElementById('preOrderText');
    const hotTitle = document.getElementById('hotTitle');
    const coldTitle = document.getElementById('coldTitle');
    const drinksTitle = document.getElementById('drinksTitle');
    const dessertsTitle = document.getElementById('dessertsTitle');
    const gatheringTitle = document.getElementById('gatheringTitle');
    const milkTitle = document.getElementById('milkTitle');
    const milkTitleCold = document.getElementById('milkTitleCold');
    const footerAr = document.getElementById('footerAr');
    const footerEn = document.getElementById('footerEn');

    const randomIndex = Math.floor(Math.random() * welcomeMessagesAR.length);
    if (welcomeTitle) welcomeTitle.textContent = isAr ? welcomeMessagesAR[randomIndex] : welcomeMessagesEN[randomIndex];
    if (welcomeText) welcomeText.textContent = isAr ? 'ايش حاب تطلب اليوم؟' : 'What would you like today?';
    if (preOrderText) preOrderText.textContent = isAr ? 'لا تنتظر — اطلب وأنت بالطريق' : 'Don\'t wait — order on your way';
    if (hotTitle) hotTitle.textContent = isAr ? 'المشروبات الساخنة' : 'Hot Drinks';
    if (coldTitle) coldTitle.textContent = isAr ? 'المشروبات الباردة' : 'Cold Drinks';
    if (drinksTitle) drinksTitle.textContent = isAr ? 'مشروبات' : 'Drinks';
    if (dessertsTitle) dessertsTitle.textContent = isAr ? 'الحلويات' : 'Desserts';
    if (gatheringTitle) gatheringTitle.textContent = isAr ? 'الجمعات' : 'Gathering';
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

    if (footerAr) footerAr.style.display = isAr ? 'block' : 'none';
    if (footerEn) footerEn.style.display = isAr ? 'none' : 'block';
}

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    localStorage.setItem('lendLang', currentLang);
    applyLanguage();
}

// ========== Poster Click ==========
document.addEventListener('DOMContentLoaded', () => {
    const posterWrapper = document.getElementById('posterWrapper');
    const logoContainer = document.getElementById('logoContainer');
    const mainContent = document.getElementById('mainContent');
    const langBtn = document.getElementById('langBtn');

    if (posterWrapper) {
        posterWrapper.addEventListener('click', revealContent);
        posterWrapper.addEventListener('touchstart', (e) => {
            e.preventDefault();
            revealContent();
        }, { passive: false });
    }

    function revealContent() {
        if (posterDismissed) return;
        posterDismissed = true;

        posterWrapper.style.opacity = '0';
        setTimeout(() => {
            posterWrapper.style.display = 'none';
        }, 800);

        logoContainer.style.opacity = '1';

        mainContent.style.display = 'block';
        if (langBtn) langBtn.style.display = 'block';

        applyLanguage();

        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);

        initFlipCards();
        initDraggableCups();
        initInactivityTimer();
    }

    if (langBtn) {
        langBtn.addEventListener('click', toggleLanguage);
        langBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            toggleLanguage();
        }, { passive: false });
    }
});

// ========== Flip Cards ==========
function initFlipCards() {
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        let justTouched = false;
        
        function doFlip(e) {
            e.preventDefault();
            e.stopPropagation();
            card.classList.toggle('flipped');
        }
        
        card.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            justTouched = true;
            doFlip(e);
            
            setTimeout(() => {
                justTouched = false;
            }, 500);
        }, { passive: false });
        
        card.addEventListener('click', (e) => {
            if (justTouched) return;
            e.preventDefault();
            e.stopPropagation();
            doFlip(e);
        });
    });
}

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

// ========== Draggable Cups ==========
function initDraggableCups() {
    // Hot drinks
    initDraggableCup('fullPoster1', 'cup1');
    initDraggableCup('fullPoster2', 'cup2');
    initDraggableCup('fullPoster3', 'cup3');
    initDraggableCup('fullPoster4', 'cup4');
    initDraggableCup('fullPoster5', 'cup5');
    initDraggableCup('fullPoster6', 'cup6');
    initDraggableCup('fullPoster7', 'cup7');
    initDraggableCup('fullPoster8', 'cup8');
    initDraggableCup('fullPosterA', 'cupA');
    initDraggableCup('fullPosterSPL', 'cupSPL');
    initDraggableCup('fullPosterMI', 'cupMI');
    
    // Cold drinks
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
    initDraggableCup('fullPosterIA', 'cupIA');
}

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

// ========== Inactivity Timer ==========
function initInactivityTimer() {
    let inactivityTimer;

    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            location.reload();
        }, 60000);
    }

    const events = ['click', 'touchstart', 'touchmove', 'touchend', 'mousemove', 'keydown', 'scroll'];
    events.forEach(event => {
        document.addEventListener(event, resetInactivityTimer, { passive: true });
    });

    resetInactivityTimer();
}