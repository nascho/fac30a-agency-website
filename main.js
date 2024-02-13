const siteName  = 'Pawsitive Haven Adoption Agency';


/* ----
Menu
----- */

const toggleBtn = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleBtn.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})


/* -----
Buttons - Read More / Read Less and Show More / Show Less
----- */

let readMoreBtns = document.querySelectorAll('.read-more-btn');

readMoreBtns.forEach(btn => {
    btn.addEventListener('click', changeClass);
})

function changeClass(e) {
    let btn = e.target;
    let content = e.target.parentNode;
    let toggleEl = content.querySelector('.extra-content');

    toggleEl.classList.toggle('display-content');

    if (toggleEl.classList.contains('display-content')) {
        btn.innerHTML = 'Read Less...';
    } else {
        btn.innerHTML = 'Read More...'
    }
}

const displayImageBtn = document.querySelector('.display-image-btn');

displayImageBtn.addEventListener('click', showImages);

function showImages(e) {
    const btn = e.target;
    let parentContainer = e.target.parentNode;
    console.log(parentContainer);
    let images = parentContainer.querySelector('.hide-cat-image');
    console.log(images)

    images.classList.toggle('display-content');

    if (images.classList.contains('display-content')) {
        btn.innerHTML = 'Show Less...';
    } else {
        btn.innerHTML = 'Show More...'
    }

}

/* -----
Footer 
----- */

// copyright date, left div
let year = new Date().getFullYear();
const copyRight = `&copy; ${year} - ${siteName} - All rights reserved.`;
let currentYear = document.querySelector('#currentYear').innerHTML = copyRight;

// right div
const footerRightDiv = document.querySelector('footer div#right').textContent = `Website by ${siteName}`;
