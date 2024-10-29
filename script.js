window.onload = function() {
    document.getElementById('cute').style.display = 'flex';
    window.setTimeout(function() {
        document.getElementById('cute').style.display = 'none';
        document.getElementById('scare').style.display = 'flex';
        var video = document.getElementById('jumpvideo');
        video.currentTime = 0; // Ensure video starts from the beginning
        video.play();
    }, 2500);
}

document.getElementById("jumpvideo").addEventListener('ended', function() {
    document.getElementById('scare').style.display = 'none';
    document.getElementById('ig').style.display = 'flex';
});