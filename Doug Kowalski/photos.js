const images = document.querySelectorAll('.gallery-photos img');
let expandedImage = null;

images.forEach(image => {
    image.addEventListener('click', function() {
        if (expandedImage) {
            expandedImage.classList.remove('expanded');
        }

        if (expandedImage !== this) {
            this.classList.toggle('expanded');
            expandedImage = this;
        } else {
            expandedImage = null;
        }
    });
});

document.body.addEventListener('click', function(event) {
    if (expandedImage && !expandedImage.contains(event.target)) {
        expandedImage.classList.remove('expanded');
        expandedImage = null;
    }
});
