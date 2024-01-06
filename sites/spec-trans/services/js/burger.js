const menuLinks = document.querySelectorAll('.navigation__tab[data-goto]');

if (menuLinks.length > 0) {
     menuLinks.forEach(menuLink => {
menuLink.addEventListener("click", onMenuLinkClick);
     });


     function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
           
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('navigation');  




            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
     }
}  


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}