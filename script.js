// Data arrays
const services = [
    { name: 'SOP Writing', desc: 'Statement of Purpose', icon: '✏️' },
    { name: 'LOR Writing', desc: 'Letter of Recommendation', icon: '🏆' },
    { name: 'Motivation Letter', desc: 'Compelling Motivation Letters', icon: '🎯' },
    { name: 'Research Proposal', desc: 'Academic Research Proposals', icon: '📚' },
    { name: 'Essays & Reports', desc: 'Academic Writing', icon: '📄' },
    { name: 'Assignments', desc: 'Custom Assignments', icon: '🎓' }
];

const features = [
    'Professional Writers',
    'Plagiarism-Free Content', 
    'Timely Delivery',
    'Unlimited Revisions',
    'Unique Writing Structure',
    'Personalized Approach'
];

const stats = [
    { number: '500+', label: 'COMPLETED PROJECTS', icon: '📄' },
    { number: '98%', label: 'CLIENT SATISFACTION', icon: '⭐' },
    { number: '24/7', label: 'SUPPORT AVAILABLE', icon: '🕐' }
];

const processes = [
    { step: '01', title: 'Submit Requirements', icon: '📄' },
    { step: '02', title: 'Get Quote', icon: '🎯' },
    { step: '03', title: 'Writing Process', icon: '✏️' },
    { step: '04', title: 'Delivery', icon: '✅' }
];

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function createServiceCard(service) {
    return `
        <div class="bg-white p-4 sm:p-8 border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group hover:bg-pink-300 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 sm:hover:translate-x-2 sm:hover:translate-y-2 transition-all duration-200">
            <div class="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div class="text-2xl sm:text-3xl flex-shrink-0">
                    ${service.icon}
                </div>
                <h3 class="text-lg sm:text-xl font-black text-black leading-tight">${service.name}</h3>
            </div>
            <p class="text-gray-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">${service.desc}</p>
            <div class="w-full h-2 sm:h-3 bg-red-600 group-hover:bg-black transition-colors duration-200" style="background-color: #b21031;"></div>
        </div>
    `;
}

function createFeatureCard(feature) {
    return `
        <div class="bg-white p-4 sm:p-8 border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 sm:hover:translate-x-2 sm:hover:translate-y-2 transition-all duration-200">
            <div class="flex items-center gap-2 sm:gap-4">
                <div class="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center border border-black sm:border-2 flex-shrink-0">
                    <span class="text-white text-sm sm:text-lg font-black">✓</span>
                </div>
                <h3 class="text-lg sm:text-xl font-black text-black leading-tight">${feature}</h3>
            </div>
        </div>
    `;
}

function createStatCard(stat) {
    return `
        <div class="text-center group">
            <div class="bg-red-600 text-white px-4 sm:px-8 py-6 sm:py-12 border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 transition-all duration-200 mb-4 sm:mb-6" style="background-color: #b21031;">
                <div class="flex justify-center mb-2 sm:mb-4">
                    <div class="text-yellow-400 text-2xl sm:text-3xl">
                        ${stat.icon}
                    </div>
                </div>
                <h3 class="text-3xl sm:text-5xl md:text-6xl font-black">${stat.number}</h3>
            </div>
            <p class="text-lg sm:text-2xl font-black text-black px-2">${stat.label}</p>
        </div>
    `;
}

function createProcessCard(process) {
    return `
        <div class="text-center group">
            <div class="bg-white p-4 sm:p-8 border-2 sm:border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1 sm:group-hover:translate-x-2 sm:group-hover:translate-y-2 transition-all duration-200 mb-4 sm:mb-6">
                <div class="text-4xl sm:text-6xl font-black text-red-600 mb-2 sm:mb-4" style="color: #b21031;">${process.step}</div>
                <div class="text-red-600 mb-2 sm:mb-4 flex justify-center text-2xl sm:text-3xl" style="color: #b21031;">
                    ${process.icon}
                </div>
                <h3 class="text-lg sm:text-xl font-black text-black leading-tight px-2">${process.title}</h3>
            </div>
        </div>
    `;
}

// Populate content when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = services.map(createServiceCard).join('');
    }

    // Populate features
    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid) {
        featuresGrid.innerHTML = features.map(createFeatureCard).join('');
    }

    // Populate stats
    const statsGrid = document.getElementById('stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = stats.map(createStatCard).join('');
    }

    // Populate processes
    const processGrid = document.getElementById('process-grid');
    if (processGrid) {
        processGrid.innerHTML = processes.map(createProcessCard).join('');
    }

    // Update copyright year
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.textContent = `Made by SIFU`;
    }

    // Add interactive effects
    addInteractiveEffects();
});

function addInteractiveEffects() {
    // Add click effects to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'translateY(2px)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.group');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(3px) translateY(3px) rotate(0.5deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('div[id]');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add parallax effect to decorative elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.absolute');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Expose scrollToSection globally for button onclick handlers
window.scrollToSection = scrollToSection;