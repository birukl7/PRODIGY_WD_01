/**
 * Dark and light theme logics
 */

const themeBtn = document.querySelector('#theme-btn')
let theme = 'light';
const dropDownMenu = document.querySelector('#dropdown-menu')
const heroSection = document.querySelector('#hero-section');
const darkTheme = document.querySelector('#menu-item-0')
const lightTheme = document.querySelector('#menu-item-1')
const systemTheme = document.querySelector('#menu-item-2')
const heroImage = document.querySelector('#hero-image')

const toggleThemeMode = ()=>{
    dropDownMenu.classList.toggle('h-0')
    dropDownMenu.classList.toggle('overflow-hidden')
}

themeBtn.addEventListener('click', toggleThemeMode)
heroSection.addEventListener('click', ()=>{
    dropDownMenu.classList.add('h-0')
    dropDownMenu.classList.add('overflow-hidden')
})

darkTheme.addEventListener('click', ()=>{
    document.documentElement.classList.add('dark');
    toggleThemeMode()
    themeBtn.innerHTML = 'dark';
    console.log(heroImage.src)
    heroImage.src = 'public/images/blue-illustration.png'
})

lightTheme.addEventListener('click', ()=>{
    document.documentElement.classList.remove('dark');
    toggleThemeMode()
    themeBtn.innerHTML = 'Light';
    
    heroImage.src = 'public/images/webinar-rafiki.svg'
})

systemTheme.addEventListener('click', ()=>{
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if(darkQuery){
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    toggleThemeMode()
    themeBtn.innerHTML = 'System';
})

/**
 * hamburger menu logic 
 */

const navBar = document.querySelector('#nav-bar');
const hamburger = document.querySelector('#hamburger');
const catagories = document.querySelectorAll('#catagory')
const toggleMobileNav = () => {
    hamburger.classList.toggle('h-1')
    hamburger.classList.toggle('h-0')
    hamburger.classList.toggle('after:rotate-45')
    hamburger.classList.toggle('after:-translate-y-2')
    hamburger.classList.toggle('before:-rotate-45')
    hamburger.classList.toggle('before:translate-y-3')

    navBar.classList.toggle('left-full');
    navBar.classList.toggle('overflow-hidden');
    catagories.forEach((catagoy)=>{
        catagoy.classList.toggle('hidden')
    })
  };

  hamburger.addEventListener('click', toggleMobileNav);

/**
 * hero-image
 */


