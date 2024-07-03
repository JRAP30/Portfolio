document.addEventListener('DOMContentLoaded', function () {
    // Arrays for Code and No code projects
    const codeProjects = [
        {
            imageUrl: 'https://example.com/project1.jpg',
            title: 'Code Project 1',
            text: 'Description of Code Project 1.'
        },
        {
            imageUrl: 'https://example.com/project2.jpg',
            title: 'Code Project 2',
            text: 'Description of Code Project 2.'
        },
        {
            imageUrl: 'https://example.com/project3.jpg',
            title: 'Code Project 3',
            text: 'Description of Code Project 3.'
        }
    ];

    const noCodeProjects = [
        {
            imageUrl: 'https://example.com/project4.jpg',
            title: 'No Code Project 1',
            text: 'Description of No Code Project 1.'
        },
        {
            imageUrl: 'https://example.com/project5.jpg',
            title: 'No Code Project 2',
            text: 'Description of No Code Project 2.'
        },
        {
            imageUrl: 'https://example.com/project6.jpg',
            title: 'No Code Project 3',
            text: 'Description of No Code Project 3.'
        }
    ];

    // Function to create project elements
    function createProjectElements(projects, containerId) {
        const container = document.getElementById(containerId);
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            projectCard.style.animationDelay = `${index * 0.2}s`; // Delay animation

            const imageLink = document.createElement('a');
            imageLink.href = project.imageUrl;
            imageLink.target = '_blank'; // Open link in new tab

            const image = document.createElement('img');
            image.src = project.imageUrl;
            image.alt = project.title;

            imageLink.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = project.title;

            const text = document.createElement('p');
            text.textContent = project.text;

            projectCard.appendChild(imageLink);
            projectCard.appendChild(title);
            projectCard.appendChild(text);

            container.appendChild(projectCard);
        });
    }

    // Create Code projects
    createProjectElements(codeProjects, 'code-projects');

    // Create No code projects
    createProjectElements(noCodeProjects, 'no-code-projects');
});