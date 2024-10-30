window.onload = function() {
    document.getElementById('cute').style.display = 'flex';

    // Show puppy for 2.5 seconds, then hide and show jumpscare video
    window.setTimeout(function() {
        document.getElementById('cute').style.display = 'none';
        document.getElementById('scare').style.display = 'flex';

        var video = document.getElementById('jumpvideo');
        video.currentTime = 0; // Ensure video starts from the beginning
        video.load(); // Force video to load

        // Try playing the video and catch any autoplay restriction errors
        video.play().catch(function(error) {
            console.warn("Autoplay was prevented. Waiting for user interaction...");
            // Optional: Prompt user to tap to start if needed
        });
    }, 2500);
};

// Listen for the video end event to transition to the Instagram screen
document.getElementById("jumpvideo").addEventListener('ended', function() {
    document.getElementById('scare').style.display = 'none';
    document.getElementById('ig').style.display = 'flex';
});
