document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });
});

const list = document.querySelector(".carousel");
const item = document.querySelector(".carousel-item");
const itemWidth = item.offsetWidth;

const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
nextButton.addEventListener('click', () => {
    list.scrollBy({ left: itemWidth, behavior: "smooth" });
})
previousButton.addEventListener('click', () => {
    list.scrollBy({ left: -itemWidth, behavior: "smooth" });
});

