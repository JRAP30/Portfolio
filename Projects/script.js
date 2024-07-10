document.addEventListener("DOMContentLoaded", function () {

    const codeProjects = [

        {
            imageUrl: "Quizz.png",
            imageLink: "https://jrap30.github.io/CatQuizz/",
            title: "Cat Quiz",
            text1: "The Cat Quiz was born as a challenge from Just IT, showcasing the skills learned during their bootcamp.",
            text2: "This fun and educational quiz tests your knowledge of our feline friends, covering cat breeds, behavior, and famous cats in history."
        },
        {
            imageUrl: "Guess.png",
            imageLink: "https://jrap30.github.io/GuessAnimal/",
            title: "Guess the animal Game",
            text1: "Created as a final project for an introductory JavaScript course, ‘Guess the Animal’ is a dinamic word game.",
            text2: "When you guess a letter correctly, the image gradually reveals, helping you complete the word."
        }
    ];

    const noCodeProjects = [
        {
            imageUrl: "https://res.cloudinary.com/dbyioi2qq/q_auto/v1713046528/static/412729358_373915118383061_4997795417429130412_njpg_1713046528_50000.jpg",
            imageLink: "https://girasol.codedesign.app/",
            title: "Gira.Sol",
            text1: "Webpage dedicated to showcase a new Portuguese jewelry brand.",
            text2: "This project was created with the CodeDesign editor."
        },
        {
            imageUrl: "https://assets.softr-files.com/applications/9d2c7d18-b976-4b8e-92e2-cdcad3c3e7d9/assets/4a3ec1db-4fa2-4d86-a2a4-ee3b2428813f.png",
            imageLink: "https://flourishandblotts.softr.app/",
            title: "Flourish & Blotts",
            text1: "Online forum born to promote book reading: where you can give your opinion, mark your current readings and also buy book accessories.",
            text2: "For this project the tools used were Softr, Glide, Airtable, Zapier and Gumroad."
        },
        {
            imageUrl: "https://assets.softr-files.com/applications/157cf6c2-294a-4d76-9a8b-7138a29c1084/assets/8d4d288c-8211-4c74-936b-8ca4b55e1f75.png",
            imageLink: "https://clinica-flor-de-liz.softr.app",
            title: "Flor de Liz",
            text1: "Management page for a beauty studio. As a studio owner you can track your future appointments and your client's data. As a client you can manager your future appointments and ask for new ones.",
            text2: "For this project the tools used were Softr, Airtable and Zapier."
        }
    ];

    // Function to create project elements
    function createProjectElements(projects, containerId) {
        const container = document.getElementById(containerId);
        projects.forEach((project, index) => {
            const projectCard = document.createElement("div");
            projectCard.classList.add("project-card");
            projectCard.style.animationDelay = `${index * 0.2}s`; // animation

            const imageLink = document.createElement("a");
            imageLink.href = project.imageLink;
            imageLink.target = "_blank";

            const image = document.createElement("img");
            image.src = project.imageUrl;
            image.alt = project.title;

            imageLink.appendChild(image);

            const title = document.createElement("h3");
            title.textContent = project.title;

            const text1 = document.createElement("p");
            const text2 = document.createElement("p");
            text1.textContent = project.text1;
            text2.textContent = project.text2;

            projectCard.appendChild(imageLink);
            projectCard.appendChild(title);
            projectCard.appendChild(text1);
            projectCard.appendChild(text2);

            container.appendChild(projectCard);
        });
    }

    // Create Code projects
    createProjectElements(codeProjects, "code-projects");

    // Create No code projects
    createProjectElements(noCodeProjects, "no-code-projects");
});