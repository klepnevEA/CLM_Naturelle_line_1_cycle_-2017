	document.addEventListener('presentationInit', function(){
		var slide = app.slide.s1_qlaira_8 = {
			elements: {
      		painContent: "#s1_qlaira_8_2"
    		},
			onEnter:function(slideElement){
				app.menu.show(); 
				util.addClass(slide.element.painContent, 'active');

				document.getElementById('wrapper_s1_8').addClass('active');
     		presentetion.prev('qlaira', 'qlaira_3', "s1_qlaira_8");
			},
			onExit:function(slideElement){
				submitSlideExit('s1_8');
				
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