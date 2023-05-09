function go_to_section(section) {
    let offset = 0;

    switch (section) {
        case "about_section":
            offset = +70;
            break;
        case "skills_section":
        case "work_section":
            offset = +100;
            break;
        case "contact_section":
            offset = +405;
            break;
        default:
            offset = 0;
    }

    window.scroll({
        top: document.getElementById(section).offsetTop + offset,
        left: 0,
        behavior: 'smooth'
    });
}


const circle = document.querySelector('.circle_1');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});