/**
 * Space-Themed Contact Page - Animations & Interactive Script
 * Powered by GSAP (GreenSock Animation Platform)
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize background starfield canvas
    initStarfield();

    // Run GSAP Animations
    initEntranceAnimations();
    initAstronautFloating();
    initButtonInteractions();
    initFormHandling();
});

/* ==========================================================================
   1. Dynamic Starfield Background Canvas
   ========================================================================== */
function initStarfield() {
    const canvas = document.getElementById('starfield');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let stars = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Generate random stars
    const starCount = Math.floor((width * height) / 4500);
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.4 + 0.3,
            alpha: Math.random() * 0.8 + 0.2,
            twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() > 0.5 ? 1 : -1)
        });
    }

    function render() {
        ctx.clearRect(0, 0, width, height);

        stars.forEach(star => {
            star.alpha += star.twinkleSpeed;
            if (star.alpha <= 0.1 || star.alpha >= 0.95) {
                star.twinkleSpeed = -star.twinkleSpeed;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
        });

        requestAnimationFrame(render);
    }

    render();

    // Handle window resize
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });
}

/* ==========================================================================
   2. GSAP Entrance Animations (Stagger Timeline)
   ========================================================================== */
function initEntranceAnimations() {
    // Ensure GSAP is loaded
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });

    // 1. Header elements slide down and fade in
    tl.from('.header-section', {
        y: -30,
        opacity: 0,
        duration: 0.8
    })

    // 2. Main card container scales up and fades in
    .from('.contact-card', {
        scale: 0.94,
        opacity: 0,
        duration: 1
    }, '-=0.4')

    // 3. Form Header & Elements slide up with a smooth stagger
    .from('.form-header', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, '-=0.6')

    .from('.form-group', {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6
    }, '-=0.4')

    .from('#submitBtn', {
        y: 20,
        opacity: 0,
        duration: 0.6
    }, '-=0.2')

    // 4. Right column astronaut image and quote fade in
    .from('.visual-column', {
        x: 30,
        opacity: 0,
        duration: 0.8
    }, '-=0.8');
}

/* ==========================================================================
   3. Continuous Floating Astronaut Animation (GSAP)
   ========================================================================== */
function initAstronautFloating() {
    if (typeof gsap === 'undefined') return;

    // Smooth continuous floating loop on the astronaut graphic
    gsap.to('.astronaut-img', {
        y: -14,
        rotation: 0.8,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

/* ==========================================================================
   4. Interactive Submit Button GSAP Micro-Interactions
   ========================================================================== */
function initButtonInteractions() {
    const btn = document.getElementById('submitBtn');
    const icon = btn ? btn.querySelector('.btn-icon') : null;
    if (!btn || typeof gsap === 'undefined') return;

    btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
            scale: 1.025,
            boxShadow: '0 15px 35px -5px rgba(217, 70, 239, 0.55)',
            duration: 0.3,
            ease: 'power2.out'
        });

        if (icon) {
            gsap.to(icon, {
                x: 4,
                y: -4,
                scale: 1.2,
                duration: 0.3,
                ease: 'back.out(2)'
            });
        }
    });

    btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
            scale: 1,
            boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.4)',
            duration: 0.3,
            ease: 'power2.out'
        });

        if (icon) {
            gsap.to(icon, {
                x: 0,
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
}

/* ==========================================================================
   5. Form Validation & Rocket Launch Transmission
   ========================================================================== */
function initFormHandling() {
    const form = document.getElementById('contactForm');
    const btn = document.getElementById('submitBtn');
    const icon = btn ? btn.querySelector('.btn-icon') : null;
    const btnText = btn ? btn.querySelector('.btn-text') : null;
    const toast = document.getElementById('toast');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Perform basic input validation
        const inputs = form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('invalid');
                gsap.to(input, { x: 8, duration: 0.1, yoyo: true, repeat: 3, ease: 'power1.inOut' });
            } else {
                input.classList.remove('invalid');
            }
        });

        // Email regex check
        const emailInput = document.getElementById('email');
        if (emailInput && emailInput.value.trim()) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(emailInput.value.trim())) {
                isValid = false;
                emailInput.classList.add('invalid');
                gsap.to(emailInput, { x: 8, duration: 0.1, yoyo: true, repeat: 3, ease: 'power1.inOut' });
            }
        }

        if (!isValid) return;

        // Animate Button Rocket Launch
        if (typeof gsap !== 'undefined' && icon && btnText) {
            btn.disabled = true;

            const launchTl = gsap.timeline();

            // Rocket takes off
            launchTl.to(icon, {
                x: 100,
                y: -100,
                opacity: 0,
                scale: 0.5,
                duration: 0.6,
                ease: 'power2.in'
            })
            .to(btnText, {
                opacity: 0,
                duration: 0.2
            }, '-=0.4')
            .add(() => {
                btnText.textContent = 'Transmitting...';
            })
            .to(btnText, {
                opacity: 1,
                duration: 0.2
            })
            .to(toast, {
                onStart: () => toast.classList.add('show'),
                duration: 0.1
            })
            // Reset after 3.5 seconds
            .to({}, { duration: 3.5 })
            .add(() => {
                toast.classList.remove('show');
                form.reset();
                btnText.textContent = 'Send it to the moon';
                gsap.set(icon, { x: 0, y: 0, opacity: 1, scale: 1 });
                btn.disabled = false;
            });
        } else {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                form.reset();
            }, 3500);
        }
    });

    // Clear error class on input focus/typing
    form.addEventListener('input', (e) => {
        if (e.target.classList.contains('invalid')) {
            e.target.classList.remove('invalid');
        }
    });
}
