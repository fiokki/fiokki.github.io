window.onload = function() {
    document.getElementById('cute').style.display = 'flex';

    // Show puppy for 2.5 seconds, then hide it and show jumpscare video
    window.setTimeout(function() {
        document.getElementById('cute').style.display = 'none';
        document.getElementById('scare').style.display = 'flex';

        var video = document.getElementById('jumpvideo');
        video.currentTime = 0; // Ensure video starts from the beginning
        video.load(); // Load video to avoid potential delays

        // Try playing the video, catching autoplay restriction errors
        video.play().catch(function(error) {
            console.warn("Autoplay was prevented. Waiting for user interaction...");
        });
    }, 2500);
};

// Transition to Instagram after the video ends
document.getElementById("jumpvideo").addEventListener('ended', function() {
    document.getElementById('scare').style.display = 'none';
    document.getElementById('ig').style.display = 'flex';
});
