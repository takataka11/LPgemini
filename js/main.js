document.addEventListener('DOMContentLoaded', () => {
    // --- Header Scroll Effect ---
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // --- Intersection Observer for Animations ---
    const animatedElements = document.querySelectorAll('.slide-in-from-left, .slide-in-from-right');
    if (animatedElements.length) {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');

                    // --- Stock Bar Animation ---
                    if (entry.target.classList.contains('stock-info')) {
                        const stockProgress = entry.target.querySelector('.stock-progress');
                        if (stockProgress) {
                            // Use setTimeout to ensure the transition is visible
                            setTimeout(() => {
                                stockProgress.style.width = stockProgress.dataset.width;
                            }, 200);
                        }
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});
