document.body.classList.add('fade-out');// adds "fade-out" to the class list
window.addEventListener('load', () => { //event listener for when page loads
    document.body.classList.remove('fade-out'); // then removes fade out from the class list
})

var slideIndex = 1; //sets slide index to 1, so that the first image is showed upon loading.
showSlides(slideIndex);

function plusSlides(n) { 
    showSlides(slideIndex += n); //plusSlides takes "n" which is whatever the current slide is, and when an arrow is clicked it adds 1 to slide index.
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length}; 
    for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); 
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}