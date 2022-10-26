const main_Video = document.getElementsByClassName('main_Vid')[0];

window.addEventListener('scroll',()=>{
    let Y = window.scrollY;
    let opacity = 60-(Y/7) > 0 ? 60-(Y/7) : 0;
    main_Video.style.opacity = `${opacity}%`;
});