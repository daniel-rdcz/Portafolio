document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('wrapper');

    const animateOptions = {
        duration: 900,
        easing: 'backInOut',
    }
    
    animateCSSGrid.wrapGrid(wrapper, animateOptions)

    const handleResize = () => {
        if (window.innerWidth <= 850) {
            wrapper.classList.add('small-screen');
        } else {
            wrapper.classList.remove('small-screen');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});