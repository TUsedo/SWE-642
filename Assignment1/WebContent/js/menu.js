(function ($) {
    $(function () {
        $('.nav-list li > a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            var target = $(e.target);
            if (!target.is(".submenu")) {
                $('.nav-dropdown').not($(this).siblings()).hide();
                $('.nav-dropdown-2').hide();
            }
            e.stopPropagation();
            e.preventDefault();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
            $('.nav-dropdown-2').hide();
        });
    });
    $(function () {
        $('.nav-dropdown li > a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown-2').toggle();
            $('.nav-dropdown-2').not($(this).siblings()).hide();
            e.stopPropagation();
        });
    });
    document.querySelector('#nav-toggle').addEventListener('click', function () {
        this.classList.toggle('active');
    });
    $('#nav-toggle').click(function () {
        $('nav ul').toggle();
    });

    //Jquery to link contact us from footer to contact us tab on about page
    $(function () {
        // Javascript to enable link to tab
        var hash = document.location.hash;
        if (hash) {
            $('.nav-pills a[href="' + hash + '"]').tab('show');
        }
        // Change hash for page-reload
        $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
            window.location.hash = e.target.hash;
        });
    });
}(jQuery));