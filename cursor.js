/**
 * Valampuri Panchangam Custom Golden Star & Aura Cursor
 */
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if device has pointer/mouse
    if (window.matchMedia('(pointer: coarse)').matches) {
        return;
    }

    const dot = document.createElement('div');
    const outline = document.createElement('div');
    const star = document.createElement('div');
    
    dot.className = 'cursor-dot';
    outline.className = 'cursor-outline';
    star.className = 'cursor-star';
    
    outline.appendChild(star);
    document.body.appendChild(dot);
    document.body.appendChild(outline);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let outlineX = mouseX;
    let outlineY = mouseY;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';

        document.body.classList.remove('cursor-hidden');
    });

    const animate = () => {
        outlineX += (mouseX - outlineX) * 0.16;
        outlineY += (mouseY - outlineY) * 0.16;

        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';

        requestAnimationFrame(animate);
    };
    animate();

    document.addEventListener('mouseleave', () => {
        document.body.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
        document.body.classList.remove('cursor-hidden');
    });
});
