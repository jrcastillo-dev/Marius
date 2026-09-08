/* ========================================
   STUDENT INFORMATION
======================================== */

function displayMessage() {

    const studentInfo = `
        <div class="info-box">

            <h2>Student Information</h2>

            <p>
                <strong>Name:</strong>
                Marius Ahron G. Pating
            </p>

            <p>
                <strong>Program:</strong>
                Bachelor of Science in Computer Science
            </p>

            <p>
                <strong>Year Level:</strong>
                3rd Year
            </p>

            <hr>

            <p>
                <strong>Date & Time:</strong>
            </p>

            <p>
                ${new Date().toLocaleString()}
            </p>

        </div>
    `;

    document.getElementById("studentInfo").innerHTML = studentInfo;
}


/* ========================================
   FEATURE DISPLAY
======================================== */

function showFeature(title, content) {

    const featureInfo = document.getElementById("featureInfo");

    featureInfo.innerHTML = `
        <div class="feature-box">

            <h3>${title}</h3>

            <p>${content}</p>

        </div>
    `;
}


/* ========================================
   ABOUT ME
======================================== */

function showAbout() {

    showFeature(
        "About Me",
        "I am Marius Ahron G. Pating, a 3rd year Computer Science student interested in technology, web development, programming, and learning new skills."
    );
}


/* ========================================
   SKILLS
======================================== */

function showSkills() {

    showFeature(
        "My Skills",
        "HTML, CSS, JavaScript, Python, Problem Solving, and basic Web Development."
    );
}


/* ========================================
   PROJECTS
======================================== */

function showProjects() {

    showFeature(
        "My Projects",
        "My current projects include a futuristic student profile website and beginner Python projects focused on programming and data processing."
    );
}


/* ========================================
   ACHIEVEMENTS
======================================== */

function showAchievements() {

    showFeature(
        "Achievements",
        "I am currently developing my skills as a Computer Science student and participating in academic and Computer Science activities."
    );
}


/* ========================================
   GOALS
======================================== */

function showGoals() {

    showFeature(
        "My Goals",
        "My goal is to become a better programmer, improve my web development skills, and create useful and creative software projects."
    );
}


/* ========================================
   RANDOM FUN FACT
======================================== */

function showFunFact() {

    const facts = [

        "I enjoy learning new programming skills.",

        "I am currently studying Computer Science.",

        "I am interested in web development.",

        "I am learning both front-end and programming fundamentals.",

        "I enjoy experimenting with website designs."

    ];

    const randomIndex = Math.floor(Math.random() * facts.length);

    showFeature(
        "Fun Fact",
        facts[randomIndex]
    );
}


/* ========================================
   LIVE DATE & TIME
======================================== */

function showDateTime() {

    const featureInfo = document.getElementById("featureInfo");

    featureInfo.innerHTML = `
        <div class="feature-box live-clock">

            <h3>Live Date & Time</h3>

            <p id="liveDateTime"></p>

        </div>
    `;

    updateLiveTime();
}


/* ========================================
   UPDATE LIVE TIME
======================================== */

function updateLiveTime() {

    const clock = document.getElementById("liveDateTime");

    if (clock) {

        const now = new Date();

        clock.textContent = now.toLocaleString();

    }
}


/* ========================================
   FOOTER CLOCK
======================================== */

function updateFooterClock() {

    const footerClock = document.getElementById("footerClock");

    if (footerClock) {

        const now = new Date();

        footerClock.textContent =
            "Current Time: " + now.toLocaleTimeString();

    }
}

setInterval(updateFooterClock, 1000);

setInterval(updateLiveTime, 1000);

updateFooterClock();


/* ========================================
   THEME TOGGLE
======================================== */

function toggleTheme() {

    document.body.classList.toggle("alternate-theme");

}
    

/* ========================================
   TYPING EFFECT
======================================== */

const typingText = document.getElementById("typingText");

const typingMessage =
    "Aspiring Web Developer & Programmer";

let typingIndex = 0;

function typeText() {

    if (typingIndex < typingMessage.length) {

        typingText.textContent +=
            typingMessage.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeText, 80);

    }

}

typeText();
 
