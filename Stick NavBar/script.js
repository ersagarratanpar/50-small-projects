const nav = document.querySelector('.nav');

window.addEventListener('scroll', navFixed);

function navFixed() {
    if(window.scrollY > nav.offsetHeight + 50)
        {
            nav.classList.add('active');
        }
    else
        {
            nav.classList.remove('active');
        }
}