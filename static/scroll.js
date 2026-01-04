document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll(".fade-up");

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        elements.forEach((el, index) => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 50) {
                // staggered animation delay
                setTimeout(() => {
                    el.classList.add("visible");
                }, index * 150);
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();
});
