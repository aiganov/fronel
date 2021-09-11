// scroll enable || disable
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
}
catch (e) { }
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

// Header Menu
var headerButton = document.querySelector(".menu-button");
var headerMenu = document.querySelector(".nav");
var menuOpened = false;
var menuToggle = function () {
    checkMenuClass();
    menuOpened = !menuOpened;
    headerButton.classList.toggle("open");
    headerMenu.classList.toggle("open");
};

function checkMenuClass() {
    if (menuOpened == false) {
        disableScroll();
    }
    else {
        enableScroll();
    }
}  
headerButton.onclick = menuToggle;
window.onclick = function (e) {
    if (menuOpened &&
        !e.composedPath().includes(headerButton) &&
        !e.composedPath().includes(headerMenu))
        menuToggle();
};

// Registration Form
document.getElementsByClassName("register-top-btn")
    var register = function(a) {
        for (var b = document.getElementsByClassName("register-login"), c = document.getElementsByClassName("register-registration"), d = 0; d < btn.length; d++)
            btn[d].classList.remove("active");
        a.classList.add("active"),
        c[0].classList.add("active"),
        b[0].classList.remove("active")
    }
      , login = function(a) {
        for (var b = document.getElementsByClassName("register-login"), c = document.getElementsByClassName("register-registration"), d = 0; d < btn.length; d++)
            btn[d].classList.remove("active");
        a.classList.add("active"),
        b[0].classList.add("active"),
        c[0].classList.remove("active")
    }
      , btn = document.getElementsByClassName("register-top-btn");


// Aside Menu
var headerButton = document.querySelector(".menu-button");
var headerMenu = document.querySelector(".aside-wrap");
var menuOpened = false;
var menuToggle = function () {
    checkMenuClass();
    menuOpened = !menuOpened;
    headerButton.classList.toggle("open");
    headerMenu.classList.toggle("open");
};

function checkMenuClass() {
    if (menuOpened == false) {
        disableScroll();
    }
    else {
        enableScroll();
    }
}  
headerButton.onclick = menuToggle;
window.onclick = function (e) {
    if (menuOpened &&
        !e.composedPath().includes(headerButton) &&
        !e.composedPath().includes(headerMenu))
        menuToggle();
};


// Custom Dropdown select

$(document).ready(function() {
  $('select').prettyDropdown({
    width: "100%"
  })
});