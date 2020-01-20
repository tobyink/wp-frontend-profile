jQuery( document ).ready(function() {

	jQuery('ul.wpfep-tabs').each(function(){

		    // For each set of wpbasis-tabs, we want to keep track of
		    // which tab is active and it's associated content
		    var $active, $content, $links = jQuery(this).find('a');

		    // If the location.hash matches one of the links, use that as the active tab.
		    // If no match is found, use the first link as the initial active tab.
		    $active = jQuery($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
		    $active.addClass('active');

		    $content = jQuery($active[0].hash);

		    // Hide the remaining content
		    $links.not($active).each(function () {
		      jQuery(this.hash).hide();
		    });

		    // Bind the click event handler
		    jQuery(this).on('click', 'a', function(e){
		      // Make the old tab inactive.
		      $active.removeClass('active');
		      $content.hide();

		      // Update the variables with the new link and content
		      $active = jQuery(this);
		      $content = jQuery(this.hash);

		      // Make the tab active.
		      $active.addClass('active');
		      $content.show();

		      // Prevent the anchor's default click action
		      e.preventDefault();
		    });
		});

	//Add required to user_email input field
	jQuery(".wpfep-form-profile input#user_email").prop('required',true);

	jQuery("select").hide();
	jQuery("#custom-role").click(function(){
		jQuery("select").toggle();
	});
	jQuery('.check').click(function() {
		jQuery('.check').not(this).prop('checked', false);
	});
	jQuery('.wpfep-showform-default').click(function() {
		jQuery("#wpfep-default").show();
		jQuery("#custom").hide();
		jQuery(".wpfep-showform-default").prop("checked", true);
		jQuery(".wpfep-showform-custom").prop("checked", false);
	});
	jQuery('.wpfep-showform-custom').click(function() {
		jQuery("#custom").show();
		jQuery("#wpfep-default").hide();
		jQuery(".wpfep-showform-custom").prop("checked", true);
		jQuery(".wpfep-showform-default").prop("checked", false);
	});
});