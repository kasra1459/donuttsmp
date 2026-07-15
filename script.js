/*==================================

        DONUTT SMP

        SCRIPT.JS

===================================*/

/*========== Elements ==========*/

const navbar = document.querySelector(".navbar");

const menuBtn = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".sidebar");

const overlay = document.querySelector(".overlay");

const closeMenu = document.querySelector(".close-menu");

const copyButtons = document.querySelectorAll(".copy-btn");

/*========== Open Menu ==========*/

if(menuBtn){

    menuBtn.addEventListener("click",()=>{

        sidebar.classList.add("active");

        overlay.classList.add("active");

        document.body.style.overflow="hidden";

    });

}

/*========== Close Menu ==========*/

function closeSidebar(){

    sidebar.classList.remove("active");

    overlay.classList.remove("active");

    document.body.style.overflow="";

}

if(closeMenu){

    closeMenu.addEventListener("click",closeSidebar);

}

if(overlay){

    overlay.addEventListener("click",closeSidebar);

}

/*========== Close With ESC ==========*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeSidebar();

    }

});
/*==================================

      COPY SERVER IP

===================================*/

const SERVER_IP = "play.donuttsmp.ir";

copyButtons.forEach((button)=>{

    button.addEventListener("click",()=>{

        navigator.clipboard.writeText(SERVER_IP);

        const oldText = button.innerHTML;

        button.innerHTML = `
            <i class="fa-solid fa-check"></i>
            کپی شد
        `;

        button.style.background="#22c55e";
        button.style.color="#111";

        setTimeout(()=>{

            button.innerHTML = oldText;

            button.style.background="";
            button.style.color="";

        },2000);

    });

});

/*==================================

      NAVBAR SCROLL

===================================*/

window.addEventListener("scroll",()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});

/*==================================

      BACK TO TOP

===================================*/

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(!backTop) return;

    if(window.scrollY > 400){

        backTop.classList.add("show");

    }

    else{

        backTop.classList.remove("show");

    }

});

if(backTop){

    backTop.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*==================================

      SMOOTH LINKS

===================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",(e)=>{

        const target = document.querySelector(link.getAttribute("href"));

        if(!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior:"smooth"

        });

        closeSidebar();

    });

});
/*==================================

        SCROLL REVEAL

===================================*/

const revealElements = document.querySelectorAll(

    ".fade-up,.reveal,.card,.feature-card,.news-card,.stat-card"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:.15

}

);

revealElements.forEach(el=>{

    revealObserver.observe(el);

});

/*==================================

        COUNTER

===================================*/

const counters = document.querySelectorAll(".stat-number");

const counterObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.count;

        const speed = target / 80;

        let count = 0;

        function update(){

            count += speed;

            if(count < target){

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText = target.toLocaleString();

            }

        }

        update();

        counterObserver.unobserve(counter);

    });

},

{

    threshold:.5

}

);

counters.forEach(counter=>{

    counterObserver.observe(counter);

});

/*==================================

        FAQ

===================================*/

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

    const question = item.querySelector(".faq-question");

    question.addEventListener("click",()=>{

        faqItems.forEach(other=>{

            if(other!==item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});

/*==================================

        ACTIVE MENU

===================================*/

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(

".desktop-menu a,.sidebar-menu a"

);

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if(scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

/*==================================

        PRELOADER

===================================*/

window.addEventListener("load",()=>{

    const loader = document.querySelector(".preloader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },700);

    }

});

/*==================================

        END SCRIPT.JS

===================================*/