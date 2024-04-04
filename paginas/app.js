const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const imgDiv = document.getElementById('img_div');
    const imgs = imgDiv.querySelectorAll('.img');

    searchInput.addEventListener('input', function(event) {
        const searchTerm = event.target.value.toLowerCase();

        imgs.forEach(function(img) {
            const altText = img.getAttribute('alt').toLowerCase();
            const imgLink = img.parentElement.getAttribute('href');

            if (altText.includes(searchTerm)) {
                img.style.display = 'inline-block';
                img.parentElement.style.display = 'inline-block';
            } else {
                img.style.display = 'none';
                img.parentElement.style.display = 'none';
            }
        });
    });
});