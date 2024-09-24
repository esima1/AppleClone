let headers = $(".footer-links-wrapper h3");
headers.on("click", toggler);
function toggler() {
  headers.next("ul").slideToggle();
}
