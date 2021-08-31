$(document).ready(function() {

    /*---------------Viewport less than or equal to 750px----------*/
    $nav=$('.nav');
    $toggleCollapse= $('.toggle-collapse');

    /**click evene toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

})