document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "I'm a web developer.",
        "I create interactive websites.",
        "I love coding.",
        "JavaScript is my favorite language.",
        "Welcome to my portfolio."
    ];

    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    const dynamicTextElement = document.getElementById("dynamic-text");
    let isDeleting = false;

    function updateText() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            dynamicTextElement.innerHTML = currentPhrase.substring(0, currentLetterIndex - 1);
            currentLetterIndex--;
        } else {
            dynamicTextElement.innerHTML = currentPhrase.substring(0, currentLetterIndex + 1);
            currentLetterIndex++;
        }

        if (!isDeleting && currentLetterIndex === currentPhrase.length) {
            setTimeout(() => { isDeleting = true; }, 2000); // Pause before deleting
        } else if (isDeleting && currentLetterIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(updateText, 500); // Pause before typing the next phrase
            return;
        }

        const speed = isDeleting ? 50 : 100; // Adjust speed here
        setTimeout(updateText, speed);
    }

    updateText(); // Start the typing effect

});
