let techPassport = document.getElementById('docs-3');
let btn = document.getElementById('make-order-btn');
techPassport.addEventListener('change', () => {
    if (techPassport.checked) {
        btn.setAttribute('data-type', 'modal-docs');
    } else {
        btn.setAttribute("data-type", "modal-tech-passport");
    }
});


let addPassportBtn = document.getElementById("add-tech-passport-btn");
addPassportBtn.addEventListener('click', () => {
    addPassport();
});

let removePassportBtn = document.getElementById("remove-tech-passport-btn");
removePassportBtn.addEventListener("click", () => {
  removePassport();
});

let addPassport = () => {
    let row = document.getElementById("tech-passport-row-1");
    row.style.display = "flex";
    row.parentElement.nextElementSibling.children[0].children[0].children[2].innerHTML =
      "5 500 рублей";
}

let removePassport = () => {
    let row = document.getElementById("tech-passport-row-1");
    row.style.display = "none";
    row.parentElement.nextElementSibling.children[0].children[0].children[2].innerHTML =
      "3 000 рублей";
}

