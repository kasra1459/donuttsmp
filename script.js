// ==========================
// COPY IP
// ==========================

const copy = document.querySelector(".copy");

if (copy) {

    copy.onclick = () => {

        navigator.clipboard.writeText("play.donuttsmp.ir");

        copy.innerHTML = "کپی شد ✅";

        setTimeout(() => {

            copy.innerHTML = "کپی IP";

        }, 1500);

    };

}

// ==========================
// PLAYERS COUNTER
// ==========================

const players = document.getElementById("players");

if (players) {

    setInterval(() => {

        players.innerHTML =
            500 + Math.floor(Math.random() * 50);

    }, 3000);

}

// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

function openMenu() {

    sidebar.classList.add("active");
    overlay.classList.add("active");

    document.body.style.overflow = "hidden";

}

function closeMenu() {

    sidebar.classList.remove("active");
    overlay.classList.remove("active");

    document.body.style.overflow = "";

}

if (menuBtn) {

    menuBtn.addEventListener("click", openMenu);

}

if (closeBtn) {

    closeBtn.addEventListener("click", closeMenu);

}

if (overlay) {

    overlay.addEventListener("click", closeMenu);

}

// ==========================
// CLOSE MENU AFTER CLICK LINK
// ==========================

document.querySelectorAll(".sidebar a").forEach(link => {

    link.addEventListener("click", closeMenu);

});