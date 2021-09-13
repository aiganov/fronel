/************** Скрипты интерфейса селлерки **************/

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

// Custom Scroll

$(".radio-wrap").mCustomScrollbar({
    axis:"x", // horizontal scrollbar
    setLeft: 0,
    advanced:{ autoExpandHorizontalScroll: true },
    theme:"dark"
});

$(".notifications-wrap").mCustomScrollbar({
    axis:"y", // horizontal scrollbar
    advanced:{ autoExpandHorizontalScroll: true },
    theme:"dark",
    scrollInertia: 150,
    scrollbarPosition: "inside"

});

$(".account-seller").mCustomScrollbar({
    axis:"y", // horizontal scrollbar
    advanced:{ autoExpandHorizontalScroll: true },
    theme:"dark",
    scrollInertia: 100,

});


// Notifications Block

var removeClass = true;
$(".notifications").click(function () {
    $(".notifications-wrap").toggleClass('notifications-wrap-active');
    removeClass = false;
});

$(".notifications").click(function() {
    removeClass = false;
});

$("html").click(function () {
    if (removeClass) {
        $(".notifications-wrap").removeClass('notifications-wrap-active');
    }
    removeClass = true;
});



// Toast Notifications

 $(window).on("load",function(){
            //Отключить исчезание уведомлений
            toastr.options.timeOut = 0;
            toastr.options.extendedTimeOut = 0;

            toastr.success('<p class="toastr-notification-title">Уведомление</p>  <p class="toastr-notification-text">Вы успешно  зарегистрировались</p>');

            toastr.info('<p class="toastr-notification-title">Уведомление</p>  <p class="toastr-notification-text">Проверьте правильность введёных данных</p>');
            toastr.error('<p class="toastr-notification-title">Уведомление</p>  <p class="toastr-notification-text">Вы были заблокированы</p>');

        });






/************** Мобильное меню **************/


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

var isMobile = {
	Android: function() {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

if(!isMobile.any()) {
	// Initialize custom scrollbar
	$(".radio-wrap").mCustomScrollbar({
		autoHideScrollbar: true
	});

	$(".account-seller").mCustomScrollbar({
		autoHideScrollbar: true
	});

	$(".notifications-wrap").mCustomScrollbar({
		autoHideScrollbar: true
	});		
}


// Data Tables

$(document).ready(function(){    
   var table= $('#seller_table').DataTable({
        paging: false,

        "sDom":"ltipr",
        "info": false,
            responsive: {
        details: {
            type: 'inline'
        }}
    });

    $('#myInput').keyup(function(){
      table.search($(this).val()).draw() ;
})

});