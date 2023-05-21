window.addEventListener('resize', function () {
    var windowWidth = window.innerWidth;
    var adjustment = Math.floor((2560 - windowWidth) / 5);
    document.documentElement.style.setProperty('--gap-adjustment', adjustment + 'px');
});
