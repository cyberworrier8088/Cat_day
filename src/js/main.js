// contact form popup
// shows funny cat when message sent

var form = document.getElementById("contactForm");
var popup = document.getElementById("popup");
var closeBtn = document.getElementById("closePopup");

// form submit
form.addEventListener("submit", function (event) {
    event.preventDefault();
    popup.style.display = "flex";
    form.reset();
});

// close popup
closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});

// click outside to close
popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});
