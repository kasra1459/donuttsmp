const copy =
document.querySelector(
    ".copy"
);

copy.onclick=()=>{

    navigator.clipboard
    .writeText(
        "play.donuttsmp.ir"
    );

    copy.innerHTML=
    "کپی شد";

    setTimeout(()=>{

        copy.innerHTML=
        "کپی IP";

    },1500);
};


// شبیه سازی پلیر آنلاین

setInterval(()=>{

    document
    .getElementById(
        "players"
    )
    .innerHTML=

    500+
    Math.floor(
        Math.random()*50
    );

},3000);