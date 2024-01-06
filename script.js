const menuLinks = document.querySelectorAll('.header__link[data-goto]');
                              

if (menuLinks.length > 0) {
     menuLinks.forEach(menuLink => {
menuLink.addEventListener("click", onMenuLinkClick);
     });




     function onMenuLinkClick(e){
        const menuLink = e.target;
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
           
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue =gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header__block'); 








            if (menuBurger.classList.contains('__active2')){
                document.body.classList.remove('__lock');
                menuBurger.classList.remove('__active2');
                menuBlock.classList.remove('__active');
            }


            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }



    }

}




const menuBurger = document.querySelector('.header__menu');
const menuBlock = document.querySelector('.header__block');

function menuChange(){
    menuBlock.classList.toggle('__active');
    menuBurger.classList.toggle('__active2');
    document.body.classList.toggle('__lock');
}

menuBurger.addEventListener('click', menuChange);