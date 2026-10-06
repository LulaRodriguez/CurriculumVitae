

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute(
        'aria-expanded',
        String(!open)
    );

    navMenu.classList.toggle('open');
});



document.querySelectorAll('.nav-menu a').forEach((a) => {
    a.addEventListener('click', () => {
        navMenu.classList.remove('open');

        menuToggle?.setAttribute(
            'aria-expanded',
            'false'
        );
    });
});



const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.experience-card');

filters.forEach((filter) => {
    filter.addEventListener('click', () => {

        
        filters.forEach((button) => {
            button.classList.remove('active');
        });

        filter.classList.add('active');


       
        const selected = filter.dataset.filter;


        
        cards.forEach((card) => {
            const categories = card.dataset.category.split(' ');

            card.classList.toggle(
                'hidden',
                selected !== 'all' && !categories.includes(selected)
            );
        });
    });
});



document.getElementById('year').textContent = new Date().getFullYear();
