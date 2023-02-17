(function () {

    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    const slide = document.querySelectorAll(".slide")
    const modalImg = document.getElementById("img01");

    slide.forEach(el => {
        el.onclick = function () {
            modal.style.display = "flex";
            modalImg.src = this.src;
        }
    })

    span.onclick = function () {
        modal.style.display = "none";
    }

    modal.onclick = function () {
        modal.style.display = "none";
    }

})()
