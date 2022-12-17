//Intersection animation for sections

function setup() {
    let options = {
        rootMargin: '0px 0px -200px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.toggle('active');
                observer.unobserve(entry.target);
            } else {
                return;
            }
        })
    }, options);

    const obs = document.getElementsByClassName('client-show');
    observer.observe(obs);
}