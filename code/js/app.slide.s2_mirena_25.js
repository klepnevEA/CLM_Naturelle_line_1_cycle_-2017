	document.addEventListener('presentationInit', function(){
		var slide = app.slide.s2_mirena_25 = {
			elements: {
      		painContent: "#s2_mirena_25_2"
    		},
			onEnter:function(slideElement){
				console.log('thisSlise = ' + thisSlise);				
				app.menu.show(); 
				util.addClass(slide.element.painContent, 'active');
				presentetion.prev('empty');



			},
			onExit:function(slideElement){
				submitSlideExit('s1_1');
			}
		}
	});










































/*document.addEventListener('presentationInit', function() {
													   
  var slide = app.slide.s1 = {
	  
  	elements: {
      painContent: "#s1_2"
    },
    onEnter: function(ele) {
      util.addClass(slide.element.painContent,'active');
		document.getElementById('mainmenu').style.cssText="top:-50px;";
    },
    onExit: function(ele) {
      util.removeClass(slide.element.painContent,'active');
	  
    }
  };


}); 
*/
/*var link1;
link1 = prompt(link1);
link1 = "s" + link1;
setTimeout(function() { app.slideshow.scrollTo(link1) }, 500);*/