const Nav = document.getElementsByClassName('Nav')[0];

window.addEventListener('scroll',()=>{
    let Y = window.scrollY;
    let opacity = 100-(Y/6) > 0 ? 100-(Y/7) : 0;
    Nav.style.opacity = `${100-opacity}%`;
});