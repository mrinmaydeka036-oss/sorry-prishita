alert("JS Loaded");

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const videoBox = document.getElementById("videoBox");
const video = document.getElementById("video");
const soundBtn = document.getElementById("soundBtn");

openBtn.onclick = () => {
    envelope.classList.add("open");

    setTimeout(() => {
        videoBox.style.display = "block";
        video.play().catch(() => {});
    }, 1200);
};

soundBtn.onclick = () => {
    video.muted = false;
    video.volume = 1;
    video.play();
    soundBtn.innerHTML = "❤️ Enjoy the Video";
};

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 500);
