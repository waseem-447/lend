// ========== Go Home ==========
function goHome() {
    window.location.href = 'index.html';
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