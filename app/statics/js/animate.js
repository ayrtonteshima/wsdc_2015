// -----------------------------------------------------  Animation
	
	
	jQuery(window).load(function(e) {
        jQuery(".og-grid").waypoint({  // Service
	
			handler: function portfolioPopup(){
						jQuery('.og-grid>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '90%'
			
		});
		
		jQuery(".og-grid-2").waypoint({  // Chart
	
			handler: function portfolioPopup(){
						jQuery('.og-grid-2>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '70%'
			
		});
		jQuery(".og-gridd").waypoint({  // Chart
	
			handler: function portfolioPopup(){
						jQuery('.og-gridd>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 600));
							}
						});	
					},
			offset: '80%'
			
		});
		jQuery(".og-griddd").waypoint({  // Chart
	
			handler: function portfolioPopup(){
						jQuery('.og-gridd>li').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 1000));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".grid").waypoint({  // Team
	
			handler: function portfolioPopup(){
						jQuery('.grid>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 600));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".con-an").waypoint({  // Content Box
	
			handler: function portfolioPopup(){
						jQuery('.con-an>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".con-an-1").waypoint({  // Blog
	
			handler: function portfolioPopup(){
						jQuery('.con-an-1>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".og-grid-4").waypoint({  // portfolio 
	
			handler: function portfolioPopup(){
						jQuery('.og-grid-4>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '80%'
			
		});
		
		jQuery(".og-grid-5").waypoint({  // Pricess 
	
			handler: function portfolioPopup(){
						jQuery('.og-grid-5>div').each(function(i){
							var popupItem = jQuery(this)
							if (!popupItem.hasClass('mypassion-animation')) {
								setTimeout(function(){ popupItem.addClass('mypassion-animation') }, (i * 200));
							}
						});	
					},
			offset: '50%'
			
		});
		
    });