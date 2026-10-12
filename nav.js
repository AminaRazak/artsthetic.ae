// Mobile sidebar navigation
(function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('main-nav');
    var overlay = document.querySelector('.nav-overlay');
    if (!toggle || !nav) return;

    function setOpen(open) {
        document.body.classList.toggle('nav-open', open);
        toggle.setAttribute('aria-expanded', open);
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    toggle.addEventListener('click', function () {
        setOpen(!document.body.classList.contains('nav-open'));
    });

    if (overlay) overlay.addEventListener('click', function () { setOpen(false); });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setOpen(false);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth >= 768) setOpen(false);
    });
})();
