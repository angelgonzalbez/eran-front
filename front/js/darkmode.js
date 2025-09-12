var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var themeSidebarIcon = document.getElementById('logo-sidebar');
var themeSidebarIconDark = document.getElementById('logo-sidebar-dark');
var themeFooterIcon = document.getElementById('logo-footer');
var themeFooterIconDark = document.getElementById('logo-footer-dark');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    themeSidebarIconDark.classList.remove('hidden');
    themeFooterIconDark.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    themeSidebarIcon.classList.remove('hidden');
    themeFooterIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');
    themeSidebarIcon.classList.toggle('hidden');
    themeSidebarIconDark.classList.toggle('hidden');
    themeFooterIcon.classList.toggle('hidden');
    themeFooterIconDark.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

});