(function( $ ) {
    $.fn.textCarousel = function(time) {
      var IN_CLASS = "in";
      var OUT_CLASS = "out";
      var index = 0;
      time = time || 2000;

      function start() {
        var $parent = $(this);
        var $items = $parent.find(".text-carousel-item");
        var lengthOfItems = $items.length;

        $parent.height( $items.first().height() );

        if ( lengthOfItems < 2) {
          return;
        }

        setInterval(function() {
          $items.eq(index).removeClass(IN_CLASS).addClass(OUT_CLASS);
          index = (index+1 >= lengthOfItems) ? 0 : index+1;
          $items.eq(index).removeClass(OUT_CLASS).addClass(IN_CLASS);
        }, time);
      }
   
      this.each(start);

      return this;
    };
}( jQuery ));