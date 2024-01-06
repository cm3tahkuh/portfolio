/*------------NAVIGATION_PAGE----------*/


const menuLinks = document.querySelectorAll('.menu__link[data-goto]');

if (menuLinks.length > 0) {
     menuLinks.forEach(menuLink => {
menuLink.addEventListener("click", onMenuLinkClick);
     });


     function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header');  

            if (iconMenu.classList.contains('_active')){
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
     }
}  


const menuLinks2 = document.querySelectorAll('._nav[data-goto]');

if (menuLinks2.length > 0) {
     menuLinks2.forEach(menuLink => {
menuLink.addEventListener("click", onMenuLinkClick);
     });


     function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header');  
            

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
     }
}  


/*--------------MENU-BURGER-----------------*/


const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}