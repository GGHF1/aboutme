document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.container img');
    
    img.addEventListener('mouseover', function() {
        img.src = '/images/me2.gif';
    });

    img.addEventListener('mouseout', function() {
        img.src = '/images/me.jpeg';
    });
});