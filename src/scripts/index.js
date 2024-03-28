/**
 * Dark and light theme logics
 */

// Selecting necessary DOM elements
const themeBtn = document.querySelector('#theme-btn');
let theme = 'light'; // Default theme is set to light
const dropDownMenu = document.querySelector('#dropdown-menu');
const heroSection = document.querySelector('#hero-section');
const darkTheme = document.querySelector('#menu-item-0');
const lightTheme = document.querySelector('#menu-item-1');
const systemTheme = document.querySelector('#menu-item-2');
const heroImage = document.querySelector('#hero-image');

// Function to toggle theme mode
const toggleThemeMode = () => {
    dropDownMenu.classList.toggle('h-0');
    dropDownMenu.classList.toggle('overflow-hidden');
};

// Event listener for theme button click
themeBtn.addEventListener('click', toggleThemeMode);

// Event listener for hero section click to close dropdown menu
heroSection.addEventListener('click', () => {
    dropDownMenu.classList.add('h-0');
    dropDownMenu.classList.add('overflow-hidden');
});

// Event listeners for theme options
darkTheme.addEventListener('click', () => {
    document.documentElement.classList.add('dark'); // Apply dark theme
    toggleThemeMode();
    themeBtn.innerHTML = `<i class="fa-regular fa-moon"></i>`; // Change theme button icon
    heroImage.src = 'public/images/Webinar-bro.svg'; // Change hero image
});

lightTheme.addEventListener('click', () => {
    document.documentElement.classList.remove('dark'); // Apply light theme
    toggleThemeMode();
    themeBtn.innerHTML = '<i class="fa-regular fa-lightbulb"></i>'; // Change theme button icon
    heroImage.src = 'public/images/webinar-rafiki.svg'; // Change hero image
});

systemTheme.addEventListener('click', () => {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (darkQuery) {
        document.documentElement.classList.add('dark'); // Apply dark theme based on system preference
    } else {
        document.documentElement.classList.remove('dark'); // Apply light theme based on system preference
    }
    toggleThemeMode();
    themeBtn.innerHTML = '<i class="fa-solid fa-computer"></i>'; // Change theme button icon
});

/**
 * Hamburger menu logic 
 */

// Selecting necessary DOM elements
const navBar = document.querySelector('#nav-bar');
const hamburger = document.querySelector('#hamburger');
const catagories = document.querySelectorAll('#catagory');
const signBtn = document.querySelector('#sign-btn');
const logBtn = document.querySelector('#log-btn');
const themeBtn2 = document.querySelector('#js-theme');

// Function to toggle mobile navigation
const toggleMobileNav = () => {
    hamburger.classList.toggle('h-1');
    hamburger.classList.toggle('h-0');
    hamburger.classList.toggle('after:rotate-45');
    hamburger.classList.toggle('after:-translate-y-2');
    hamburger.classList.toggle('before:-rotate-45');
    hamburger.classList.toggle('before:translate-y-3');

    navBar.classList.toggle('left-full');
    navBar.classList.toggle('overflow-hidden');
    signBtn.classList.toggle('hidden');
    logBtn.classList.toggle('hidden');
    themeBtn2.classList.toggle('hidden');
    catagories.forEach((catagoy) => {
        catagoy.classList.toggle('hidden');
    });
};

// Event listener for hamburger menu click
hamburger.addEventListener('click', toggleMobileNav);

/**
 * Number changing logic
 */

// Selecting DOM elements representing numeric values
const numFinish = document.querySelector('#js-finish');
const numYear = document.querySelector('#js-year');
const numExcellence = document.querySelector('#js-excellence');
const numBrand = document.querySelector('#js-brand');

// Function to update numeric values gradually
function changeNums() {
    let number1 = 1;
    let number2 = 1;
    let number3 = 1;
    let number4 = 1;
    let finishNum = 500;
    let yearsNum = 9;
    let excellenceNum = 350;
    let brandNum = 40;

    // Interval functions to update each numeric value
    let id1 = setInterval(() => {
        numFinish.innerHTML = `${number1}`;
        if (number1 >= finishNum) {
            clearInterval(id1);
        } else {
            number1++;
        }
    }, -2);

    let id2 = setInterval(() => {
        numYear.innerHTML = `${number2}`;
        if (number2 >= yearsNum) {
            clearInterval(id2);
        } else {
            number2++;
        }
    }, 200);

    let id3 = setInterval(() => {
        numExcellence.innerHTML = `${number3}`;
        if (number3 >= excellenceNum) {
            clearInterval(id3);
        } else {
            number3++;
        }
    }, 3);

    let id4 = setInterval(() => {
        numBrand.innerHTML = `${number4}`;
        if (number4 >= brandNum) {
            clearInterval(id4);
        } else {
            number4++;
        }
    }, 50);
}

// Call the function to start updating numeric values
changeNums();

/**
 * hero-image
 */
// Placeholder or reminder for future code related to hero image
