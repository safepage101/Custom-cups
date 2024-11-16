// Quotes based on cupId 
const quotes = {
    1: "Success is built on small efforts, daily. Every step counts, no matter how small. Keep moving forward, and you'll reach your goals.",
    2: "Education is the key that unlocks the door to the future. Each lesson learned shapes who you will become. Embrace every challenge as a chance to grow.",
    3: "Mistakes are proof that you're trying. Don't fear failure; it teaches valuable lessons. Keep pushing yourself to learn and improve.",
    4: "Every day is a new opportunity to learn. Approach each subject with curiosity and passion. Your hard work today paves the way for tomorrow.",
    5: "Stay focused on your goals, even when it's tough. Perseverance is the bridge to success. Believe in your abilities, and keep striving.",
    6: "The journey of a thousand miles begins with one step. Start your day with determination and purpose. Your efforts will lead to great achievements.",
    7: "Dream big, but start small. Each small achievement builds your confidence. Celebrate your progress, no matter the size.",
    8: "Knowledge is power; embrace every opportunity to learn. Ask questions, seek help, and never stop exploring. The more you know, the further you'll go.",
    9: "Setbacks are setups for comebacks. When things get tough, remember why you started. Keep your head high, and push through the challenges.",
    10: "Collaboration can lead to amazing discoveries. Work together with your classmates to inspire each other. Together, you can achieve more than you ever imagined."
};

function getCupIdFromWallpaper(wallpaper) {
    const match = wallpaper.match(/\d+/);
    return match ? parseInt(match[0], 10) : null; 
}

const urlParams = new URLSearchParams(window.location.search);
const customer = urlParams.get('customer') || "Valued Customer"; 
const wallpaper = urlParams.get('wallpaper') || "Wallpaper1"; 

const cupId = getCupIdFromWallpaper(wallpaper);

document.addEventListener('DOMContentLoaded', function () {
    if (customer) {
        document.getElementById('greeting').innerText = `Thank you, ${customer}!`;
    }
    if (cupId) {
        setDynamicQuote(cupId);
    } else {
        document.getElementById('dynamicquote').innerText = "Stay motivated!";
    }
    
    document.getElementById('wallpaperImage').src = `images/${wallpaper}.jpg`;
    document.getElementById('wallpaperDownloadLink').href = `images/${wallpaper}.jpg`;

    document.getElementById('wallpaperDownloadLink').setAttribute('download', '12 - GATES.jpg');
});

function setDynamicQuote(cupId) {
    const selectedQuote = quotes[cupId] || "Unable to find the qoute(⁠╯⁠︵⁠╰⁠,⁠)"; 
    document.getElementById('dynamicquote').innerText = '"${selectedQuote}"';
}

let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const offset = -index * 100; 
    slides.style.transform = `translateX(${offset}%)`;

    const prevButton = document.querySelector('.prev-button');

    if (index === 0) {
        prevButton.style.visibility = 'hidden'; 
    } else {
        prevButton.style.visibility = 'visible'; 
    }
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides; 
    showSlide(slideIndex);
}

function prevSlide() {
    if (slideIndex > 0) {
        slideIndex = (slideIndex - 1) % totalSlides; 
    }
    showSlide(slideIndex);
}

showSlide(slideIndex);

let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;

    if (touchEndX < touchStartX) {
        nextSlide(); 
    } else if (touchEndX > touchStartX) {
        prevSlide(); 
    }
}

slides.addEventListener('touchstart', handleTouchStart);
slides.addEventListener('touchend', handleTouchEnd);
