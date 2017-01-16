	document.addEventListener('presentationInit', function(){
		var slide = app.slide.s1_qlaira_1 = {
			elements: {
      		painContent: "#s1_qlaira_1_2"
    		},
			onEnter:function(slideElement){
				console.log('!!!');	
				app.menu.show(); 
				util.addClass(slide.element.painContent, 'active');

				presentetion.bgStyle('Qlaira_Vita', 'bg_s1_', 35);
				presentetion.prev('qlaira', 'qlaira_1', "s1_1");					
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