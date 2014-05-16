(function( $ ) {
    $.fn.textCarousel = function(time) {
      var IN_CLASS = "in";
      var OUT_CLASS = "out";
      var index = 0;
      time = time || 2000;

      function start() {
        var $parent = $(this);
        var $items = $parent.find(".elevate-carousel-item");
        var lengthOfItems = $items.length;
        var height = 0;


        $items.each(function() {
          var itemHeight = $(this).height();
          if (itemHeight > height) {
            height = itemHeight; 
          }
        });


        $parent.height( height );

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