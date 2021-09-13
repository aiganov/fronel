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
    scrollInertia: 300,
    scrollbarPosition: "inside"

});

$(".account-seller").mCustomScrollbar({
    axis:"y", // horizontal scrollbar
    advanced:{ autoExpandHorizontalScroll: true },
    theme:"dark",
    scrollInertia: 300,

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
