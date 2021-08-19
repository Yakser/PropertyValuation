let modals = document.getElementsByClassName('modal');
let modalBtns = document.getElementsByClassName('js-open-modal');
let overlay = document.getElementById('overlay');

// открытие соответствующих модальных окон
for(let btn of modalBtns) {
    btn.addEventListener('click', () => {
      let dataType = btn.getAttribute("data-type");
      let modal = document.getElementById(dataType);

      modal.classList.add("active");
      overlay.classList.add('active');
      document.body.classList.add("modal-active");
      
    })
};

// закрытие модального окна
let closeModal = () => {
  for (let modal of modals) {
    modal.classList.remove("active");
  }
  overlay.classList.remove("active");
  document.body.classList.remove('modal-active');
};

// закрытие окна по клику на подложку
overlay.addEventListener("click", () => {
  closeModal();
});

// кнопки закрытия окна
let closeModalBtns = document.getElementsByClassName('modal__close');
for(let btn of closeModalBtns) {
    btn.addEventListener('click', closeModal)
}
