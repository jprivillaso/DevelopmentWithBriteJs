(function($) {

    brite.registerView("mainView", {emptyParent:true, loadCss:false}, {

        create: function(data, config) {
            return render("tmpl-mainView", data);
        },

        /*
         * will be called after the create and before the postDisplay.
         * this.$element is the jQuery wrapped HTML Element for this view instance
         * this.id is a unique id for this view instance
         */
        init: function(data, config){
        },

        /*
         * will be called after the INIT and after
         * the element has been added to the DOM.
         * Good place to do binding here.
         * same object, so same properties (i.e. this.$element, this.id).
         */
        postDisplay: function(data, config){
        	
        },

        /*
         * will be called when the view will be removed.
         * Note: make sure to use $.fn.bRemove() or $.fn.bEmpty() to trigger this.
         */
        destroy: function() {

        },

        events: {
        	
        },

        // bind DOM events at the Document level same key format as .events
        // Note: those event will be automatically name spaced with the view id
        //       and cleaned up on view destroy
        docEvents: {
            
        }

    });

})(jQuery);