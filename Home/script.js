document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "Welcome to my Portfolio!",
        "Junior Software Developer",
        "Data Analyst",
        "Cat Lover",
        "Nature Explorer"
    ];

    let currentPhraseIndex = 0;
    let currentLetterIndex = 0;
    const dynamicTextElement = document.getElementById("phrases");
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
            setTimeout(() => { isDeleting = true; }, 1200); 
        } else if (isDeleting && currentLetterIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(updateText, 500);
            return;
        }

        const speed = isDeleting ? 50 : 100;
        setTimeout(updateText, speed);
    }

    updateText(); 

});
