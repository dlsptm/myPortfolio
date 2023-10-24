
//************** HEADER EVENT ***************/

const dynamicText = document.querySelector(".auto-type");
const words = ["organized", "adaptable", "resilient", "creative"];

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

const observer = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform:'translateX(-50px)', opacity: 0},
                {transform:'translateX(0px)', opacity: 1},
            ], {
                duration: 300
            })
        }
    }
})


observer.observe(document.querySelector('.about-me-description'))
observer.observe(document.querySelector('.about-me-my-skills'))



//************** MY PROJECT EVENT ***************/

const observeProject1 = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform:'translateX(-100px)', opacity: 0},
                {transform:'translateX(0px)', opacity: 1},
            ], {
                duration: 500
            })
        }
    }
})
observeProject1.observe(document.querySelector('.myprojects-container:first-child'))


const observeProject2 = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform:'translateX(100px)', opacity: 0},
                {transform:'translateX(0px)', opacity: 1},
            ], {
                duration: 300
            })
            //observer.unobserve(entry.target)
        }
    }
})
observeProject2.observe(document.querySelector('.myprojects-container:last-child'))



//************** MY CONTACT EVENT ***************/


const observerContact = new IntersectionObserver((entries) => {
    for(const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.animate([
                {transform:'translateX(-300px)', opacity: 0},
                {transform:'translateX(0px)', opacity: 1},
            ], {
                duration: 500
            })            
        }
    }
})


observerContact.observe(document.getElementById('fname'))
observerContact.observe(document.getElementById('lname'))
observerContact.observe(document.getElementById('entreprise'))
observerContact.observe(document.getElementById('email'))
observerContact.observe(document.getElementById('phone'))
observerContact.observe(document.getElementById('message'))
observerContact.observe(document.getElementById('submit'))
