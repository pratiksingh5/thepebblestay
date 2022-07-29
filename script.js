let menubar = document.querySelector('.menubar');
let mobileNav = document.querySelector('.mobile-nav');
let close = document.querySelector('#close');


menubar.addEventListener('click',(e)=>{
    mobileNav.style.transform = 'translateY(0)'
})

close.addEventListener('click',(e)=>{
    mobileNav.style.transform = 'translateY(-100%)'
})