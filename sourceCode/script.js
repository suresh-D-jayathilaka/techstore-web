// Image Slider functionality
let currentImageIndex = 0;
const images = [
     '../images/resturantpic1.jpg',
    '../images/resturantpic2.jpg',
    '../images/resturantimage.jpg'

];

const sliderImage = document.getElementById('slider-image');

function changeImage() {
    sliderImage.src = images[currentImageIndex];

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 5000); // Change image every 5 seconds

// Smooth Scroll functionality
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

