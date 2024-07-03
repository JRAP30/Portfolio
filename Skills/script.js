document.addEventListener('DOMContentLoaded', function () {
    // Arrays for skills categories
    const programmingSkills = [
        { logoUrl: 'logo1.png', name: 'JavaScript' },
        { logoUrl: 'logo2.png', name: 'Python' },
        { logoUrl: 'logo3.png', name: 'Java' },
                { logoUrl: 'logo1.png', name: 'JavaScript' },
        { logoUrl: 'logo2.png', name: 'Python' },
        { logoUrl: 'logo3.png', name: 'Java' }
        // Add more programming skills as needed
    ];

    const itSkills = [
        { logoUrl: 'logo4.png', name: 'Networking' },
        { logoUrl: 'logo5.png', name: 'Security' },
        { logoUrl: 'logo6.png', name: 'Database Management' }
        // Add more IT skills as needed
    ];

    const noCodeSkills = [
        { logoUrl: 'logo7.png', name: 'WordPress' },
        { logoUrl: 'logo8.png', name: 'Wix' },
        { logoUrl: 'logo9.png', name: 'Shopify' }
        // Add more no code skills as needed
    ];

    const languageSkills = [
        { logoUrl: 'logo10.png', name: 'English' },
        { logoUrl: 'logo11.png', name: 'Spanish' },
        { logoUrl: 'logo12.png', name: 'French' }
        // Add more language skills as needed
    ];

    // Function to create skill elements
    function createSkillElements(skills, containerId) {
        const container = document.getElementById(containerId);
        skills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');
            skillCard.style.animationDelay = `${index * 0.2}s`; // Delay animation

            const logo = document.createElement('img');
            logo.src = skill.logoUrl;
            logo.alt = skill.name;

            const name = document.createElement('p');
            name.textContent = skill.name;

            skillCard.appendChild(logo);
            skillCard.appendChild(name);

            container.appendChild(skillCard);
        });
    }

    // Create Programming skills
    createSkillElements(programmingSkills, 'programming-skills');

    // Create IT skills
    createSkillElements(itSkills, 'it-skills');

    // Create No code skills
    createSkillElements(noCodeSkills, 'no-code-skills');

    // Create Language skills
    createSkillElements(languageSkills, 'language-skills');
});