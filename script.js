// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const video = document.getElementById('background-video');
const muteButton = document.getElementById('mute-toggle');

muteButton.addEventListener('click', () => {
    video.muted = !video.muted; // Toggle the mute state
    const isMuted = video.muted;

    // Update button text and aria-pressed attribute
    muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
    muteButton.setAttribute('aria-pressed', isMuted); // Set accessibility attribute
});