const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav items updated so it's seen
const navItems = document.querySelectorAll('nav a');
navItems[0].textContent = siteContent['nav']['nav-item-1'];
navItems[1].textContent = siteContent['nav']['nav-item-2'];
navItems[2].textContent = siteContent['nav']['nav-item-3'];
navItems[3].textContent = siteContent['nav']['nav-item-4'];
navItems[4].textContent = siteContent['nav']['nav-item-5'];
navItems[5].textContent = siteContent['nav']['nav-item-6'];

//prepend and append
const menu = document.querySelector('nav');

const lastMenuItem = document.createElement('a');
lastMenuItem.textContent = 'Learn More';
menu.appendChild(lastMenuItem);
const firstMenuItem = document.createElement('a');
firstMenuItem.textContent = 'Home';
menu.prepend(firstMenuItem);


firstMenuItem.style.color = 'green';
lastMenuItem.style.color = 'green';

// Making navBar the color green
navItems.forEach(item => item.style.color = 'green');

//CTA
const ctaHeading = document.querySelector(' h1');
ctaHeading.textContent = "Dom Is Awesome";

ctaHeading.style.width = '41%';

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent['cta']['img-src'];
ctaImage.alt = 'Circle image of code'

// Headings

const topHeadings = document.querySelectorAll('.top-content .text-content h4');
topHeadings[0].textContent = siteContent['main-content']['features-h4'];
topHeadings[1].textContent = siteContent['main-content']['about-h4'];

const firstText = document.querySelectorAll('.top-content .text-content p');
firstText[0].textContent = siteContent['main-content']['features-content'];
firstText[1].textContent = siteContent['main-content']['about-content'];


// Middle Photo

const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];
middleImg.alt =  'Photo of code on computer screen'

// Bottom Content

const bottomHeadings = document.querySelectorAll('.bottom-content .text-content h4');
bottomHeadings[0].textContent = siteContent['main-content']['services-h4'];
bottomHeadings[1].textContent = siteContent['main-content']['product-h4'];
bottomHeadings[2].textContent = siteContent['main-content']['vision-h4'];

const bottomText = document.querySelectorAll('.bottom-content .text-content p');
bottomText[0].textContent = siteContent['main-content']['services-content'];
bottomText[1].textContent = siteContent['main-content']['product-content'];
bottomText[2].textContent = siteContent['main-content']['vision-content'];

// Contact Section

const contactHeadings = document.querySelector('.contact h4');
contactHeadings.textContent = siteContent['contact']['contact-h4'];

const contactLabels = document.querySelectorAll('.contact p');
contactLabels[0].textContent = siteContent['contact']['address'];
contactLabels[1].textContent = siteContent['contact']['phone'];
contactLabels[2].textContent = siteContent['contact']['email'];

// Footer Content

const copyright = document.querySelector('footer p');
copyright.textContent = siteContent['footer']['copyright'];










