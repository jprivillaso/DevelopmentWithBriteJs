DevelopmentWithBriteJs
======================

Templating is a way of develop web applications very used these days. One of the advatages that i found is that you
can divide your interfaces and develop them in a better and more organized way. There are lots of frameworks that
use this modality, and in this case i chose BriteJs.

BriteJs is not a very common framework but i found it really powerful. We will see the main funcionalities and basic 
structure that you will require in your code. The complete code is found in this repository, you can include it to your
project easily, all the libraries needed are in the folder /briteApp/libraries.

To use briteJs you will have two dependencies:

- Jquery
- Handlebars

You will include these libraries in your index.html, and it is also recommended to use Bootstrap 3 that is almost in my
opinion one of the most powerful front-end libraries well known these days.

<pre>
Handlebars.templates = Handlebars.templates || {};

function render(templateName, data) {
	
	var tmpl = Handlebars.templates[templateName];
	
	if (!tmpl) {
		
		tmpl = Handlebars.compile($("#" + templateName).html());
		Handlebars.templates[templateName] = tmpl;
		
	}
	return tmpl(data);
}

brite.viewDefaultConfig.loadTmpl = true;	
brite.viewDefaultConfig.loadCss = false;

brite.display("mainView", "#mainContainer");
</pre>
