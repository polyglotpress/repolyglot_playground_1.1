
setTimeout(() => {
    //document.querySelectorAll('.alert').forEach(alert => alert.style.display = 'none');
    document.querySelectorAll('.alert').forEach(alert => alert.classList.remove('alert-success'));
    document.querySelectorAll('.alert').forEach(alert => alert.classList.remove('alert-danger'));
    document.querySelectorAll('.alert').forEach(alert => alert.textContent = "");
}, 3000); // Hides flash messages after 3 seconds


