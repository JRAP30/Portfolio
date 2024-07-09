document.addEventListener('DOMContentLoaded', function () {
    const aboutTextContent = [
        {
            title: "",
            paragraphs: [
                "Hey there! I’m Joana, and I’m on an exciting journey from data analysis to software development. Here’s a bit about me:"
            ]
        },
        {
            title: "My Background",
            paragraphs: [
                "<strong>Data Enthusiast:</strong> For the past seven years, I’ve been immersed in the world of data. From SQL queries to statistical analysis, I’ve explored complex datasets and visualized insights.",
                "<strong>New Horizons:</strong> Now, I’m venturing into software development. My engineering foundation gives me a solid base, and I’m eager to learn and create."
            ]
        },
        {
            title: "What Drives Me",
            paragraphs: [
                "<strong>Curiosity:</strong> I love diving into code, unraveling its logic, and building something functional.",
                "<strong>Problem-Solving:</strong> Whether it’s optimizing an algorithm or debugging, I’m up for the challenge."
            ]
        },
        {
            title: "Hobbies",
            paragraphs: [
                "I’m passionate about exploring new technologies and improving my skills through diverse projects and challenges. When I’m not immersed in code, you’ll find me embracing nature’s beauty or creating cozy crochet or sewing projects on rainy days."
            ]
        }
    ];

    const aboutImages = [
        "https://aboutjoana.my.canva.site/images/2d6b82595f7cef9d828466ac583a430e.jpg",
        "https://aboutjoana.my.canva.site/images/de5559cd77f3f29eec3c166dcfbb521d.jpg",
        "https://aboutjoana.my.canva.site/images/d7e8a4eaf7720ec695d11aedde209ceb.jpg",
        "https://aboutjoana.my.canva.site/images/c27be1ee29435f04f689a0aa3b18b438.png",
        "https://aboutjoana.my.canva.site/images/6d58e5b44fa3b1defc54d59850bbf2cc.jpg"
    ];

    const aboutTextContainer = document.getElementById('about-text');
    const aboutImagesContainer = document.getElementById('about-images');

    aboutTextContent.forEach(section => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.innerHTML = section.title;
        aboutTextContainer.appendChild(sectionTitle);

        section.paragraphs.forEach(paragraph => {
            const p = document.createElement('p');
            p.className = 'paragraph';
            p.innerHTML = paragraph;
            aboutTextContainer.appendChild(p);
        });
    });

    aboutImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        aboutImagesContainer.appendChild(img);
    });

    let paragraphIndex = 0;
    let imageIndex = 0;
    const paragraphs = document.querySelectorAll('.about-text .paragraph');
    const images = document.querySelectorAll('.about-images img');

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