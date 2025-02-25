const tooltip = document.querySelector('.tooltip');
const continents = document.querySelectorAll ('.continent');
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');

continents.forEach(continent => {
    continent.addEventListener('click', function() {
        popup.querySelector('.info__photo').setAttribute('src', this.dataset.photo);
        popup.querySelector('.info_title').innerText = this.dataset.title;
        popup.querySelector('.info__text').innerText = this.dataset.description;
        popupBg.classList.add('active');
    });
    
    continent.addEventListener('mousemove', function(e) {
        tooltip.innerText = this.dataset.title;
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });

    continent.addEventListener('mouseenter', function() {
        tooltip.style.display = 'block';
    });

    continent.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
});

document.addEventListener('click', (e) => {
    if(e.target === popupBg) {
        popupBg.classList.remove('active');
    }
})