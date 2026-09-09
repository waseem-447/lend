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
let welcomeShown = false;
let currentLang = localStorage.getItem('lendLang') || 'ar';

// ========== Click / Touch ==========
window.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', handleBodyInteraction);
    document.body.addEventListener('touchstart', handleBodyInteraction, { passive: true });
});

function handleBodyInteraction(e) {
    if (welcomeShown) return;
    if (e.target.classList.contains('option-btn')) return;
    if (e.target.classList.contains('lang-btn')) return;

    welcomeShown = true;
    goToWelcome();
}

function goToWelcome() {
    const posterWrapper = document.getElementById('posterWrapper');
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.querySelector('.logo');

    if (!posterWrapper || !logoContainer || !logo) return;

    posterWrapper.style.opacity = '0';
    posterWrapper.style.transition = 'opacity 0.8s ease';

    logoContainer.style.opacity = '1';

    logo.style.opacity = '0';
    logo.style.transform = 'scale(0.3) rotate(-15deg)';
    logo.style.filter = 'blur(12px)';
    logo.style.transition = 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1)';

    setTimeout(() => {
        logo.style.opacity = '1';
        logo.style.transform = 'scale(1) rotate(0deg)';
        logo.style.filter = 'blur(0)';

        setTimeout(() => {
            logo.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            logo.style.transform = 'scale(0.95)';

            setTimeout(() => {
                logo.style.transform = 'scale(1)';

                setTimeout(() => {
                    const isMobile = window.innerWidth <= 480;
                    const isTablet = window.innerWidth > 480 && window.innerWidth <= 768;
                    
                    let logoSize = '130px';
                    let topPosition = '100px';
                    
                    if (isMobile) {
                        logoSize = '45px';
                        topPosition = '8px';
                    } else if (isTablet) {
                        logoSize = '80px';
                        topPosition = '50px';
                    }
                    
                    logo.style.width = logoSize;
                    logo.style.height = logoSize;
                    logoContainer.style.top = topPosition;
                    logoContainer.style.transform = 'translate(-50%, 0)';

                    setTimeout(() => {
                        showWelcomeMessage();
                    }, 500);
                }, 500);
            }, 400);
        }, 1200);
    }, 200);
}

function showWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * welcomeMessagesAR.length);
    const randomMessage = currentLang === 'ar' ? welcomeMessagesAR[randomIndex] : welcomeMessagesEN[randomIndex];
    
    const dessertText = currentLang === 'ar' ? 'الحلويات' : 'Desserts';
    const coffeeText = currentLang === 'ar' ? 'القهوة' : 'Coffee';
    const gatheringText = currentLang === 'ar' ? 'الجمعات' : 'Gathering';
    const welcomeText = currentLang === 'ar' ? 'ايش حاب تطلب اليوم؟' : 'What would you like today?';
    const preOrderMsg = currentLang === 'ar' ? 'لا تنتظر — اطلب وأنت بالطريق' : 'Don\'t wait — order on your way';
    const langBtnText = currentLang === 'ar' ? 'EN' : 'عربي';

    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.innerHTML = `
        <h2 class="welcome-title">${randomMessage}</h2>
        <p class="welcome-text">${welcomeText}</p>
        <div class="options-container">
            <button class="option-btn" id="dessertBtn">${dessertText}</button>
            <button class="option-btn" id="coffeeBtn">${coffeeText}</button>
            <button class="option-btn option-btn-full" id="gatheringBtn">${gatheringText}</button>
        </div>
        <p class="pre-order-text">${preOrderMsg}</p>
        <a href="tel:0566040575" class="contact-btn">
            <span class="contact-number">0566040575</span>
        </a>
    `;

    document.body.appendChild(welcomeDiv);

    const langBtn = document.createElement('button');
    langBtn.className = 'option-btn lang-btn';
    langBtn.textContent = langBtnText;
    document.body.appendChild(langBtn);

    requestAnimationFrame(() => {
        welcomeDiv.style.opacity = '1';
    });

    welcomeDiv.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    welcomeDiv.addEventListener('touchstart', (e) => {
        e.stopPropagation();
    }, { passive: true });

    const coffeeBtn = document.getElementById('coffeeBtn');
    const dessertBtn = document.getElementById('dessertBtn');
    const gatheringBtn = document.getElementById('gatheringBtn');

    coffeeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = 'menu.html';
    });

    coffeeBtn.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = 'menu.html';
    }, { passive: false });

    dessertBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = 'dessert.html';
    });

    dessertBtn.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = 'dessert.html';
    }, { passive: false });

    gatheringBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = 'gathering.html';
    });

    gatheringBtn.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.href = 'gathering.html';
    }, { passive: false });

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lendLang', currentLang);
        
        welcomeDiv.remove();
        langBtn.remove();
        showWelcomeMessage();
    });

    langBtn.addEventListener('touchstart', (e) => {
        e.stopPropagation();
        e.preventDefault();
        currentLang = currentLang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('lendLang', currentLang);
        
        welcomeDiv.remove();
        langBtn.remove();
        showWelcomeMessage();
    }, { passive: false });
}