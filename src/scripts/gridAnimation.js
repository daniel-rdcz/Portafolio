document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.getElementById('wrapper');

    const animateOptions = {
        duration: 500,
        easing: 'backInOut',
    }
    
    animateCSSGrid.wrapGrid(wrapper, animateOptions)

    const handleResize = () => {
        if (window.innerWidth <= 768) {
            wrapper.classList.add('small-screen');
        } else {
            wrapper.classList.remove('small-screen');
        }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
});