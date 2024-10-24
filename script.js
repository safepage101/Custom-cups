// Quotes based on cupId 
const quotes = {
    1: "Hey! Remember, every step you take, no matter how small, is progress. Keep moving forward, and don’t underestimate your power to create change.",
    2: "You are capable of so much more than you realize. Trust yourself, embrace your uniqueness, and let your light shine brightly.",
    3: "Challenges are simply stepping stones to success. Embrace them, learn from them, and keep pushing through. You’re on the path to greatness!",
    4: "Every setback is a setup for a comeback. Stay resilient, keep your head up, and know that brighter days are ahead.",
    5: "Your dreams are valid, and your efforts matter. Keep believing in yourself, and don’t let anyone dim your passion.",
    6: "You have the strength to overcome obstacles and the courage to chase your dreams. Don’t stop believing in yourself—you’re doing amazing!",
    7: "Life is a journey filled with ups and downs. Embrace each moment, and know that every experience is shaping you into a stronger person.",
    8: "You have the power to change your narrative. Don’t let fear hold you back; take bold steps towards your dreams. You are capable of greatness!",
    9: "Trust the process and have faith in your journey. Each day is a new opportunity to learn, grow, and shine. Keep pushing forward!",
    10: "Remember, it’s okay to ask for help. You don’t have to do this alone. Surround yourself with people who uplift and inspire you.",
    11: "Believe in your abilities and never underestimate the impact you can have. Your passion and determination can change the world!",
    12: "Don’t compare your journey to others. Everyone has their own path, and your progress is just as important. Focus on your growth!",
    13: "You are stronger than you think and braver than you believe. Embrace your challenges—they are the stepping stones to your success.",
    14: "Stay positive, even in tough times. Your mindset can transform challenges into opportunities. Keep your head held high!",
    15: "Your potential is limitless. Don’t be afraid to dream big and take risks. The only limits are the ones you place on yourself.",
    16: "Keep pushing through the tough days. They are temporary, but your strength and determination will last a lifetime.",
    17: "Remember, every expert was once a beginner. Embrace the learning process, and don’t be afraid to take that first step!",
    18: "Your journey may be challenging, but it’s also beautiful. Cherish the moments, learn from them, and keep striving for your goals.",
    19: "You are a work in progress, and that’s perfectly okay. Embrace your growth, and be proud of how far you’ve come.",
    20: "The world needs your unique gifts and talents. Don’t hold back—share them with confidence, and watch the positive impact you can make!"
};

// Function to extract the cupId from the wallpaper parameter
function getCupIdFromWallpaper(wallpaper) {
    // Use a regular expression to extract the numeric part after 'Wallpaper'
    const match = wallpaper.match(/\d+/);
    return match ? parseInt(match[0], 10) : null; // Return the number part or null if not found
}

// URL Parameters for Dynamic Content
const urlParams = new URLSearchParams(window.location.search);
const customer = urlParams.get('customer') || "Valued Customer"; // Default to "Valued Customer" if no parameter
const wallpaper = urlParams.get('wallpaper') || "Wallpaper1"; // Default to Wallpaper1 if no parameter

// Extract cupId from wallpaper
const cupId = getCupIdFromWallpaper(wallpaper);

// Set customer name dynamically after DOM loads
document.addEventListener('DOMContentLoaded', function () {
    if (customer) {
        document.getElementById('greeting').innerText = `Thank you, ${customer}!`;
    }

    // Set the dynamic quote based on cupId
    if (cupId) {
        setDynamicQuote(cupId);
    } else {
        document.getElementById('dynamicquote').innerText = "Stay motivated!";
    }

    // Set wallpaper image and download link dynamically
    document.getElementById('wallpaperImage').src = `images/${wallpaper}.jpg`;
    document.getElementById('wallpaperDownloadLink').href = `images/${wallpaper}.jpg`;
});

// Function to set the dynamic quote for slide 2
function setDynamicQuote(cupId) {
    const selectedQuote = quotes[cupId] || "Stay motivated!"; // Fallback quote if cupId doesn't match
    document.getElementById('dynamicquote').innerText = selectedQuote;
}

// Initialize with the first slide
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const offset = -index * 100; // Each slide is 100% width
    slides.style.transform = `translateX(${offset}%)`;

    const prevButton = document.querySelector('.prev-button');

    if (index === 0) {
        prevButton.style.visibility = 'hidden'; // Hide on the first slide
    } else {
        prevButton.style.visibility = 'visible'; // Show on slides 2, 3, etc.
    }
}

// Function to navigate to the next slide
function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides; // Cycle to next slide
    showSlide(slideIndex);
}

// Function to navigate to the previous slide
function prevSlide() {
    if (slideIndex > 0) {
        slideIndex = (slideIndex - 1) % totalSlides; // Move to the previous slide only if not on the first slide
    }
    showSlide(slideIndex);
}

// Initialize the first slide
showSlide(slideIndex);

// Handle touch/swipe events for mobile
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchMove(event) {
    touchEndX = event.changedTouches[0].screenX;
}

function handleTouchEnd() {
    if (touchEndX < touchStartX) {
        nextSlide(); // Swiped left, go to the next slide
    } else if (touchEndX > touchStartX) {
        prevSlide(); // Swiped right, go to the previous slide
    }
}

// Attach touch event listeners
slides.addEventListener('touchstart', handleTouchStart);
slides.addEventListener('touchmove', handleTouchMove);
slides.addEventListener('touchend', handleTouchEnd);