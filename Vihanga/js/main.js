$(document).ready(function() {

    /*---------------Viewport less than or equal to 750px----------*/
    $nav=$('.nav');
    $toggleCollapse= $('.toggle-collapse');

    /**click evene toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    //owl-carsousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        /**Navigation Icon */
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    });

})