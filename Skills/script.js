document.addEventListener('DOMContentLoaded', function () {
    const programmingSkills = [
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', name: 'JavaScript' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', name: 'HTML' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/16020/16020753.png', name: 'CSS' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png', name: 'SQL' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png', name: 'Python' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/3825/3825480.png', name: 'VBA' }
    ];

    const itSkills = [
        { logoUrl: 'https://seeklogo.com/images/P/power-bi-icon-logo-E1B451ED39-seeklogo.com.png', name: 'Power BI' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/16509/16509278.png', name: 'Excel' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/16509/16509293.png', name: 'Word' },
        { logoUrl: 'https://cdn-icons-png.flaticon.com/512/16509/16509298.png', name: 'PowerPoint' },
    ];

    const noCodeSkills = [
        { logoUrl: 'https://asset.brandfetch.io/idytCFzVcY/id3yX15qlX.svg', name: 'Softr' },
        { logoUrl: 'https://res.cloudinary.com/dbyioi2qq/q_auto/v1678345076/sdQwjLNf/variantdarkfvicopng_1678345076_71011.png', name: 'CodeDesign' },
        { logoUrl: 'https://asset.brandfetch.io/idMw8qr5lW/id0MbSsj8u.png', name: 'Gumroad' },
        { logoUrl: 'https://asset.brandfetch.io/idgSjSXjpz/idDUu_JkOz.svg', name: 'Glide' },
        { logoUrl: 'https://asset.brandfetch.io/iddsnRzkxS/iddyj0wl13.svg', name: 'Airtable' },
        { logoUrl: 'https://asset.brandfetch.io/idNMs_nMA0/iddCCtmu74.jpeg', name: 'Zapier' }
    ];

    // Function to create skill elements
    function createSkillElements(skills, containerId) {
        const container = document.getElementById(containerId);
        skills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill-card');
            skillCard.style.animationDelay = `${index * 0.3}s`;

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

    createSkillElements(programmingSkills, 'programming-skills');

    createSkillElements(itSkills, 'it-skills');

    createSkillElements(noCodeSkills, 'no-code-skills');
});