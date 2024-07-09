document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('info-text-1').textContent = 'Let’s connect! Feel free to reach out—I’d love to hear from you!';
    document.getElementById('info-text-2').textContent = 'JPaulino0530@gmail.com';
    document.getElementById('info-text-3').textContent = '  Northampton, UK';

    const info_icons = [
        {
            infoUrl: "https://www.linkedin.com/in/joana-paulino-4684879a",
            infoTarget: "_blank",
            iconName: "logo-linkedin"
        },
        {
            infoUrl: "mailto:jpaulino0530@gmail.com",
            infoTarget: "_self",
            iconName: "mail-outline"
        }
    ];

    function createIconElements(iconsArray) {
        const container = document.getElementById("info-icons");
        iconsArray.forEach((linkInfo) => {
            const iconItem = document.createElement("a");
            iconItem.href = linkInfo.infoUrl;
            iconItem.target = linkInfo.infoTarget;
            
            const iconImage = document.createElement("ion-icon");
            iconImage.name = linkInfo.iconName;

            iconItem.prepend(iconImage);

            container.appendChild(iconItem);
        });
    }

    // Create Code projects
    createIconElements(info_icons);

});
