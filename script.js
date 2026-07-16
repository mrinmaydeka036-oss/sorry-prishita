alert("JS Loaded");
const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const videoBox = document.getElementById("videoBox");
const video = document.getElementById("video");
const soundBtn = document.getElementById("soundBtn");

// Open letter
openBtn.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        videoBox.style.display = "block";

        video.play().catch(() => {});

        video.scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);

});

// Turn on sound
soundBtn.addEventListener("click", function () {

    video.muted = false;
    video.volume = 1;

    video.play();

    soundBtn.innerHTML = "❤️ Enjoy The Video";

});

// Floating hearts
function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        (Math.random() * 4 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}

setInterval(createHeart, 500);
