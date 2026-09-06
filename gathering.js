// ========== Go Home ==========
function goHome() {
    window.location.href = 'index.html';
}

// ========== Flip Card ==========
function flipCard(card) {
    card.classList.toggle('flipped');
}

// ========== Inactivity Timer ==========
document.addEventListener('DOMContentLoaded', () => {
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