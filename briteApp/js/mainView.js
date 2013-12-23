(function($) {

    brite.registerView("mainView", {emptyParent:true, loadCss:false}, {

        create: function(data, config) {
            return render("tmpl-mainView", data);
        },

        /*
         * will be called after create
         */
        init: function(data, config){
        },

        /*
         * will be called after init 
         */
        postDisplay: function(data, config){
        	
        },

        /*
         * will be called when the view is removed.
         */
        destroy: function() {

        },
        
        /*
        * Binding events. Accept binding jquery methods
        */
        events: {
        	
        },

        /* 
        * bind DOM events at the Document level same key format as .events
        */
        docEvents: {
            
        }

    });

})(jQuery);
