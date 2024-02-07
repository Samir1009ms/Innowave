var scrollBtn = document.querySelector(".scroll")
const header = document.querySelector('.header');
const headerTop = document.querySelector('.container_right_top');
const searchIcon = document.querySelector('.fa-magnifying-glass');
const search = document.querySelector('.search');
const close = document.querySelector('.fa-xmark');

scrollBtn.addEventListener(('click'), () => {

    setTimeout(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
        clearTimeout();
    }, 1300);
})

window.addEventListener(('scroll'), () => {

    if (window.scrollY > 500) {
        setTimeout(() => {
            scrollBtn.style.transform = `translateY(${10 * 1}px)`
            clearTimeout();
        }, 10);

    } else {
        scrollBtn.style.transform = `translateY(${93 * 1}px)`
    }
})
window.addEventListener('scroll', () => {
    header.style.position = 'fixed';

    if (window.scrollY > 300) {
        setTimeout(() => {
            header.style.transition = 'all 0.9s ease';
            header.style.transform = 'translateY(0)';
            headerTop.style.display = 'none';
            clearTimeout();
        }, 10);
    } else {
        if (window.scrollY > 150) {
            header.style.transform = 'translateY(-190px)';
            header.style.transition = 'all 0s ease';
            headerTop.style.display = 'none';

        } else {
            header.style.transform = 'translateY(0)';
            header.style.position = 'relative';
            headerTop.style.display = 'flex';

        }
    }
});


searchIcon.addEventListener('click', () => {
    search.classList.toggle('active_search');
})

close.addEventListener('click', () => {
    search.classList.remove('active_search');
})