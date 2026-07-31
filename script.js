 // ===============================
// Girlfriend Day Surprise Website
// ===============================

// Change this to your special date/password
const SECRET = "megana";

// Unlock Website
function unlock() {
    const passwordInput = document.getElementById("password");
    const error = document.getElementById("error");

    if (!passwordInput || !error) return;

    if (passwordInput.value === SECRET) {
        document.getElementById("lockScreen").classList.add("hidden");
        document.getElementById("mainSite").classList.remove("hidden");
    } else {
        error.innerText = "❤️ Wrong password. Try again.";
    }
}

// Open / Close Love Letter
function toggleLetter() {
    const letter = document.getElementById("letter");

    if (!letter) return;

    letter.classList.toggle("hidden");
}

// -----------------------------
// Slideshow
// -----------------------------

const photos = [
    "/Users/vijay/Desktop/Screenshot 2026-08-01 at 12.05.01 AM.png",
    "",
    ""
];

let currentPhoto = 0;

window.addEventListener("DOMContentLoaded", () => {

    const slide = document.getElementById("slide");

    if (!slide) return;

    slide.src = photos[0];

    setInterval(() => {

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

        slide.src = photos[currentPhoto];

    }, 3000);

});

// -----------------------------
// Love Meter
// -----------------------------

function fillMeter() {

    const meter = document.getElementById("meterFill");

    if (!meter) return;

    meter.style.width = "100%";

    setTimeout(() => {
        alert("❤️ Love Meter: ♾️% ❤️");
    }, 1500);

}

// -----------------------------
// Final Surprise
// -----------------------------

function showSurprise() {

    createHearts();

    setTimeout(() => {

        alert(
`Happy Girlfriend Day ❤️

Thank you for being the most beautiful part of my life.

I Love You Forever ❤️`
        );

    }, 1200);

}

// -----------------------------
// Falling Hearts Animation
// -----------------------------

function createHearts() {

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-50px";
        heart.style.fontSize = (Math.random() * 25 + 15) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        heart.animate(
            [
                {
                    transform: "translateY(0px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(${window.innerHeight + 100}px)
                         rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: 3000 + Math.random() * 2000,
                easing: "linear"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }

}
