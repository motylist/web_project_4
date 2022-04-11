const modalDisplay = document.querySelector(".modal");
const modalOpen = document.querySelector(".profile__button_type_edit");
const modalClose = document.querySelector(".modal__button_type_close");
const likeButton = document.querySelector(".photo-grid__card-label-icon");
let nameInput = document.querySelector(".form__input_type_name");
let jobInput = document.querySelector(".form__input_type_job");
let profileName = document.querySelector(".profile__title");
let profileJob = document.querySelector(".profile__subtitle");
const form = document.querySelector(".modal__form");

function toggleModal() {
  modalDisplay.classList.toggle("modal__opened");
}

modalOpen.addEventListener("click", function () {
  toggleModal();

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

modalClose.addEventListener("click", toggleModal);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  toggleModal();
});
