// ==================== DATA ====================
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
            name: 'LA VICCA',
            location: 'Majadahonda',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+1',
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+2',
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+3',
                'https://via.placeholder.com/800x600/777/fff?text=LA+VICCA+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            name: 'ANCHO',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=ANCHO+1',
                'https://via.placeholder.com/800x600/777/fff?text=ANCHO+2',
                'https://via.placeholder.com/800x600/777/fff?text=ANCHO+3',
                'https://via.placeholder.com/800x600/777/fff?text=ANCHO+4',
                'https://via.placeholder.com/800x600/777/fff?text=ANCHO+5'
            ],
            description: 'Ubicado en una esquina icónica de Chamartín, Ancho fusiona la estética personalista de la Movida con el encanto entre amigos. Un espacio que vuelve a los orígenes y a los encuentros entre amigos. El diseño evoca la magia de una noche en la que todo puede pasar. Un bar abierto donde los ingredientes y la técnica culinaria son protagonistas.'
        },
        {
            name: 'FENZZE',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=FENZZE+1',
                'https://via.placeholder.com/800x600/777/fff?text=FENZZE+2',
                'https://via.placeholder.com/800x600/777/fff?text=FENZZE+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.'
        },
        {
            name: 'JUANA LA LOCA',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+1',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+2',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+3',
                'https://via.placeholder.com/800x600/777/fff?text=JUANA+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            name: 'PROYECTO 5',
            location: 'Barcelona',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+5-1',
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+5-2',
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+5-3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            name: 'PROYECTO 6',
            location: 'Valencia',
            images: [
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+6-1',
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+6-2',
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+6-3',
                'https://via.placeholder.com/800x600/777/fff?text=Proyecto+6-4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
        }
    ],
    residential: [
        {
            name: 'CASA MODERNA',
            location: 'Pozuelo',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=Casa+1',
                'https://via.placeholder.com/800x600/666/fff?text=Casa+2',
                'https://via.placeholder.com/800x600/666/fff?text=Casa+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
        },
        {
            name: 'APARTAMENTO CENTRO',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=Apto+1',
                'https://via.placeholder.com/800x600/666/fff?text=Apto+2',
                'https://via.placeholder.com/800x600/666/fff?text=Apto+3',
                'https://via.placeholder.com/800x600/666/fff?text=Apto+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.'
        },
        {
            name: 'VILLA MEDITERRÁNEA',
            location: 'Marbella',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=Villa+1',
                'https://via.placeholder.com/800x600/666/fff?text=Villa+2',
                'https://via.placeholder.com/800x600/666/fff?text=Villa+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.'
        },
        {
            name: 'LOFT INDUSTRIAL',
            location: 'Barcelona',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=Loft+1',
                'https://via.placeholder.com/800x600/666/fff?text=Loft+2',
                'https://via.placeholder.com/800x600/666/fff?text=Loft+3',
                'https://via.placeholder.com/800x600/666/fff?text=Loft+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.'
        },
        {
            name: 'CASA MINIMALISTA',
            location: 'Sevilla',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=Minimalista+1',
                'https://via.placeholder.com/800x600/666/fff?text=Minimalista+2',
                'https://via.placeholder.com/800x600/666/fff?text=Minimalista+3'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.'
        },
        {
            name: 'PENTHOUSE',
            location: 'Madrid',
            images: [
                'https://via.placeholder.com/800x600/666/fff?text=Penthouse+1',
                'https://via.placeholder.com/800x600/666/fff?text=Penthouse+2',
                'https://via.placeholder.com/800x600/666/fff?text=Penthouse+3',
                'https://via.placeholder.com/800x600/666/fff?text=Penthouse+4'
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation.'
        }
    ]
};

// ==================== STATE ====================
let currentProjectSection = null;
let currentProjectIndex = 0;
let currentImageIndex = 0;
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

// ==================== RENDER PROJECTS GRID ====================
function renderProjects(section) {
    const container = document.getElementById(`${section}-projects`);
    if (!container || !projectsData[section]) {
        console.log(`Container not found for ${section} or no data available`);
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
        card.addEventListener('click', () => openProjectModal(section, index));
        container.appendChild(card);
    });
}

// Wait for DOM to be fully loaded before rendering projects
window.addEventListener('DOMContentLoaded', () => {
    renderProjects('social');
    renderProjects('residential');
});

// ==================== PROJECT MODAL ====================
const modal = document.getElementById('project-modal');
const modalClose = document.getElementById('modal-close');
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
}

function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateModalContent() {
    const project = projectsData[currentProjectSection][currentProjectIndex];
    const totalImages = project.images.length;
    const isLastImage = currentImageIndex === totalImages - 1;
    const hasNextProject = currentProjectIndex < projectsData[currentProjectSection].length - 1;
    
    modalTitle.textContent = project.name;
    modalText.textContent = project.description;
    modalImage.src = project.images[currentImageIndex];
    modalImage.alt = `${project.name} - Imagen ${currentImageIndex + 1}`;
    modalCounter.textContent = `${String(currentImageIndex + 1).padStart(2, '0')} — ${String(totalImages).padStart(2, '0')}`;
    
    // Show "next project" indicator on last image if there's a next project
    if (isLastImage && hasNextProject) {
        nextProjectIndicator.classList.add('show');
    } else {
        nextProjectIndicator.classList.remove('show');
    }
}

function navigateModalImage(direction) {
    const project = projectsData[currentProjectSection][currentProjectIndex];
    const totalImages = project.images.length;
    const isLastImage = currentImageIndex === totalImages - 1;
    const hasNextProject = currentProjectIndex < projectsData[currentProjectSection].length - 1;
    const hasPrevProject = currentProjectIndex > 0;
    
    if (direction === 'next') {
        if (isLastImage && hasNextProject) {
            // Move to next project
            currentProjectIndex++;
            currentImageIndex = 0;
        } else if (!isLastImage) {
            // Move to next image
            currentImageIndex++;
        }
    } else {
        if (currentImageIndex > 0) {
            // Move to previous image
            currentImageIndex--;
        } else if (hasPrevProject) {
            // Move to previous project's last image
            currentProjectIndex--;
            currentImageIndex = projectsData[currentProjectSection][currentProjectIndex].images.length - 1;
        }
    }
    
    updateModalContent();
}

// Modal event listeners
modalClose.addEventListener('click', closeProjectModal);
modalPrev.addEventListener('click', () => navigateModalImage('prev'));
modalNext.addEventListener('click', () => navigateModalImage('next'));

// Close modal on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeProjectModal();
    }
});

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
    }
});