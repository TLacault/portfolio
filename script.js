function scrollToElement(elementSelector, instance = 0) {
    // Select all elements that match the given selector
    const elements = document.querySelectorAll(elementSelector);
    // Check if there are elements matching the selector and if the requested instance exists
    if (elements.length > instance) {
        // Scroll to the specified instance of the element
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link_feature = document.getElementById("link_feature");
const link_about = document.getElementById("link_about");

link_feature.addEventListener('click', () => {
    scrollToElement('.header', 0);
});

link_about.addEventListener('click', () => {
    // Scroll to the second element with "header" class
    scrollToElement('.column');
});


function navigateTo(url) {
    // Use pushState to change the URL without reloading the page
    history.pushState({}, '', url);

    // Perform any additional actions, such as loading content dynamically

    // Optional: Prevent the default link behavior
    return false;
}

// Skills Filter
function filterSelection(category, button) {
    var cards = document.querySelectorAll('.skills .card');
    var filterButtons = document.querySelectorAll('.filter');

    // Check if the clicked filter is already selected
    var isSelected = button.classList.contains('selected');

    // If the clicked filter is not already selected, add the 'selected' class
    if (!isSelected) {
      // Remove the 'selected' class from all filter buttons
      filterButtons.forEach(function(btn) {
        btn.classList.remove('selected');
      });

      button.classList.add('selected');

      // Apply the filtering based on the selected category
      cards.forEach(function(card) {
        var categories = card.id;
        var shouldBeDisplayed = false;

        switch (category) {
          case 'languages':
            shouldBeDisplayed = (categories.includes('skill_c') ||
                                categories.includes('skill_cpp') ||
                                categories.includes('skill_sh') ||
                                categories.includes('skill_py') ||
                                categories.includes('skill_java') ||
                                categories.includes('skill_asm') ||
                                categories.includes('skill_ml')) &&
                                !categories.includes('skill_css');
                                // css was showing up even though it was not selected ¯\_(ツ)_/¯
            break;
          case 'web':
            shouldBeDisplayed = categories.includes('skill_html') ||
                                categories.includes('skill_css') ||
                                categories.includes('skill_js') ||
                                categories.includes('skill_md') ||
                                categories.includes('skill_json');
            break;
          case 'versioning':
            shouldBeDisplayed = categories.includes('skill_git') ||
                                categories.includes('skill_gh') ||
                                categories.includes('skill_gl') ||
                                categories.includes('skill_docker');
            break;
          case 'tools':
            shouldBeDisplayed = categories.includes('skill_vsc') ||
                                categories.includes('skill_emacs') ||
                                categories.includes('skill_gb') ||
                                categories.includes('skill_docker') ||
                                categories.includes('skill_linux');
            break;
        }

        card.style.display = shouldBeDisplayed ? 'block' : 'none';
      });
    } else {
      // If the clicked filter is already selected, remove the 'selected' class
      button.classList.remove('selected');

      // Show all cards as the "All" filter behavior
      cards.forEach(function(card) {
        card.style.display = 'block';
      });
    }
}
