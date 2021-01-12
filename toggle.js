let menuOpened = false
function toggle(baseUrl) {
    menuOpened = !menuOpened
    document.getElementById('toggle').src = menuOpened ? baseUrl + 'close.svg' : baseUrl + 'open.svg'
    let main = document.getElementById('main');
    let nav = document.getElementById('navigation');
    main.classList.toggle('active');
    nav.classList.toggle('active');
}


