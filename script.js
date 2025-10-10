const heroSliders = {
    social: [
        'https://via.placeholder.com/500x400/888/fff?text=Social+1',
        'https://via.placeholder.com/500x400/888/fff?text=Social+2',
        'https://via.placeholder.com/500x400/888/fff?text=Social+3'
    ],
    studio: [
        'https://via.placeholder.com/500x400/888/fff?text=Studio+1',
        'https://via.placeholder.com/500x400/888/fff?text=Studio+2',
        'https://via.placeholder.com/500x400/888/fff?text=Studio+3'
    ],
    residential: [
        'https://via.placeholder.com/500x400/888/fff?text=Residential+1',
        'https://via.placeholder.com/500x400/888/fff?text=Residential+2',
        'https://via.placeholder.com/500x400/888/fff?text=Residential+3'
    ],
    flipping: [
        'https://via.placeholder.com/500x400/888/fff?text=Flipping+1',
        'https://via.placeholder.com/500x400/888/fff?text=Flipping+2',
        'https://via.placeholder.com/500x400/888/fff?text=Flipping+3'
    ]
};

const projectsData = {
    social: [
        {
            name: 'JUANA LA LOCA',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+LA+LOCA+1',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+LA+LOCA+2',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+LA+LOCA+3',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+LA+LOCA+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'JUANA LA LOCA 2',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+2-1',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+2-2',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+2-3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        },
        {
            name: 'LA VICCA',
            location: 'Majadahonda',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+1',
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+2',
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+3',
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            name: 'PARADA CERO',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=PARADA+CERO+1',
                'https://via.placeholder.com/800x600/777/fff?text=PARADA+CERO+2',
                'https://via.placeholder.com/800x600/777/fff?text=PARADA+CERO+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'PIZZA TRAIN',
            location: 'Barcelona',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=PIZZA+TRAIN+1',
                'https://via.placeholder.com/800x600/777/fff?text=PIZZA+TRAIN+2',
                'https://via.placeholder.com/800x600/777/fff?text=PIZZA+TRAIN+3',
                'https://via.placeholder.com/800x600/777/fff?text=PIZZA+TRAIN+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ],
    residential: [
        {
            name: 'ALVEAR',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=ALVEAR+1',
                'https://via.placeholder.com/800x600/666/fff?text=ALVEAR+2',
                'https://via.placeholder.com/800x600/666/fff?text=ALVEAR+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'ARTURO SORIA',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=ARTURO+SORIA+1',
                'https://via.placeholder.com/800x600/666/fff?text=ARTURO+SORIA+2',
                'https://via.placeholder.com/800x600/666/fff?text=ARTURO+SORIA+3',
                'https://via.placeholder.com/800x600/666/fff?text=ARTURO+SORIA+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        },
        {
            name: 'C13',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=C13+1',
                'https://via.placeholder.com/800x600/666/fff?text=C13+2',
                'https://via.placeholder.com/800x600/666/fff?text=C13+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'LT',
            location: 'Barcelona',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=LT+1',
                'https://via.placeholder.com/800x600/666/fff?text=LT+2',
                'https://via.placeholder.com/800x600/666/fff?text=LT+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.'
        },
        {
            name: 'RB26',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=RB26+1',
                'https://via.placeholder.com/800x600/666/fff?text=RB26+2',
                'https://via.placeholder.com/800x600/666/fff?text=RB26+3',
                'https://via.placeholder.com/800x600/666/fff?text=RB26+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
        },
        {
            name: 'RGS',
            location: 'Valencia',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=RGS+1',
                'https://via.placeholder.com/800x600/666/fff?text=RGS+2',
                'https://via.placeholder.com/800x600/666/fff?text=RGS+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.'
        },
        {
            name: 'SANCHINARRO',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=SANCHINARRO+1',
                'https://via.placeholder.com/800x600/666/fff?text=SANCHINARRO+2',
                'https://via.placeholder.com/800x600/666/fff?text=SANCHINARRO+3',
                'https://via.placeholder.com/800x600/666/fff?text=SANCHINARRO+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ],
    flipping: [
        {
            name: 'PROYECTO FLIPPING 1',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+1-1',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+1-2',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+1-3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'PROYECTO FLIPPING 2',
            location: 'Barcelona',
            images: [
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+2-1',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+2-2',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+2-3',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+2-4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        },
        {
            name: 'PROYECTO FLIPPING 3',
            location: 'Valencia',
            images: [
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+3-1',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+3-2',
                'https://via.placeholder.com/800x600/888/fff?text=FLIPPING+3-3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        }
    ]
};

// ==================== STATE ====================
let currentProjectSection = null;
let currentProjectIndex = 0;
let currentImageIndex = 0;
let modalInactivityTimer = null;
let lastScrollY = window.scrollY;

const heroIndices = {
    social: 0,
    studio: 0,
    residential: 0,
    flipping: 0
};

// ==================== WELCOME ANIMATION ====================
window.addEventListener('DOMContentLoaded', () => {
    const welcome = document.getElementById('welcome-screen');
    const logoAnim = document.getElementById('logo-anim');
    const sloganAnim = document.getElementById('slogan-anim');

    setTimeout(() => {
        logoAnim.classList.add('shifted');
        setTimeout(() => {
            sloganAnim.classList.add('visible');
        }, 600);
    }, 1000);

    setTimeout(() => {
        welcome.style.opacity = 0;
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 1000);
    }, 3200);
    
    // Render projects after DOM is loaded
    renderProjects('social');
    renderProjects('residential');
    renderProjects('flipping');
});

// ==================== MOBILE NAVIGATION ====================
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');

navToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    if (window.innerWidth <= 700) {
        const nav = document.querySelector('nav');
        if (!nav.contains(e.target)) {
            navList.classList.remove('show');
        }
    }
});

// ==================== SECTION NAVIGATION ====================
const navLinks = document.querySelectorAll('nav a[data-section]');
const sections = document.querySelectorAll('.main-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        sections.forEach(s => s.classList.remove('active'));
        document.getElementById(`section-${section}`).classList.add('active');
        
        navList.classList.remove('show');
    });
});

// ==================== HEADER SCROLL BEHAVIOR ====================
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
});

// ==================== HERO SLIDERS ====================
function updateHeroSlider(section) {
    const images = heroSliders[section];
    if (!images) return;
    
    const img = document.getElementById(`img-${section}`);
    const indicator = document.getElementById(`indicator-${section}`);
    const index = heroIndices[section];
    
    if (img && indicator) {
        img.src = images[index];
        indicator.textContent = `${String(index + 1).padStart(2, '0')} — ${String(images.length).padStart(2, '0')}`;
    }
}

document.querySelectorAll('.slider-nav[data-hero]').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.hero;
        const images = heroSliders[section];
        if (!images) return;
        
        if (btn.classList.contains('left')) {
            heroIndices[section] = (heroIndices[section] - 1 + images.length) % images.length;
        } else {
            heroIndices[section] = (heroIndices[section] + 1) % images.length;
        }
        
        updateHeroSlider(section);
    });
});

// Initialize hero sliders
Object.keys(heroSliders).forEach(section => {
    updateHeroSlider(section);
});

// ==================== PROJECT MODAL ====================
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
const modalInfo = document.getElementById('modal-info');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const modalImage = document.getElementById('modal-image');
const modalCounter = document.getElementById('modal-counter');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const nextProjectIndicator = document.getElementById('next-project-indicator');

function openProjectModal(section, projectIndex) {
    currentProjectSection = section;
    currentProjectIndex = projectIndex;
    currentImageIndex = 0;
    
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetModalInactivity();
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
    clearTimeout(modalInactivityTimer);
}

function updateModalContent() {
    const project = projectsData[currentProjectSection][currentProjectIndex];
    const totalImages = project.images.length;
    const isLastImage = currentImageIndex === totalImages - 1;
    const hasNextProject = currentProjectIndex < projectsData[currentProjectSection].length - 1;
    const isFirstImage = currentImageIndex === 0;
    
    modalTitle.textContent = project.name;
    modalText.textContent = project.description;
    modalImage.src = project.images[currentImageIndex];
    modalImage.alt = `${project.name} - Imagen ${currentImageIndex + 1}`;
    modalCounter.textContent = `${String(currentImageIndex + 1).padStart(2, '0')} — ${String(totalImages).padStart(2, '0')}`;
    
    // Hide description after first image
    if (isFirstImage) {
        modalInfo.classList.remove('hide-description');
    } else {
        modalInfo.classList.add('hide-description');
    }
    
    // Show next project indicator ONLY on last image of last project
    // Store state in data attribute so we know when to show it
    if (isLastImage && hasNextProject) {
        nextProjectIndicator.dataset.canShow = 'true';
    } else {
        nextProjectIndicator.dataset.canShow = 'false';
        nextProjectIndicator.classList.remove('visible');
    }
    
    // Reset inactivity timer
    resetModalInactivity();
}

function navigateModalImage(direction) {
    const project = projectsData[currentProjectSection][currentProjectIndex];
    const totalImages = project.images.length;
    const isLastImage = currentImageIndex === totalImages - 1;
    const hasNextProject = currentProjectIndex < projectsData[currentProjectSection].length - 1;
    const hasPrevProject = currentProjectIndex > 0;
    
    if (direction === 'next') {
        if (isLastImage && hasNextProject) {
            currentProjectIndex++;
            currentImageIndex = 0;
        } else if (!isLastImage) {
            currentImageIndex++;
        }
    } else {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        } else if (hasPrevProject) {
            currentProjectIndex--;
            currentImageIndex = projectsData[currentProjectSection][currentProjectIndex].images.length - 1;
        }
    }
    
    updateModalContent();
}

// Modal event listeners - FIXED
modalClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeProjectModal();
});

modalPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateModalImage('prev');
});

modalNext.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateModalImage('next');
});

// Show next project indicator on hover
modalNext.addEventListener('mouseenter', () => {
    if (nextProjectIndicator.dataset.canShow === 'true') {
        nextProjectIndicator.classList.add('visible');
    }
});

modalNext.addEventListener('mouseleave', () => {
    nextProjectIndicator.classList.remove('visible');
});

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

// Track mouse movement in modal
modal.addEventListener('mousemove', () => {
    if (modal.classList.contains('active')) {
        resetModalInactivity();
    }
});

// ==================== MODAL UI AUTO-HIDE ====================
const modalUIElements = [modalPrev, modalNext, modalCounter];

function hideModalUI() {
    modalUIElements.forEach(el => el.classList.add('hide-ui'));
}

function showModalUI() {
    modalUIElements.forEach(el => el.classList.remove('hide-ui'));
}

function resetModalInactivity() {
    showModalUI();
    clearTimeout(modalInactivityTimer);
    modalInactivityTimer = setTimeout(hideModalUI, 3000);
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (modal.classList.contains('active')) {
        if (e.key === 'Escape') {
            closeProjectModal();
        } else if (e.key === 'ArrowLeft') {
            navigateModalImage('prev');
        } else if (e.key === 'ArrowRight') {
            navigateModalImage('next');
        }
        resetModalInactivity();
    }
});

// ==================== TOUCH SWIPE FOR MOBILE ====================
let touchStartX = 0;
let touchEndX = 0;

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        navigateModalImage('next');
    }
    if (touchEndX > touchStartX + 50) {
        navigateModalImage('prev');
    }
}

modal.addEventListener('touchstart', (e) => {
    if (modal.classList.contains('active')) {
        touchStartX = e.changedTouches[0].screenX;
    }
}, false);

modal.addEventListener('touchend', (e) => {
    if (modal.classList.contains('active')) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }
}, false);

// ==================== RENDER PROJECTS GRID ====================
function renderProjects(section) {
    const container = document.getElementById(`${section}-projects`);
    if (!container || !projectsData[section]) {
        return;
    }
    
    container.innerHTML = '';
    
    projectsData[section].forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <img src="${project.images[0]}" alt="${project.name}" class="project-image">
            <div class="project-info">
                <div class="project-name">${project.name}</div>
                <div class="project-location">${project.location}</div>
            </div>
        `;
        card.addEventListener('click', () => {
            openProjectModal(section, index);
        });
        container.appendChild(card);
    });
}