document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll('.sidebar nav ul li a');

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.parentElement.classList.add('active');
        }
    });
});


function enableEdit(id) {
    document.getElementById(id).disabled = false;
}

function saveChanges() {
    const inputs = document.querySelectorAll('.account-section input');
    inputs.forEach(input => {
        input.disabled = true;
    });
}

function cancelChanges() {
    // Logic to reset changes if needed
    const inputs = document.querySelectorAll('.account-section input');
    inputs.forEach(input => {
        input.disabled = true;
    });
}