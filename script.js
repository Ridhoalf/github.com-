
let sections = document.querySelectorA11("section");
let navLinks = document.querySelectorAll("nav-link");

window.onscroll = () => {
     sections. forEach(sec => {
         let top = window.scrollY;
         let offset = sec.offsetTop - 200;
         let height = sec.offsetHeight;
         let id = sec.getAttribute('id');

         if(top >= offset && top < offset + height) {
             navLinks.forEach(links => {
                 links.classList.remove("nav-link");
                 document.querySelector('nav ul li a [href*=' + id + ']').classList.add('nav-link');
             });
         };
     });
};

