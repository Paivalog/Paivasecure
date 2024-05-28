document.addEventListener('DOMContentLoaded', function() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseover', function() {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseout', function() {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});
