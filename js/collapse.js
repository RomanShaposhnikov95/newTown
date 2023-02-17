const collapse = document.querySelectorAll(".cards-content-item-collapse");

collapse.forEach(el => {
    const btn = el.querySelector(".collapse-toggler");

    btn.addEventListener("click", () => {
        el.classList.toggle("active")
    })
})

