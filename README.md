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

The order you will include your files in your index.html will be:

- Bootstrap (If included)
- Your css files
- Jquery
- Handlebars
- Brite
- Your Scripts

After that the structure will be very simple. Brite use a default source packages:

- Source
- Source/js/
- Source/css/
- Source/tmpl/
- Source/index.html

NOTE: Js, Css, and Tmpl will be folders

In briteJs you will have one js file, one css file and one tmpl file. This is default, but if you want for example just
one css file for all the templates you can also do that by typing the following.

<pre>
	brite.viewDefaultConfig.loadTmpl = true;	
	brite.viewDefaultConfig.loadCss = false;
</pre>

Note that you can also disable the loading of the template.



 





<pre>

</pre>
