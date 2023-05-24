const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('js-animated-view');
        } else {
            entry.target.classList.remove('js-animated-view');
        }
    });
});


const hiddenElements = document.querySelectorAll('.js-animated');
hiddenElements.forEach((el) => observer.observe(el));