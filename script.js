// Quotes based on cupId 
const quotes = {
    1: "Chase your dreams like a puppy chasing its tail—enthusiastic and unstoppable!",
    2: "Bloom even if the sun isn’t shining yet; your time will come.",
    3: "Be your own rainbow on cloudy days.",
    4: "Small steps still lead to big adventures—so keep walking!",
    5: "You’re the star of your story, so make it sparkle!",
    6: "Every little thing you do today is a love letter to your future self.",
    7: "Kindness is free—sprinkle that stuff everywhere, especially on yourself!",
    8: "Even seeds start small, but look how tall trees grow.",
    9: "You’re the cupcake in a world full of muffins—sweet, special, and unique!",
    10: "Keep shining; some people just need sunglasses to see your glow.",
    11: "When you feel stuck, just wiggle—movement is progress!",
    12: "Mistakes are proof that you’re coloring outside the lines—and that’s where the fun is!",
    13: "Your heart beats for a reason—keep listening to its rhythm.",
    14: "Rain or shine, you’re still the sunshine!",
    15: "Let your dreams be as endless as the stars and twice as bright.",
    16: "Even caterpillars think the world is ending before they become butterflies.",
    17: "Sometimes it’s okay to be a little extra—just like sprinkles on a donut.",
    18: "You’re a masterpiece in progress; the final stroke hasn’t been painted yet.",
    19: "Don’t rush the story—you’re just in the exciting plot twist!",
    20: "Life is like bubble wrap; pop every moment with joy!",
    21: "When the world says ‘stop,’ you say ‘watch me!’",
    22: "You’re the cherry on top of your own sundae.",
    23: "Your vibe attracts your tribe, so keep it cute and positive!",
    24: "Turn your ‘I can’t’ into ‘I will’ and see what happens.",
    25: "Dreams are like kites; let them soar high, even if you’re scared to let go.",
    26: "Be soft but fierce—like a marshmallow on fire!",
    27: "You’re the secret ingredient to your own happiness recipe.",
    28: "Even on your worst days, you’re someone’s sunshine.",
    29: "Dance through life like nobody’s watching—and if they are, give them a show!",
    30: "Grow at your own pace; even wildflowers take their time.",
    31: "Your smile is your superpower—use it often!",
    32: "Sometimes, self-care looks like staying in bed with your dreams.",
    33: "You’re not behind; you’re building something amazing in your own time.",
    34: "Every star in the sky started as a tiny speck—just like your big dreams.",
    35: "Keep hustling, but don’t forget to take cute breaks!",
    36: "Life’s a puzzle, and you’re the most colorful piece!",
    37: "Write your to-do list in pencil, but your dreams in ink.",
    38: "Even if the path is messy, it can still lead to beautiful places.",
    39: "You’re not lost; you’re exploring your own map.",
    40: "Be as brave as the first slice of pizza to be taken from the box!",
    41: "Don’t be afraid to sparkle—sometimes, the world needs your shine the most.",
    42: "The best view comes after the hardest climb.",
    43: "Every new day is a blank page in your story—write something amazing!",
    44: "The only limit is the one you set for yourself, so dream big!",
    45: "You’re a work of art, and no one can replicate your masterpiece.",
    46: "Smile today, because you’re awesome and the world should know it!",
    47: "Take the scenic route; the detours often lead to the best adventures.",
    48: "Be the energy you want to attract—good vibes only!",
    49: "You don’t need permission to be fabulous!",
    50: "You are stronger than you think, braver than you believe, and smarter than you know.",
    51: "Life is a series of moments—make each one magical.",
    52: "Your heart knows the way, follow it with courage.",
    53: "In a world full of trends, be timeless.",
    54: "Success is made up of tiny wins every day.",
    55: "Life doesn’t have to be perfect to be wonderful.",
    56: "You are the CEO of your own happiness.",
    57: "The best time for a fresh start is now.",
    58: "Good things come to those who hustle and believe.",
    59: "You are never too old to set new goals or dream a new dream.",
    60: "Celebrate the small wins, they lead to the big ones!",
    61: "Your dreams are valid—never let anyone tell you otherwise.",
    62: "A positive attitude is the spark for amazing things to happen.",
    63: "The journey of a thousand miles begins with one brave step.",
    64: "You’re not just a chapter in the book; you’re the whole story!",
    65: "Inhale confidence, exhale doubt.",
    66: "Success doesn’t happen overnight—it’s built with each small choice you make.",
    67: "You’re not just making progress; you’re making magic!",
    68: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    69: "You are enough, just as you are.",
    70: "Life may not be perfect, but your attitude can be!",
    71: "You’re never too old to start fresh and be fabulous.",
    72: "The world needs your sparkle, so never dim your light.",
    73: "You can’t stop the waves, but you can learn to surf.",
    74: "Take time to do what makes your soul happy.",
    75: "Believe in the magic of new beginnings.",
    76: "The best way to predict the future is to create it.",
    77: "Your vibe attracts your tribe—keep spreading good energy.",
    78: "Every mistake is a lesson—learn from it and grow.",
    79: "You are the author of your own destiny.",
    80: "You can be both a work in progress and a masterpiece at the same time.",
    81: "Don’t wait for opportunities—create them!",
    82: "Growth isn’t always loud, but it’s always beautiful.",
    83: "Believe in your dreams, even when others don’t.",
    84: "You are worthy of all the success and happiness life has to offer.",
    85: "Life is short, so make every moment count!",
    86: "Happiness is a choice, and you have the power to choose it every day.",
    87: "When in doubt, choose kindness—it’s always the right answer.",
    88: "Turn your can'ts into cans, and your dreams into plans.",
    89: "Find joy in the journey, not just the destination.",
    90: "You don’t have to be perfect, you just have to be you.",
    91: "Success is the sum of small efforts repeated day in and day out.",
    92: "The best is yet to come, so keep going!",
    93: "You don’t have to see the whole staircase, just take the first step.",
    94: "The future belongs to those who believe in the beauty of their dreams.",
    95: "When life gives you lemons, make lemonade and share it with the world.",
    96: "You have the power to make today amazing.",
    97: "Keep your eyes on the stars and your feet on the ground.",
    98: "Do what makes you feel alive, and never apologize for it.",
    99: "The only way to do great work is to love what you do.",
    100: "You are capable of amazing things, so never stop believing in yourself."
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
