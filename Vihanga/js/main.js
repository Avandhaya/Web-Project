$(document).ready(function() {

    /*---------------Viewport less than or equal to 750px----------*/
    $nav=$('.nav');
    $toggleCollapse= $('.toggle-collapse');

    /**click evene toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    /**Change Navigation Bar Styles After Scrolling */
            /*select window objects*/
    window.addEventListener('scroll', function () {
        /*create the variable header*/
        let header = document.querySelector('header');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('scrolling-active', windowPosition);
    })

    //---------------owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]

    });



})