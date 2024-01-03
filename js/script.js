modal = document.getElementById("modal-box");
btn = document.getElementById("send-msg");
close = document.getElementById("close");
btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}
close.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflow = "scroll";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}