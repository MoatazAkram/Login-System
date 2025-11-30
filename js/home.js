
document.addEventListener('DOMContentLoaded',function() {
    var currentuser = JSON.parse(localStorage.getItem('currentuser'));

    if (currentuser && currentuser.name) {
        document.getElementById('displayName').textContent = currentuser.name;
    }
});
