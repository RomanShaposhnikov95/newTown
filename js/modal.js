const modal = document.querySelector(".map-modal");
const openModal = document.querySelectorAll(".openModal");
const closeModal = document.querySelector(".map-modal-content-close");

openModal.forEach(el => {
    el.addEventListener("click", () => {
        modal.classList.remove("d-none")
    })
})


closeModal.addEventListener("click", () => {
    modal.classList.add("d-none")
})


