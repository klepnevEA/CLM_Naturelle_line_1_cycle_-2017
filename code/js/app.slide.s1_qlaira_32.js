	document.addEventListener('presentationInit', function(){
		var slide = app.slide.s1_qlaira_32 = {
			elements: {
      		painContent: "#s1_qlaira_32_2"
    		},
			onEnter:function(slideElement){
				app.menu.show(); 
				util.addClass(slide.element.painContent, 'active');
				document.getElementById('animation_s1_32').addClass('active');				
     		presentetion.prev('qlaira', 'qlaira_7', "s1_qlaira_32");
			},
			onExit:function(slideElement){
				submitSlideExit('s1_32');
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