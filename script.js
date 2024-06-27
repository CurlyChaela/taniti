document.addEventListener('DOMContentLoaded', function() {
    let carousels = document.querySelectorAll('.carousel');
    carousels.forEach(function(carousel) {
        let images = carousel.querySelectorAll('.resort-image');
        let currentIndex = 0;
        
        function showImage(index) {
            images.forEach(function(image, i) {
                image.style.display = (i === index) ? 'block' : 'none';
            });
        }

        carousel.querySelector('.prev').addEventListener('click', function() {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            showImage(currentIndex);
        });

        carousel.querySelector('.next').addEventListener('click', function() {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});
