const modalDisplay = document.querySelector(".modal");
const modalOpen = document.querySelector(".profile__button_type_edit");
const modalClose = document.querySelector(".modal__button_type_close");
const likeButton = document.querySelector(".photo-grid__card-label-icon");

function openModal() {
  modalDisplay.classList.remove("modal__opened");
}

function closeModal() {
  modalDisplay.classList.add("modal__opened");
}

modalOpen.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
