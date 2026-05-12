// contact form
// shows funny cat when msg sent

var form = document.getElementById("contactForm");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("closePopup");


form.addEventListener("submit", function (event) {
    event.preventDefault();
    popup.style.display = "flex";
    form.reset();
});

// closing pops
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
