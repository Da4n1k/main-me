let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
    list[i].onclick = () => {
        let k = 0;
        while (k < list.length) {
            list[k++].className = 'list';
        }
        list[i].className = 'list active';
    }
}

let menubt = document.querySelector('.toggle');
let nav = document.querySelector('.navigation');
menubt.onclick = () => {
    menubt.classList.toggle('active');
    nav.classList.toggle('active');
};

let theme = document.querySelector('.theme-mode');
let textHello = document.querySelector('.textHello');
let bot_text = document.querySelector('.bot-text');
theme.onclick = () => {
    theme.classList.toggle('active');
    if (theme.className === 'theme-mode active') {
        document.body.style.background = "var(--body-dark)";
        document.body.style.color = "var(--alltext-light)";
        textHello.style.color = "var(--alltext-light)";
        bot_text.style.color = "var(--alltext-light)";
    } else {
        document.body.style.background = "var(--body-light)";
        document.body.style.color = "var(--alltext-dark)";
        textHello.style.color = "var(--alltext-dark)";
        bot_text.style.color = "var(--alltext-dark)";
    }
};

const skillCont = document.getElementsByClassName('myskill-item'),
    controlpanel = document.querySelectorAll('.control-panel');

function toggleSkill() {

    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillCont.length; i++) {
        skillCont[i].className = 'myskill-item skill-close';
    }
    if (itemClass === 'myskill-item skill-close') {
        this.parentNode.className = 'myskill-item skill-open';
    }
}

controlpanel.forEach(function(el) {
    el.addEventListener('click', toggleSkill);
})

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 90,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}
window.addEventListener('scroll', scrollActive);

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})
sr.reveal('.mini-text', {
    origin: 'left',
    delay: 2
})

sr.reveal('.bg-imageEffect', {
    origin: 'top',
    delay: 2
})

sr.reveal('.skill-box', {
    origin: 'top',
    delay: 2
})

sr.reveal('.tile-work1', {
    origin: 'top',
    delay: 2
})

sr.reveal('.tile-work2', {
    origin: 'top',
    delay: 2
})

sr.reveal('.tile-work3', {
    origin: 'top',
    delay: 2
})

sr.reveal('.tile-work4', {
    origin: 'top',
    delay: 2
})

sr.reveal('.tile-work5', {
    origin: 'top',
    delay: 2
})

sr.reveal('.tile-work6', {
    origin: 'top',
    delay: 2
})

var scrollEventHandler = function() {
    window.scroll(0, window.pageYOffset);
}

window.addEventListener("scroll", scrollEventHandler, false);