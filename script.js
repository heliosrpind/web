// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Video mute toggle functionality
const video = document.getElementById('background-video');
const muteButton = document.getElementById('mute-toggle');

if (video && muteButton) {
    muteButton.addEventListener('click', () => {
        video.muted = !video.muted; // Toggle the mute state
        const isMuted = video.muted;

        // Update button text and aria-pressed attribute
        muteButton.textContent = isMuted ? 'Unmute' : 'Mute';
        muteButton.setAttribute('aria-pressed', isMuted); // Set accessibility attribute
        
        // Optional: Change button style based on mute state
        muteButton.classList.toggle('muted', isMuted); // Add a class if muted
    });
}
