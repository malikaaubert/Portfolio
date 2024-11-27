const sliders = document.querySelectorAll('.project-slider');
sliders.forEach(slider => {
    let index = 0;
    const images = slider.querySelectorAll('img');
    const prevBtn = slider.nextElementSibling.querySelector('.prev');
    const nextBtn = slider.nextElementSibling.querySelector('.next');

    function updateSlider() {
        images.forEach((img, i) => {
            img.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    prevBtn.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : images.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        index = (index < images.length - 1) ? index + 1 : 0;
        updateSlider();
    });

    updateSlider();
});
