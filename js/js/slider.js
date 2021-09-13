$(".slider-1 ").slick({
    infinite: !0,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: !0,
    autoplay: !0,
    autoplaySpeed: 2e3,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
})