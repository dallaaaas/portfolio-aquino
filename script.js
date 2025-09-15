document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const skillsLink = document.getElementById("skills-link");
    const experienceLink = document.getElementById("experience-link");
    const projectsLink = document.getElementById("projects-link");

    const introductionSection = document.getElementById("introduction");
    const skillsSection = document.getElementById("skills");
    const experienceSection = document.getElementById("experience");
    const projectsSection = document.getElementById("projects");

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Adjust this value to control when the callback is triggered
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Change link colors when sections are in view
                if (entry.target === introductionSection) {
                    homeLink.classList.add("text-yellow-400");
                } else {
                    homeLink.classList.remove("text-yellow-400");
                }

                if (entry.target === skillsSection) {
                    skillsLink.classList.add("text-yellow-400");
                } else {
                    skillsLink.classList.remove("text-yellow-400");
                }

                if (entry.target === experienceSection) {
                    experienceLink.classList.add("text-yellow-400");
                } else {
                    experienceLink.classList.remove("text-yellow-400");
                }

                if (entry.target === projectsSection) {
                    projectsLink.classList.add("text-yellow-400");
                } else {
                    projectsLink.classList.remove("text-yellow-400");
                }
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    // Observe each section
    observer.observe(introductionSection);
    observer.observe(skillsSection);
    observer.observe(experienceSection);
    observer.observe(projectsSection);
});

window.onload = function() {
  const text = "Dallas Aquino";
  const typingText = document.getElementById('typing-text');
  
  let index = 0;

  function type() {
    if (index < text.length) {
      typingText.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, 300); // Adjust typing speed here
    }
  }

  type();
};


document.addEventListener("DOMContentLoaded", function () {
    const tools = document.querySelectorAll('.tool-container');
    let index = 0;

    function flashTool() {
        // Hide the previous tool
        if (index > 0) {
            tools[index - 1].classList.remove('flashing');
        }

        // Show current tool
        tools[index].classList.add('flashing');

        // Move to the next tool
        index++;
        if (index >= tools.length) {
            index = 0; // Reset to start
        }
    }

    // Initial flash of the first tool
    flashTool();
    
    // Schedule the flashing every 2 seconds
    setInterval(flashTool, 2000);
});

