(function($){
    $.fn.extend({
        animateCss: function (animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
            return this;
        }
    });
})(jQuery);

var daltan = {};
daltan.works = {
    outerFestival : {
        landing: function(){
            $('#shoppingChanceEffect1').animateCss('fadeInDown');
            $('#shoppingChanceEffect2').animateCss('fadeInUp');
        },
        tip : function(){
            $('.tip').find('dt').on('click', function(e){
                e.preventDefault();
                var $wrap = $(this).closest('.tip');
                if($wrap.hasClass('active')) {
                    $wrap.removeClass('active');
                } else {
                    $wrap.addClass('active');
                }
            })
        }
    }
};