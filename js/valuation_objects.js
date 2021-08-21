let links = document.getElementsByClassName("link-read-more");

for(let link of links) {
    link.addEventListener('click', () => {
        link.style.display = 'none';
        for(let li of link.previousElementSibling.children) {
            li.style.display = 'flex';
        }
    })
}