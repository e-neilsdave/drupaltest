(function($) {
  Drupal.behaviors.my_module = {
    attach : function(context, settings) {
    	//console.log("i am here");
    	$('#block-myblock-myblock-primenodes .node-title a ').addClass('title-css');

}
};
})(jQuery);