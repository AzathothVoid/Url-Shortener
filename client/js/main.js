const mobile_hidden = document.querySelectorAll(".mobile-hidden");

var mediaQuer = window.matchMedia("(max-width: 768px)");

if (mediaQuer.matches) {
  mobile_hidden.forEach((item) => {
    this.classList.toggle("mobile-hidden");
  });
}
