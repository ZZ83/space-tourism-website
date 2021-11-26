const mainNav   = document.querySelector('.main-nav');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const vis = mainNav.getAttribute("data-visible");
    if (vis === "false") {
        mainNav.setAttribute("data-visible", true);
        
    } else if (vis === "true") {
        mainNav.setAttribute("data-visible", false);
    }

    console.log(vis)
})
