/* -----

	Screen Objects
		
	------	*/

var TEXLoader = me.ScreenObject.extend({
	/*---
	
		constructor
		
		---*/
	init : function() {
		// call the parent constructor
		this.parent(true);
		
		// background image
		this.backgroundImg = me.loader.getImage("loader");

		// setup a callback
		me.loader.onProgress = this.onProgressUpdate.bind(this);

	},
	
	/* ---
		onReset (called by the engine) function
	   ----*/
	
	onResetEvent : function()
	{
		// flag to know if we need to refresh the display
		this.invalidate = false;

		// load progress in percent
		this.loadPercent = 0;
	},
	
	// reset the scroller
	scrollover : function()
	{

	},

	
	// make sure the screen is refreshed every frame 
	onProgressUpdate : function(progress) {
		this.loadPercent = progress;
		this.invalidate = true;
	},

	// make sure the screen is refreshed at every change 
	update : function() 
	{
		if (this.invalidate === true) {
			// clear the flag
			this.invalidate = false;
			// and return true
			return true;
		}
		// else return false
		return false;
	},

	/*---
	
		draw function
	  ---*/

	draw : function(context) 
	{
		// display the background
		context.drawImage(this.backgroundImg, 0 ,0);
	},
	
	/*---
	
		called by the engine when switching state the loader
	  ---*/
	
	onDestroyEvent : function()
	{
		// "nullify" all objects
		this.backgroundImg = null;

  	},


});
