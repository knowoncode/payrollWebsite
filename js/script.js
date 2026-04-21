document.addEventListener('DOMContentLoaded', () => {
    
    // --- Carousel Logic (Only runs if carousel exists on the page) ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 3000);
    }

    // --- Number Counter Animation (Only runs if counters exist) ---
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length > 0) {
        const speed = 200; // lower is faster
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            counter.innerText = '0';
            
            const updateCount = () => {
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target.toLocaleString(); // Add commas
                }
            };
            updateCount();
        });
    }
});