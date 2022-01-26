const modal = document.querySelector(".modal");
const loginBtn = document.querySelector(".login-btn");
const closeBtn = document.querySelector(".close");

loginBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
  //added for no-scroll of body on open modal
  document.body.style.position = "fixed";
}

function closeModal() {
  modal.style.display = "none";
  //added for scroll of body on closed modal
  document.body.style.position = "";
}

function outsideClick(e) {
  if (e.target == modal) {
    closeModal();
  }
}
