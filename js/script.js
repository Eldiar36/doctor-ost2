(function($) {
    $(function() {

        $('.link-city').on('click',  function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div#tabs').find('div.tab').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);