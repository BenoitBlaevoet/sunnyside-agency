function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        document.attachEvent('onreadystatechange', function() {
        if (document.readyState != 'loading')
            fn();
        });
    }
}
  
  // test
window.ready(function() {
    let burgerOpen = false;
    let burgerBtn = document.getElementById('header__nav__burger');
    let menu = document.getElementById('header__nav__menu');
    burgerBtn.addEventListener('click',function(event){
        if(menu.classList.contains('nav--is-visible') ){
            menu.classList.remove('nav--is-visible')
        }else{
            menu.classList.add('nav--is-visible')
        }
    })

});