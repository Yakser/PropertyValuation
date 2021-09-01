let lists = document.getElementsByClassName("js-list");
for(let list of lists) {
    items = list.children;
    for(let item of items) {
        item.addEventListener('click', () => {
            if (!(item.classList.contains('selected'))) {
           
              let allItems = document.getElementById(item.getAttribute("data-list")).children;
              for(let it of allItems) {
                  it.classList.remove("selected");
              }
              item.classList.add("selected");
            }
        })
    }
}

