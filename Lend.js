// ========== Welcome Messages ==========
const welcomeMessages = [
    'أهلاً وسهلاً في لند',
    'نورت لند',
    'حياك الله في لند',
    'يسعدنا وجودك في لند',
    'أهلاً بك في لند',
    'لند يسعد بزيارتك',
    'تفضل، لند في خدمتك',
    'مرحباً في لند'
];

// ========== State ==========
let welcomeShown = false;

// ========== Logo Animation ==========
window.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    const logoContainer = document.querySelector('.logo-container');

    if (logo && logoContainer) {
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
                }, 400);
            }, 1200);
        }, 200);
    }

    document.body.addEventListener('click', handleBodyInteraction);
    document.body.addEventListener('touchstart', handleBodyInteraction, { passive: true });
});

function handleBodyInteraction(e) {
    if (welcomeShown) return;
    if (e.target.classList.contains('option-btn')) return;

    welcomeShown = true;
    goToWelcome();
}

function goToWelcome() {
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.querySelector('.logo');

    if (!logoContainer || !logo) return;

    logo.style.width = '130px';
    logo.style.height = '130px';
    logoContainer.style.top = '100px';
    logoContainer.style.transform = 'translate(-50%, 0)';

    setTimeout(() => {
        showWelcomeMessage();
    }, 500);
}

function showWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    const randomMessage = welcomeMessages[randomIndex];

    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.innerHTML = `
        <h2 class="welcome-title">${randomMessage}</h2>
        <p class="welcome-text">ايش حاب تطلب اليوم؟</p>
        <div class="options-container">
            <button class="option-btn" id="coffeeBtn">قهوة</button>
            <button class="option-btn" id="dessertBtn">حلا</button>
        </div>
    `;

    document.body.appendChild(welcomeDiv);

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
}