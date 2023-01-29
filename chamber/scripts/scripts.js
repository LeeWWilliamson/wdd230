function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;


date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
document.getElementById("last-modified").innerHTML = new Date(document.lastModified);
