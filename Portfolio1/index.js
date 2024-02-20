function showHome() {
    hideAllSections();
    document.getElementById("home-section").style.display = "block";
    // Typewriter effect initialization
    var app = document.getElementById('app');
    var typewriter = new Typewriter(app, {
        loop: true
    });
    typewriter.typeString('Welcome to My Portfolio.')
        .pauseFor(2500)
        .start();
}

function showAbout() {
    hideAllSections();
    document.getElementById("about-section").style.display = "block";
    document.body.classList.add('about-bg');
}

function showSkills() {
    hideAllSections();
    document.getElementById("skills-section").style.display = "block";
    document.body.classList.add('skills-bg');
}

function showContact() {
    hideAllSections();
    document.getElementById("contact-section").style.display = "block";
    document.body.classList.remove('about-bg');
    document.body.classList.remove('skills-bg');
}

function showLogin() {
    hideAllSections();
    document.getElementById("loginPage").style.display = "block";
}

function showSignUp() {
    hideAllSections();
    document.getElementById("signupPage").style.display = "block";
}

function hideAllSections() {
    var sections = document.querySelectorAll(".home-section, .about-section, .skills-section, .contact-container, #loginPage, #signupPage");
    sections.forEach(function (section) {
        section.style.display = "none";
    });
    document.body.classList.remove('about-bg');
    document.body.classList.remove('skills-bg');

}

// Call showHome() when the page loads
window.onload = showHome;