window.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome-screen');
    const logoAnim = document.getElementById('logo-anim');
    const sloganAnim = document.getElementById('slogan-anim');

    // Paso 1: mostrar logo centrado (ya está por defecto)
    // Paso 2: mover logo a la izquierda y mostrar slogan
    setTimeout(() => {
        logoAnim.classList.add('shifted');
        setTimeout(() => {
            sloganAnim.classList.add('visible');
        }, 600);
    }, 1000);

    // Paso 3: Fade out animación completa
    setTimeout(() => {
        welcome.style.opacity = 0;
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 1000);
    }, 3200);

    // --- Menú responsive ---
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('show');
    });

    document.addEventListener('click', function(e) {
        const nav = document.querySelector('nav');
        if (window.innerWidth <= 700) {
            if (!nav.contains(e.target)) {
                navList.classList.remove('show');
            }
        }
    });

    // --- Navegación de secciones ---
    const links = navList.querySelectorAll('a[data-section]');
    const sections = document.querySelectorAll('.main-section');
    links.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            sections.forEach(sec => sec.style.display = 'none');
            const sectionId = 'section-' + link.dataset.section;
            document.getElementById(sectionId).style.display = '';
            navList.classList.remove('show');
        });
    });

    // --- Slider imágenes por sección ---
    const sliderData = {
        residential: [
            {src: 'images/img1.jpg', alt: 'Imagen Residential 1'},
            {src: 'images/img2.jpg', alt: 'Imagen Residential 2'},
            {src: 'images/img3.jpg', alt: 'Imagen Residential 3'}
        ],
        social: [
            {src: 'images/img2.jpg', alt: 'Imagen Social 1'},
            {src: 'images/img3.jpg', alt: 'Imagen Social 2'},
            {src: 'images/img1.jpg', alt: 'Imagen Social 3'}
        ],
        flipping: [
            {src: 'images/img3.jpg', alt: 'Imagen Flipping 1'},
            {src: 'images/img1.jpg', alt: 'Imagen Flipping 2'},
            {src: 'images/img2.jpg', alt: 'Imagen Flipping 3'}
        ],
        studio: [
            {src: 'images/img1.jpg', alt: 'Imagen Studio 1'},
            {src: 'images/img2.jpg', alt: 'Imagen Studio 2'},
            {src: 'images/img3.jpg', alt: 'Imagen Studio 3'}
        ],
        contact: [
            {src: 'images/img2.jpg', alt: 'Imagen Contact 1'},
            {src: 'images/img3.jpg', alt: 'Imagen Contact 2'},
            {src: 'images/img1.jpg', alt: 'Imagen Contact 3'}
        ]
    };

    Object.keys(sliderData).forEach(section => {
        let current = 0;
        const layout = document.querySelector(`.slider-layout[data-section="${section}"]`);
        if (!layout) return;
        const img = layout.querySelector(`#img-${section}`);
        const indicator = layout.querySelector(`#indicator-${section}`);
        const leftBtn = layout.querySelector('.slider-nav.left');
        const rightBtn = layout.querySelector('.slider-nav.right');
        const total = sliderData[section].length;

        function updateSlider() {
            img.src = sliderData[section][current].src;
            img.alt = sliderData[section][current].alt;
            indicator.textContent = `${String(current + 1).padStart(2, '0')} — ${String(total).padStart(2, '0')}`;
        }

        leftBtn.addEventListener('click', () => {
            current = (current - 1 + total) % total;
            updateSlider();
        });

        rightBtn.addEventListener('click', () => {
            current = (current + 1) % total;
            updateSlider();
        });

        updateSlider();
    });
});
