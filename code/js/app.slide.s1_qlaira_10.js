	document.addEventListener('presentationInit', function(){
		var slide = app.slide.s1_10 = {
			elements: {
      		painContent: "#s1_10_2"
    		},
			onEnter:function(slideElement){
				app.menu.show(); 
				util.addClass(slide.element.painContent, 'active');
				presentetion.prev('qlaira', 'qlaira_3', "s1_10");	
				submitSlideEnter('s1_10', '10', 10, '10', 'A WH_Beauty_1_cycle_2015');
				
			},
			onExit:function(slideElement){
				submitSlideExit('s1_10');
			}
		}

	});


function tapWindow1_10(n) {
	var a = document.getElementById('window' + n);
	var b = document.getElementsByClassName('tapsWindow1-10');
	for(var i=0; i<b.length; i++){
    b[i].addClass('hiddenWindow');	
	}	
	
	a.removeClass('hiddenWindow');	
	
};










































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