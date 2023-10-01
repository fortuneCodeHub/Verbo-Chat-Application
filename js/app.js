/**
 * Action on scroll
 */
window.addEventListener("scroll", setScrollVal);
window.addEventListener("resize", setScrollVal);

function setScrollVal() {
    const htmlElement = document.documentElement; //This is the html element object
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100));
    // console.log(Math.min(percentOfScreenHeightScrolled * 100, 100));
}

setScrollVal();

/**
 * Image Pop Setter
 */
const observer = new IntersectionObserver(entries => {
    for (let i = 0; i < entries.length; i++) {
        const entry = entries[i];
        if (entry.isIntersecting) {
            document.querySelectorAll("[data-img]").forEach(img => {
                img.classList.remove("show")
            })
            const img = document.querySelector(entry.target.dataset.imgToShow)
            img?.classList.add("show")
            break
        }
    }
});

document.querySelectorAll("[data-img-to-show]").forEach(section => {
    observer.observe(section);
})


/**
 * Image Pop stopper
 */
const newObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll("[data-img]").forEach(img => {
                img.classList.remove("show")
            })
        }
    })
})


document.querySelectorAll("[data-img-end]").forEach(section => {
    newObserver.observe(section);
})

/**
 * Input Form Setup
 */
const inputs = document.querySelectorAll(".input")
const labels = document.querySelectorAll(".label")

function activator() {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("click", function () {
            // Unset active from all inputs
            inputs.forEach(input => {
                input.classList.remove("active")
            })
            // Unset active from all labels
            labels.forEach(label => {
                label.classList.remove("active")
            })
            // set active to all labels
            labels[i].classList.toggle("active")
            // set active to all inputs
            inputs[i].classList.toggle("active")
        })
    }
}
activator()

/**
 * Offcanvas Navbar
 */
const navbarBtns = document.querySelectorAll('#offCanvasBtn');
const navBg = document.querySelector('.offcanvas-collapse');
const toggle = (function () {
    return function toggle() {
        navbarBtns.forEach(navbarBtn => {
            navbarBtn.addEventListener('click', function () {
                navBg.classList.toggle('open');
            });
        });
    }
})();
toggle();
/** 
 * split section Observer 
*/
const cards = document.querySelectorAll(".card-obj");
const splitObserver = new IntersectionObserver(entries =>{
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.toggle("move", entry.isIntersecting);
                //To stop the observer from observing the target
                observer.unobserve(entry.target);
            }
        });
        console.log(entries);
    }
);

cards.forEach(card => {
    splitObserver.observe(card);
});