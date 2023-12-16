const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
    observer.observe(el);
});
var icon = document.getElementById('icon');

icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.className = "fa-solid fa-moon fa-2xl";
        icon.style.color = "#000000";
        document.getElementById('ghicon').src = "/images/icons8-github-dark.svg";
    }else{
        icon.className = "fa-solid fa-sun fa-2xl";
        icon.style.color = "#ffffff";
        document.getElementById('ghicon').src = "/images/icons8-github-light.svg";
    }
}

