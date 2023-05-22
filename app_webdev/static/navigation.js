//verificar se o arquivo está sendo carregado.
console.log('navigation.js loaded');

//correção de scroll
window.addEventListener('load', function () {
    setTimeout(() => {
        window.scrollTo({
            top: 111,
            behavior: 'smooth'
        });
    }, 200);
});

//correção addListener scroll
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if (scrollPosition < 111) {
        document.documentElement.style.setProperty('--nuvens', 'fixed')
    } else if (scrollPosition > 511) {
        document.documentElement.style.setProperty('--nuvens', 'unset')
    }
});

