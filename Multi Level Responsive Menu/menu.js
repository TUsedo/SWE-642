(function($) {
    $(function() {
        $('nav ul li > a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            var target = $(e.target);
            if (!target.is(".submenu")) {
                $('.nav-dropdown').not($(this).siblings()).hide();
                $('.nav-dropdown-2').hide();
            }
            e.stopPropagation();
            e.preventDefault();
        });
        $('html').click(function() {
            $('.nav-dropdown').hide();
            $('.nav-dropdown-2').hide();
        });
    });
    $(function() {
        $('.nav-dropdown li > a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown-2').toggle();
            $('.nav-dropdown-2').not($(this).siblings()).hide();
            e.stopPropagation();
        });
    });
    document.querySelector('#nav-toggle').addEventListener('click', function() {
        this.classList.toggle('active');
    });
    $('#nav-toggle').click(function() {
        $('nav ul').toggle();
    });
}(jQuery));