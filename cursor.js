document.addEventListener('DOMContentLoaded', () => {
    // Create cursor elements
    const dot = document.createElement('div');
    const outline = document.createElement('div');
    const star = document.createElement('div');
    dot.className = 'cursor-dot';
    outline.className = 'cursor-outline';
    star.className = 'cursor-star';
    outline.appendChild(star);
    document.body.appendChild(dot);
    document.body.appendChild(outline);

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Movement tracking
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Immediate position for the dot
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';

        // Remove hidden class if mouse moves
        document.body.classList.remove('cursor-hidden');
    });

    // Smooth trailing for the outline
    const animate = () => {
        // LERP: current + (target - current) * factor
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        outline.style.left = outlineX + 'px';
        outline.style.top = outlineY + 'px';

        requestAnimationFrame(animate);
    };
    animate();

    // Removal of hover detection to maintain consistent cursor as requested

    // Handle mouse leaving window
    document.addEventListener('mouseleave', () => {
        document.body.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
        document.body.classList.remove('cursor-hidden');
    });
});
