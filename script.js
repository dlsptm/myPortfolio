
//************** HEADER EVENT ***************/

const dynamicText = document.querySelector(".auto-type");
const words = ["organisée", "autonome", "patiente", "créative"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");
    if (!isDeleting && charIndex < currentWord.length) {

        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {

        charIndex--;
        setTimeout(typeEffect, 100);
    } else {

        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();


//************** MY ABOUT-ME EVENT ***************/

const aboutMe = document.querySelector('.about-me')


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY <= 500) {
        aboutMe.style.opacity = '0'
        aboutMe.style.left = "-150px"

    } else {
        aboutMe.style.opacity = '1'
        aboutMe.style.left = "0"
    }
});


window.addEventListener('scroll', () => {
    console.log(window.scrollY)
})


//************** MY PROJECT EVENT ***************/

let element = document.querySelector(".myprojects");
let project1 = document.querySelector('.myprojects-container:first-child');
let project2 = document.querySelector('.myprojects-container:last-child');
let title = document.querySelector('.myprojects h2')


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY <= 1400) {
        element.style.background = '#f5f5f5';
        project1.style.left = "-1500px";
        project2.style.left = "1500px";
        project1.style.opacity = "0";
        project2.style.opacity = "0";
        title.style.opacity = "0"

    } else {
        element.style.background = '#eebb55';
        project1.style.left = "0";
        project2.style.left = "0";
        project1.style.opacity = "1";
        project2.style.opacity = "1";
        title.style.opacity= "1"
    }
});


//************** MY CONTACT EVENT ***************/

let firstName = document.getElementById('fname')
let LastName = document.getElementById('lname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let message = document.getElementById('message')
let submit = document.getElementById('submit')


window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY <= 2600) {
        firstName.style.right = "-1700px";

    } else {
        firstName.style.right = "0";
    }

    if (scrollY <= 2650) {
        LastName.style.right = "-3700px";
    } else {
        LastName.style.right = "0";
    }

    if (scrollY <= 2700) {
        email.style.right = "-5700px";

    } else {
        email.style.right = "0";
    }


    if (scrollY <= 2750) {
        phone.style.right = "-7700px";

    } else {
        phone.style.right = "0";
    }


    if (scrollY <= 2800) {
        message.style.right = "-9700px";

    } else {
        message.style.right = "0";
    }


    if (scrollY <= 2850) {
        submit.style.right = "-11000px";

    } else {
        submit.style.right = "0";
    }
});
