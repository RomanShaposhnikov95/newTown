const openBtn = document.querySelector(".menu-open");
const closeBtn = document.querySelector(".header-close");
const sidebar = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");
const x = window.matchMedia("(max-width: 875px)")

openBtn.addEventListener("click", () => {
    sidebar.style.right = "0";
    document.body.style.overflowY = "hidden";
    overlay.style.zIndex = "100";
    overlay.style.position = "fixed"
    overlay.style.opacity = "0.3";
})


closeBtn.addEventListener("click", () => {
    closeSidebar()
})

overlay.addEventListener("click", () => {
    closeSidebar()
})


const closeSidebar = () => {
    sidebar.style.right = "-100%";
    document.body.style.overflowY = "unset";
    overlay.style.zIndex = "-100"
    overlay.style.position = "absolute"
    overlay.style.opacity = "0"
}


const getBodyScrollTop = () => {
    return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}

document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = function() {
        if (getBodyScrollTop() >= navbar.clientHeight) {
            navbar.classList.add("scroll")
        } else {
            navbar.classList.remove("scroll")
        }
    };
});




