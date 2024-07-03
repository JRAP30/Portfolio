document.addEventListener('DOMContentLoaded', function () {
    const paragraphs = document.querySelectorAll('.about-text .paragraph');
    const images = document.querySelectorAll('.about-images img');

    let paragraphIndex = 0;
    let imageIndex = 0;

    function showNextParagraph() {
        if (paragraphIndex < paragraphs.length) {
            paragraphs[paragraphIndex].classList.add('animate-paragraph');
            paragraphIndex++;
            setTimeout(showNextParagraph, 500); // Delay before showing the next paragraph
        } else {
            showNextImage(); // Start showing images after paragraphs
        }
    }

    function showNextImage() {
        if (imageIndex < images.length) {
            images[imageIndex].classList.add('animate-image');
            imageIndex++;
            setTimeout(showNextImage, 500); // Delay before showing the next image
        }
    }

    showNextParagraph();
});