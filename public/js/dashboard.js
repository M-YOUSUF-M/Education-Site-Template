// Sidebar Toggle
const target = document.getElementById("sidebar-wrapper");
document.getElementById("menu-toggle").addEventListener("click", () => {
    if (target.classList.contains('toggled')) {
        target.classList.remove('toggled');
    }
    target.classList.add('sidebar-wrapper');

});
document.getElementById('cross').addEventListener('click', () => {
    if (target.classList.contains('sidebar-wrapper')) {
        target.classList.remove('sidebar-wrapper');
    }
    target.classList.add('toggled');
})