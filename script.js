// Quotes based on cupId 
const quotes = {
    1: "Hey you, I hope today brings you all the joy and positivity you deserve.",
    2: "You are such a beautiful person, inside and out. Wishing you a wonderful day.",
    3: "No matter what, always remember that you are loved and appreciated.",
    4: "Take it one step at a time, you’re doing amazing and you're not alone.",
    5: "The world is better because you’re in it. Keep shining your light!",
    6: "Every little thing you do today is making the world a better place.",
    7: "Your kindness is a gift to this world. Never stop sharing it, especially with yourself.",
    8: "You’re growing and blooming more beautifully every single day.",
    9: "You’re a one-of-a-kind treasure, and don’t let anyone forget that.",
    10: "The world needs your light, so keep shining and sharing your beautiful energy.",
    11: "When life feels tough, remember that each step forward is progress. You’ve got this!",
    12: "It’s okay to make mistakes—they’re part of your beautiful journey to greatness.",
    13: "Your heart is a compass that always guides you in the right direction. Trust it.",
    14: "Rain or shine, you bring warmth and light wherever you go. You’re someone’s sunshine.",
    15: "Your dreams are as bright as the stars. Keep reaching for them, you’re capable of so much.",
    16: "Even in your darkest moments, remember that beautiful transformations are happening.",
    17: "Be your unique, wonderful self, because that's all the world truly needs.",
    18: "You are a masterpiece in the making, and every step of your journey is perfect.",
    19: "You’re exactly where you need to be. Your story is unfolding beautifully.",
    20: "Pop every moment with joy, because life is too short not to celebrate every little win.",
    21: "When life tells you to stop, show it how amazing you are by going even further.",
    22: "You’re the cherry on top of your own beautiful life. Enjoy it!",
    23: "Your energy is magnetic—keep spreading your positive vibes wherever you go.",
    24: "Don’t let doubts hold you back. You have the strength to turn them into triumphs.",
    25: "Your dreams are worth chasing, even if you’re afraid to take the leap. Keep going.",
    26: "You are soft, gentle, and yet so powerful. Keep being your incredible self.",
    27: "You hold the secret to your own happiness—trust yourself to find it every day.",
    28: "Even on tough days, you’re the light someone is grateful for. Don’t forget that.",
    29: "Dance like no one’s watching because you’re making the world a more beautiful place with every move.",
    30: "You’re growing at your own pace, and that’s the perfect way to bloom.",
    31: "Your smile is magical—it lights up the world in the most amazing way.",
    32: "Sometimes, self-care means taking a moment to just be still and dream. You deserve that time.",
    33: "You are exactly where you need to be right now. Trust the process and keep going.",
    34: "Just like the stars, your dreams are limitless and shining brighter than you know.",
    35: "Keep going, and remember to pause and celebrate the little moments. They’re all part of the journey.",
    36: "Life is a beautiful puzzle, and you are the most colorful, unique piece of it.",
    37: "Write your dreams with courage and boldness—they’re yours to achieve.",
    38: "Even if the road is messy, it can still lead to the most beautiful destinations.",
    39: "You’re not lost, you’re exploring new possibilities and discovering yourself in the process.",
    40: "Be as brave as that first slice of pizza you take—delicious and full of confidence!",
    41: "Sparkle as brightly as you can, because the world needs your light more than ever.",
    42: "The best views come after the hardest climbs. You’re stronger than you think.",
    43: "Every day is a new page in your story. Make it one worth remembering.",
    44: "Your dreams are boundless—don’t set limits on how high you can go.",
    45: "You are an irreplaceable masterpiece, unlike anyone else in the world.",
    46: "Smile today because you’re incredible, and the world should see it.",
    47: "Take the scenic route, because the detours often lead to the best adventures.",
    48: "Be the energy you want to attract. Your good vibes are contagious.",
    49: "You don’t need anyone's permission to be fabulous—you're already amazing.",
    50: "You are stronger, braver, and smarter than you realize. Keep believing in yourself.",
    51: "Every moment is a chance to create something magical—embrace it.",
    52: "Your heart knows the way—follow it with courage and confidence.",
    53: "In a world full of trends, stay true to yourself. You are timeless.",
    54: "Success is built from small steps every day—your efforts matter.",
    55: "Life doesn’t need to be perfect to be wonderful. Embrace every part of it.",
    56: "You are the CEO of your own happiness—take charge of your joy.",
    57: "There’s no better time than now to start something new. You’ve got this!",
    58: "Good things come to those who believe in their dreams—never stop believing.",
    59: "You are never too old to set new goals and chase new dreams.",
    60: "Celebrate the small wins—they lead to even bigger victories.",
    61: "Your dreams are valid—don’t let anyone dim your light or stop you from reaching them.",
    62: "A positive attitude can turn anything into something amazing. Keep shining.",
    63: "The journey of a thousand miles begins with one brave step. Take it now.",
    64: "You’re not just a chapter, you’re the entire story. Write it beautifully.",
    65: "Inhale confidence, exhale any doubts that try to hold you back.",
    66: "Success is built on small choices—your efforts are shaping something incredible.",
    67: "You’re creating magic every single day—keep going and trust yourself.",
    68: "Keep facing the sunshine, and the shadows will always fall behind you.",
    69: "You are enough just as you are—never forget that.",
    70: "Life may not be perfect, but your attitude can be—stay positive.",
    71: "You’re never too old to start fresh and create something fabulous.",
    72: "The world needs your sparkle—never dim your light for anyone.",
    73: "You can’t stop the waves, but you can learn to surf. Ride them with confidence.",
    74: "Do what makes your soul happy—you deserve to feel joy every day.",
    75: "Believe in the magic of new beginnings—they bring fresh hope and endless possibilities.",
    76: "The best way to predict the future is to create it. Keep building your dreams.",
    77: "Your vibe attracts your tribe—keep spreading your amazing energy.",
    78: "Every mistake is an opportunity to learn and grow. You’re doing wonderfully.",
    79: "You’re the author of your own destiny—write the best story you can.",
    80: "You’re a masterpiece in progress, and you’re already doing incredible things.",
    81: "Don’t wait for opportunities—create them. You have the power to shape your future.",
    82: "Growth may be quiet, but it’s always beautiful and worthy of celebration.",
    83: "Believe in your dreams, even if others don’t. You are capable of amazing things.",
    84: "You are worthy of all the happiness and success the world has to offer.",
    85: "Life is short, so make every moment count—your time to shine is now.",
    86: "Choose happiness every day, because it’s in your power to create it.",
    87: "Kindness is always the answer. It’s the right choice every single time.",
    88: "Turn your can’ts into cans, and watch your dreams come alive.",
    89: "Find joy in the journey, not just the destination. Every step matters.",
    90: "You don’t have to be perfect—you just have to be your true self.",
    91: "Success is the sum of all your little efforts. Keep pushing forward.",
    92: "The best is yet to come—keep moving forward and don’t give up.",
    93: "You don’t need to see the whole staircase, just take the first step.",
    94: "The future belongs to those who believe in the beauty of their dreams.",
    95: "When life gives you lemons, make the sweetest lemonade and share it with others.",
    96: "You have the power to make today amazing—believe in yourself.",
    97: "Keep your eyes on the stars, and your feet firmly grounded in your dreams.",
    98: "Do what makes you feel alive, and never apologize for it—your happiness matters.",
    99: "The only way to do great work is to love what you do. Keep pursuing your passion.",
    100: "You are capable of amazing things, so never stop believing in yourself. The world is waiting for your brilliance."
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
document.getElementById('wallpaperDownloadLink').setAttribute('download', 'Have A Great Day Ahead :))');

document.getElementById('wallpaperDownloadLink').addEventListener('click', function () {
    alert('Please check your gallery after confirming the download.');
});
});

function setDynamicQuote(cupId) {
    const selectedQuote = quotes[cupId] || "Unable to find the qoute(⁠╯⁠︵⁠╰⁠,⁠)"; 
    document.getElementById('dynamicquote').innerText = `"${selectedQuote}"`;
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
const slideThreshold = 30; 

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    const touchDistance = touchEndX - touchStartX;
    if (Math.abs(touchDistance) > slideThreshold) {
        if (touchDistance < 0) {
            nextSlide(); 
        } else {
            prevSlide(); 
        }
    }
}

slides.addEventListener('touchstart', handleTouchStart);
slides.addEventListener('touchend', handleTouchEnd);
const musicButton = document.getElementById('musicButton');
const music = document.getElementById('music');

musicButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicButton.textContent = '🎵 Pause Music';
  } else {
    music.pause();
    musicButton.textContent = '🎵 Play Music';
  }
});
