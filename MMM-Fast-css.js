/* Magic Mirror
 * Module: MMM-Fast-css
 * By Piranha
 * MIT Licensed
 */
Module.register("MMM-Fast-css", {

    // Module config defaults.
    defaults: {
		css: "3", // 1=default, 2=Black Boxes, 3=white Boxes, 4=Material, 5=Trending, 6=Neumorphism, 7=Glass, 8=iOS, 9=Jeans ,10=Green, 11=dark
    },
	
    // load css file from config.js
    getStyles: function() {
      if(this.config.css != ""){
        return ["modules/MMM-Fast-css/css/MMM-Fast-css" + this.config.css + ".css"];
      } else {
        return ["modules/MMM-Fast-css/css/MMM-Fast-css1.css"]; // default.css
      }
    },

    start: function() {
        Log.info("Starting module: " + this.name); 
        this.today = ""; 
    },

   getDom: function() {  
		 
        var wrapper = document.createElement("div");       
	 
        return wrapper;
		  
    },  
});