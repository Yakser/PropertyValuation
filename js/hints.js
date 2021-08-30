let checklists = document.getElementsByClassName("js-checklist");

for (let list of checklists) {
  let hint = document.getElementById(list.getAttribute("data-hint"));
  for (let inputBlock of list.children) {
    inputBlock.addEventListener("change", () => {
      let checked = inputBlock.children[0].checked;
      hint.style.opacity = "1";
      if (checked) {
        hint.style.opacity = "0.2";
      } else {
        for (let inputBlock of list.children) {
          if (inputBlock.children[0].checked) {
            hint.style.opacity = "0.2";
            break;
          }
        }
      }
    });
  }
}
//  -------------
// let list = document.getElementsByClassName('js-checklist')[0];
// let hint = document.getElementsByClassName('hint-block')[0];
