// ========================================
// SECTION LOADER
// Loads HTML sections dynamically
// ========================================

(async function() {
    'use strict';

    // Section configuration
    const sections = [
        { id: 'heroSection', file: 'sections/hero.html' },
        { id: 'servicesSection', file: 'sections/services.html' },
        { id: 'aboutSection', file: 'sections/about.html' },
        { id: 'portfolioSection', file: 'sections/portfolio.html' },
        { id: 'clientsSection', file: 'sections/clients.html' },
        { id: 'testimonialsSection', file: 'sections/testimonials.html' },
        { id: 'blogSection', file: 'sections/blog.html' },
        { id: 'careersSection', file: 'sections/careers.html' },
        { id: 'contactSection', file: 'sections/contact.html' }
    ];

    // Load all sections
    async function loadAllSections() {
        try {
            const promises = sections.map(section => loadSection(section));
            await Promise.all(promises);
            
            // Sections loaded event
            document.dispatchEvent(new Event('sectionsLoaded'));
            
            // Hide preloader
            setTimeout(() => {
                const preloader = document.getElementById('preloader');
                if (preloader) {
                    preloader.classList.add('fade-out');
                    setTimeout(() => {
                        preloader.style.display = 'none';
                    }, 300);
                }
            }, 500);
            
            // Refresh AOS
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
            
            console.log('✅ All sections loaded successfully');
        } catch (error) {
            console.error('❌ Error loading sections:', error);
        }
    }

    // Load individual section
    async function loadSection(section) {
        try {
            const response = await fetch(section.file);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const html = await response.text();
            const container = document.getElementById(section.id);
            
            if (container) {
                container.innerHTML = html;
            }
        } catch (error) {
            console.error(`❌ Error loading ${section.file}:`, error);
            
            // Show error message
            const container = document.getElementById(section.id);
            if (container) {
                container.innerHTML = `
                    <div style="padding: 50px; text-align: center; color: #999;">
                        <p>⚠️ Section could not be loaded. Please refresh the page.</p>
                        <p style="font-size: 12px; color: #ccc;">${section.file}</p>
                    </div>
                `;
            }
        }
    }

    // Initialize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadAllSections);
    } else {
        loadAllSections();
    }
})();