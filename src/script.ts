function scrollingTo(elementY, duration) { 
    let startingY = window.pageYOffset;
    let diff = elementY - startingY;
    let start;

    // Bootstrap animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        // Elapsed milliseconds since start of scrolling.
        let time = timestamp - start;
        // Get percent of completion in range [0, 1].
        let percent = Math.min(time / duration, 1);

        window.scrollTo(0, startingY + diff * percent);

        // Proceed with animation as long as we wanted it to.
        if (time < duration) {
        window.requestAnimationFrame(step);
    }
  })
};