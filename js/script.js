var link = document.querySelector(".contacts .link-animation");
var map = document.querySelector(".contacts img");
var popup = document.querySelector(".feedback");
var bigMap = document.querySelector(".big-map");
var closeFeedback = popup.querySelector(".feedback .modal-close");
var closeBigMap = bigMap.querySelector(".big-map .modal-close");
var serviceLink = document.querySelectorAll(".service-item-title");
var myName = document.querySelector("#feedback-name");

for (var i = 0; i < serviceLink.length; i++) {
  serviceLink[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    var activeLink = document.querySelector(".service-item-title-active");
    activeLink.classList.remove("service-item-title-active");
    this.classList.add("service-item-title-active");
  })
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  myName.focus();
});

map.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.add("modal-show");
});

closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

closeBigMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  bigMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show") || bigMap.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      bigMap.classList.remove("modal-show");
    }
  }
});