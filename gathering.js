// ========== Go Home ==========
function goHome() {
    window.location.href = 'index.html';
}

// ========== Flip Cards ==========
document.addEventListener('DOMContentLoaded', () => {
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

    // ========== Back Button (Touch Support) ==========
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('touchend', (e) => {
            e.preventDefault();
            e.stopPropagation();
            goHome();
        }, { passive: false });
        
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            goHome();
        });
    }

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