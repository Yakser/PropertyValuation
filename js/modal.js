let modals = document.getElementsByClassName('modal');
let modalBtns = document.getElementsByClassName('js-open-modal');
let overlay = document.getElementById('overlay');

for(let btn of modalBtns) {
    btn.addEventListener('click', () => {
        let dataType = btn.getAttribute('data-type');
        for(let modal of modals) {
            if (modal.getAttribute('data-type') === dataType) {

                modal.classList.add('active');
                overlay.classList.add('active');
                document.body.classList.add("modal-active");
                break;
            }
        }
    })
};
let closeModal = () => {
  for (let modal of modals) {
    modal.classList.remove("active");
  }
  overlay.classList.remove("active");
  document.body.classList.remove('modal-active');
};

overlay.addEventListener("click", () => {
  closeModal();
});

let closeModalBtns = document.getElementsByClassName('modal__close');

for(let btn of closeModalBtns) {
    btn.addEventListener('click', closeModal)
}
