window.addEventListener('scroll', function() {
requestAnimationFrame(function() {
    var blocks = document.querySelectorAll('.scripted');
    for (var i = 0; i < blocks.length; i++) {
    var block = blocks[i];
    var blockRect = block.getBoundingClientRect();
    if (blockRect.top < window.innerHeight - 100 && blockRect.bottom > 100) {
        block.style.opacity = '1';
        block.style.pointerEvents = 'auto';
        }
    else block.style.opacity = '0';
    }

    var icon = document.querySelector('.svg-icon');
    var svgRect = icon.getBoundingClientRect();
    if (svgRect.top < window.innerHeight && svgRect.bottom > 200) {
        icon.style.opacity = '0.6';
        icon.style.pointerEvents = 'auto';
    }
    else icon.style.opacity = '0';
});
});