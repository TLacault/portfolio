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


const circle = document.querySelector('.home_cir_1');

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circle.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
});


window.addEventListener('scroll', function () {
    var scrollPosition = window.pageYOffset;

    if (scrollPosition >= 1500) {
        document.querySelector('.background').style.background = 'rgba(216, 222, 233, 1)';
    } else {
        document.querySelector('.background').style.background = 'rgba(67, 76, 94, 1)';
    }
});
