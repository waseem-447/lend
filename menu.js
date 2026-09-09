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
    
    // زر اللغة
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.textContent = isAr ? 'EN' : 'عربي';
    
    // زر العودة
    const backText = document.getElementById('backText');
    if (backText) backText.textContent = isAr ? 'الرئيسية' : 'Home';
    
    // الساخنة
    const hotTitle = document.getElementById('hotTitle');
    if (hotTitle) hotTitle.textContent = isAr ? 'المشروبات الساخنة' : 'Hot Drinks';
    
    // الباردة
    const coldTitle = document.getElementById('coldTitle');
    if (coldTitle) coldTitle.textContent = isAr ? 'المشروبات الباردة' : 'Cold Drinks';
    
    // الحليب
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
    
    // المشروبات
    const drinksTitle = document.getElementById('drinksTitle');
    if (drinksTitle) drinksTitle.textContent = isAr ? 'مشروبات' : 'Drinks';
}

// ========== Accordion Toggle ==========
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
    
    const hotToggle = document.getElementById('hotToggle');
    const hotItems = document.getElementById('hotItems');
    const hotArrow = document.getElementById('hotArrow');

    hotToggle.addEventListener('click', () => {
        hotItems.classList.toggle('open');
        hotArrow.classList.toggle('open');
    });

    const coldToggle = document.getElementById('coldToggle');
    const coldItems = document.getElementById('coldItems');
    const coldArrow = document.getElementById('coldArrow');

    coldToggle.addEventListener('click', () => {
        coldItems.classList.toggle('open');
        coldArrow.classList.toggle('open');
    });

    const refreshmentsToggle = document.getElementById('refreshmentsToggle');
    const refreshmentsItems = document.getElementById('refreshmentsItems');
    const refreshmentsArrow = document.getElementById('refreshmentsArrow');

    if (refreshmentsToggle) {
        refreshmentsToggle.addEventListener('click', () => {
            refreshmentsItems.classList.toggle('open');
            refreshmentsArrow.classList.toggle('open');
        });
    }

    // ========== Draggable Cups ==========
    // ... نفس الكود

    // ========== Inactivity Timer ==========
    // ... نفس الكود
});