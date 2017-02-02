(function(config){

	
	
	// Creating our presentation and global namespace "app"
	window.app = new Presentation({
		globalElements: ['mainMenu'],
		type:'json',
		manageMemory: true
	});

	
	// Initiate modules
	app.scroller = new Slidescroller();
	AutoMenu.prototype.hide = function(){
		this.ele.addClass("hidden");
	};
	AutoMenu.prototype.show = function(){
		this.ele.removeClass("hidden");
	};
	app.menu = new AutoMenu({
		attachTo: 'storyboard',
		
		links: {
			s1s: {title: ' ', classname: 'home'},

		}
	});

	app.data = new Data(true);
	//builder.checkIfNeedToLoadPresentation();
	// Initialize presentation
	app.init('s1s', 'front_page');

	app.analytics.init(config);
})();




// Prevent vertical bouncing of slides
document.ontouchmove = function(event){
	event.preventDefault();
};

var ev = "touchend mouseup";

var nav_slide = 's8_1',
nav_dir = 's8_1s';


var prew = {
	"qlaira": {
		"qlaira_1": ["s1_qlaira_1"],
		"qlaira_2": ["s1_qlaira_2","s1_qlaira_3","s1_qlaira_4","s1_qlaira_5"],
		"qlaira_3": ["s1_qlaira_6","s1_qlaira_7","s1_qlaira_8","s1_qlaira_9","s1_qlaira_10","s1_qlaira_11","s1_qlaira_12","s1_qlaira_13"],
		"qlaira_4": ["s1_qlaira_14","s1_qlaira_15","s1_qlaira_16"],
		"qlaira_5": ["s1_qlaira_17","s1_qlaira_18","s1_qlaira_19","s1_qlaira_20","s1_qlaira_21","s1_qlaira_22"],
		"qlaira_6": ["s1_qlaira_23","s1_qlaira_24","s1_qlaira_25"],
		"qlaira_7": ["s1_qlaira_26","s1_qlaira_27","s1_qlaira_28","s1_qlaira_29","s1_qlaira_30","s1_qlaira_31","s1_qlaira_32","s1_qlaira_33","s1_qlaira_34","s1_qlaira_35","s1_qlaira_36"],	
		"qlaira_8": ["s1_qlaira_37","s1_qlaira_38","s1_qlaira_39","s1_qlaira_40","s1_qlaira_41","s1_qlaira_42","s1_qlaira_43","s1_qlaira_44","s1_qlaira_45","s1_qlaira_46","s1_qlaira_47","s1_qlaira_48","s1_qlaira_49","s1_qlaira_50","s1_qlaira_51"],															
		"class": "qlaira",
		"name": "qlaira",
		"prevId": "s1_1s"	
	},

	"mirena": {
		"mirena_1": ["s2_mirena_1"],
		"mirena_2": ["s2_mirena_2","s2_mirena_3","s2_mirena_4"],		
		"mirena_3": ["s2_mirena_5","s2_mirena_6","s2_mirena_7","s2_mirena_8"],
		"mirena_4": ["s2_mirena_9","s2_mirena_10","s2_mirena_11","s2_mirena_12","s2_mirena_13","s2_mirena_14","s2_mirena_15"],	
		"mirena_5": ["s2_mirena_16","s2_mirena_17","s2_mirena_18","s2_mirena_19","s2_mirena_20","s2_mirena_21","s2_mirena_22","s2_mirena_23","s2_mirena_24"],
		"class": "mir",
		"name": "mir",
		"prevId": "s2_1s"	
	},

	"angeliq": {
		"angeliq_1": ["s3_angeliq_1","s3_angeliq_2"],
		"angeliq_2": ["s3_angeliq_3","s3_angeliq_4","s3_angeliq_5","s3_angeliq_6"],		
		"angeliq_3": ["s3_angeliq_7"],
		"angeliq_4": ["s3_angeliq_8"],	
		"angeliq_5": ["s3_angeliq_9","s3_angeliq_10","s3_angeliq_11","s3_angeliq_12","s3_angeliq_13","s3_angeliq_14","s3_angeliq_15"],
		"angeliq_6": ["s3_angeliq_16","s3_angeliq_17","s3_angeliq_18","s3_angeliq_19"],
		"angeliq_7": ["s3_angeliq_20","s3_angeliq_21"],
		"angeliq_8": ["s3_angeliq_22"],
		"angeliq_9": ["s3_angeliq_23"],		
		"class": "ang",
		"name": "ang",
		"prevId": "s3_1s"	
	}

}



var presentetion = {
	bgImg: [],
	popups: [],	
	bgStyle: function(img, slide, count) {
		for (var i = 1; i <= count; i++) {
			bgImg = document.getElementsByClassName(slide + i);
			bgImg[0].style.backgroundImage = "url('content/img/"+ img + "/" + img + "_" + i + ".png')";
		}
	},
	popup: function(id) {
		var id = document.getElementById(id);
		presentetion.popups = document.getElementsByClassName('popups');		
		for (var i = 0; i < presentetion.popups.length; i++) {
			presentetion.popups[i].removeClass('active');
		};
		id.addClass('active');
	},
	tap: function(id) {
		var id = document.getElementById(id);
		presentetion.taps = document.getElementsByClassName('taps');		
		for (var i = 0; i < presentetion.taps.length; i++) {
			presentetion.taps[i].removeClass('active');
		};
		id.addClass('active');
	},	
	closePopup: function() {
		for (var i = 0; i < presentetion.popups.length; i++) {
			if(presentetion.popups.length !== 0) {
				presentetion.popups[i].removeClass('active');
			};
		};
		presentetion.popups = [];
	},
	animationBlocks: function(id, arrow) {
		var id = document.getElementById(id);
		var arrow = document.getElementById(arrow);		
		setTimeout(function(){
			id.toggleClass('active');
			arrow.toggleClass('active');
		}, 300)

	},
	openAccordeon: function(id) {
		var id = document.getElementById(id);
		var blocks = document.getElementsByClassName('blocks');

		if(!(id.hasClass('active')))	{		
			for (var i = 0; i < blocks.length; i++) {
				blocks[i].removeClass('active');
			};	
			id.addClass('active');
		} else {
			id.removeClass('active');
		}				
	},
	secondId: '',
	firstId: '',
	prev: function(presId, groupId, slideId) {
		if(presId === 'empty') {
			document.getElementById('thumbs').classList.add('hiddenThrumbs');
			document.getElementById('thumbs').classList.remove("active");
		} else {
			document.getElementById('thumbs').classList.remove('hiddenThrumbs');				
			presentetion.firstId = groupId;

			var handle_middle = document.getElementById("handle_middle");
			var preview_container = document.getElementById("preview_container");				
			var slide_id = "",
					prev_id;

			handle_middle.classList.add(prew[presId]["class"]);

			if(presentetion.firstId !== presentetion.secondId) {

				removeChildrenRecursively(handle_middle);
				removeChildrenRecursively(preview_container);			

				for(var i = 0; i< prew[presId][groupId].length; i++) {

					var slideTrumb = document.createElement('div');
					slideTrumb.classList.add("indicator");
					slideTrumb.id = prew[presId][groupId][i] + '_indicator';

					handle_middle.appendChild(slideTrumb);

					var slidePrev = document.createElement('li');
					slidePrev.innerHTML = '<li class="prev" id="' + prew[presId][groupId][i] + '_prev" onclick="app.goTo(\''+ prew[presId]["prevId"] + '\',\'' + prew[presId][groupId][i] + '\')" ><img  src="content/img/thumbs/' + prew[presId][groupId][i] + '.jpg"></li>'				
					preview_container.appendChild(slidePrev);
				};
				presentetion.secondId = groupId;
				slide_id = document.getElementById(slideId + '_indicator');
				prev_id = document.getElementById(slideId + '_prev');
				slide_id.classList.add("active");
				prev_id.classList.add("active");

				} else {
					var indicator = document.getElementsByClassName("indicator"), 
					prev = document.getElementsByClassName("prev");	
					slide_id = document.getElementById(slideId + '_indicator');
					prev_id = document.getElementById(slideId + '_prev');			
					for (var i = 0; i<indicator.length; i++) {
						indicator[i].classList.remove("active");
					};
					for (var i = 0; i<prev.length; i++) {
						prev[i].classList.remove("active");
					};

					slide_id.classList.add("active");
					prev_id.classList.add("active");			
				}
		}

		},

		openPrev: function() {
			var thumbs = document.getElementById("thumbs");

			if(!thumbs.hasClass("active")) {
				thumbs.classList.add("active");
			} else if(thumbs.hasClass("active")){
				thumbs.classList.remove("active");
			};

		},
		menuTop: function(product){
			var menu = document.getElementById('mainMenu');
			if(product == 'empty') {
				menu.innerHTML = '<nav id="menuTop" class=""></nav>';
			};	
			if(product == 'Flex') {
				menu.innerHTML = '<nav id="menuTop" class="">\
				<ul id="menu-1" class="menu_top menu_Flex">\
					<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"><span onclick="app.goTo(\'s1s\', \'s1\')"><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
					<li class="menu_top_2" onclick="app.goTo(\'s3_1s\', \'s3_2\')"><span>Семейство<br/> Джес<sup>&reg;</sup></span></li>\
					<li class="menu_top_3" onclick="app.goTo(\'s3_1s\', \'s3_3\')"><span>Джес<sup>&reg;</sup> во флекс-<br/>картридже</span></li>\
					<li class="menu_top_4" onclick="app.goTo(\'s3_1s\', \'s3_4\')"><span>Новый<br/>режим</span></li>\
					<li class="menu_top_5" onclick="app.goTo(\'s3_1s\', \'s3_7\')"><span>Клик<br/>(Clyk)</span></li>\
					<li class="menu_top_6" onclick="app.goTo(\'s3_1s\', \'s3_12\')"><span>Профиль кровотечений<br/> и тромбозы</span></li>\
					<li class="menu_top_7" onclick="app.goTo(\'s3_1s\', \'s3_16\')"><span>Эффективность</span></li>\
					<li class="menu_top_8" onclick="app.goTo(\'s3_1s\', \'s3_18\')"><span>Дисменорея</span></li>\
					<li class="menu_top_9" onclick="app.goTo(\'s3_1s\', \'s3_19\')"><span>Кому Джес<sup>&reg;</sup> во флекс-<br/>картридже и Клик(Clyk)</span></li>\
					<li class="menu_top_10" onclick="app.goTo(\'s3_1s\', \'s3_31\')"><span>Опрос 1</span></li>\
					<li class="menu_top_11" onclick="app.goTo(\'s3_1s\', \'s3_32\')"><span>Опрос 2</span></li>\
					<li class="menu_top_12" onclick="app.goTo(\'s3_1s\', \'s3_33\')"><span>Опрос 3</span></li>\
				</ul></nav>';

				/*touch_scroll_menu*/
			};
			if(product == 'Jass') {
				menu.innerHTML = '<nav id="menuTop" class="">\
					<ul id="menu-1" class="menu_top menu_Jass">\
						<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
						<li class="menu_top_2" onclick="app.goTo(\'s3_1s\', \'s3_2\')"><span>Для кого?</span></li>\
						<li class="menu_top_3" onclick="app.goTo(\'s3_1s\', \'s3_6\')"><span>Эффективность</span></li>\
						<li class="menu_top_4" onclick="app.goTo(\'s3_1s\', \'s3_12\')"><span>Длительность</span></li>\
						<li class="menu_top_5" onclick="app.goTo(\'s3_1s\', \'s3_15\')"><span>Безопасность</span></li>\
						<li class="menu_top_6" onclick="app.goTo(\'s3_1s\', \'s3_23\')"><span>Акне</span></li>\
						<li class="menu_top_7" onclick="app.goTo(\'s3_1s\', \'s3_24\')"><span>СПКЯ</span></li>\
						<li class="menu_top_8" onclick="app.goTo(\'s3_1s\', \'s3_38\')"><span>ПМС</span></li>\
						<li class="menu_top_9" onclick="app.goTo(\'s3_1s\', \'s3_40\')"><span>FAQ</span></li>\
					</ul></nav>';
			};
			if(product == 'Ang') {
				menu.innerHTML = '<nav id="menuTop" class="">\
				<ul id="menu-1" class="menu_top menu_Ang">\
					<li class="home-menu menu_top_0" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
					<li class="menu_top_1" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_1\')"><span>Профили<br>эффективности</span></li>\
					<li class="menu_top_2" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_3\')"><span>Профили<br>безопасности</span></li>\
					<li class="menu_top_3" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_7\')"><span>Качество<br>жизни</span></li>\
					<li class="menu_top_4" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_8\')"><span>Анжелик<sup>&reg;</sup><br> vs Фемостон</span></li>\
					<li class="menu_top_5" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_9\')"><span>Кому Анжелик<sup>&reg;</sup><br>и Анжелик® Микро</span></li>\
					<li class="menu_top_6" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_16\')"><span>Ультранизкая <br>доза</span></li>\
					<li class="menu_top_7" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_20\')"><span>Длительность</span></li>\
					<li class="menu_top_8" onclick="app.goTo(\'s3_1s\', \'s3_angeliq_22\')"><span>Дополнительные<br>преимущества</span></li>\
					</ul></nav>';
			};
			if(product == 'Ang_M') {
				menu.innerHTML = '<nav id="menuTop" class=""><ul id="menu-1" class="menu_top menu_Ang_M"><li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"> <span><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li><li class="menu_top_2" onclick="app.goTo(\'s4_1s\', \'s4_2\')"><span>Ультранизкая<br/> доза</span></li><li class="menu_top_3" onclick="app.goTo(\'s4_1s\', \'s4_5\')"><span>Ультра доза vs<br/>Фитоэстрогены</span></li>				<li class="menu_top_4" onclick="app.goTo(\'s4_1s\', \'s4_6\')"><span>Эффективность</span></li>				<li class="menu_top_5" onclick="app.goTo(\'s4_1s\', \'s4_7\')"><span>Переносимость</span></li>				<li class="menu_top_6" onclick="app.goTo(\'s4_1s\', \'s4_8\')"><span>Дополнительные<br/>преимущества</span></li>				<li class="menu_top_7" onclick="app.goTo(\'s4_1s\', \'s4_9\')"><span>Безопасность</span></li>				<li class="menu_top_8" onclick="app.goTo(\'s4_1s\', \'s4_10\')"><span>Кому<br/>Анжелик<sup>&reg;</sup> Микро</span></li>    <li class="menu_top_9" onclick="app.goTo(\'s4_1s\', \'s4_23\')"><span>Длительность</span></li>     <li class="menu_top_10" onclick="app.goTo(\'s4_1s\', \'s4_24\')"><span>Схемы<br/>назначения</span></li></ul></nav>';
			};
			if(product == 'Mir') {
				menu.innerHTML = '<nav id="menuTop" class="">\
					<ul id="menu-1" class="menu_top menu_Mir">\
						<li class="home-menu menu_top_1" onclick="app.goTo(\'s1s\', \'s1\')"><span onclick="app.goTo(\'s1s\', \'s1\')"><img onclick="app.goTo(\'s1s\', \'s1\')" src="content/img/menu/home-button.png"></span></li>\
						<li class="menu_top_2" onclick="app.goTo(\'s4_1s\', \'s4_2\')"><span>Что такое <br>ВМС Мирена<sup>&reg;</sup>?</span></li>\
						<li class="menu_top_3" onclick="app.goTo(\'s4_1s\', \'s4_4\')"><span>Эффективность</span></li>\
						<li class="menu_top_4" onclick="app.goTo(\'s4_1s\', \'s4_5\')"><span>Безопасность<br/>и переносимость</span></li>\
						<li class="menu_top_5" onclick="app.goTo(\'s4_1s\', \'s4_11\')"><span>ОМК</span></li>\
						<li class="menu_top_6" onclick="app.goTo(\'s4_1s\', \'s4_17\')"><span>Компонент МГТ</span></li>\
						<li class="menu_top_7" onclick="app.goTo(\'s4_1s\', \'s4_21\')"><span>Портреты<br>пациенток</span></li>\
						<li class="menu_top_8" onclick="app.goTo(\'s4_1s\', \'s4_36\')"><span>Мирабель</span></li>\
						<li class="menu_top_9" onclick="app.goTo(\'s4_1s\', \'s4_42\')"><span>Что выбирают<br>эксперты?</span></li>\
					</ul></nav>';
			};
			// scrolMenu()
			scrolNav();	
		},




		menuTopSelected: function(selectLi) {
			var menu_top_before;
			if(selectLi != menu_top_before) {
				$("#menuTop li").removeClass('selected');
				$("." + selectLi).addClass('selected');
				menu_top_before = selectLi;
			};
		}

	}

	function removeChildrenRecursively(node)
	{
		if (!node) return;
		while (node.hasChildNodes()) {
			removeChildrenRecursively(node.firstChild);
			node.removeChild(node.firstChild);
		}
	};

/*функция скроллинга меню*/
// function scrolMenu() {

// 	var preview = document.getElementsByClassName("touch_scroll_menu"); 

// 	var scrollStartPos=0;
// 	for(var i = 0, j=preview.length; i<j; i++){

// 		preview[i].addEventListener("touchstart", function(event) { 
// 			scrollStartPos=this.scrollLeft+event.touches[0].pageX; 
// 		},false); 

// 		preview[i].addEventListener("touchmove", function(event) { 
// 			menuGo = false;
// 			this.scrollLeft=scrollStartPos-event.touches[0].pageX; 
// 		},false); 
// 	};


// };


/*функция скроллинга*/
function scrolNav() {
	console.log("scrolNav");
	var preview = document.getElementsByClassName("touch_scroll"); 
	var scrollStartPos=0;
	for(var i = 0, j=preview.length; i<j; i++){


		preview[i].addEventListener("touchstart", function(event) { 
			scrollStartPos=this.scrollTop+event.touches[0].pageY; 
		},false); 

		preview[i].addEventListener("touchmove", function(event) { 
			this.scrollTop=scrollStartPos-event.touches[0].pageY; 
		},false); 
	};


};

scrolNav();	



/*запуск / остановка видео*/

function playVideo(video){
	document.getElementById('wraper_' + video).classList.add('active');
	document.getElementById(video).play();
};	


function stopVideo(video){
	document.getElementById(video).pause();
	document.getElementById('wraper_' + video).classList.remove('active');
};

	


/*функция навигации с возможностью возврата назад*/
var thisSlise = ''
function goSlide(section, slideGo) {
		thisSlise = event.target.closest('article').id;
		console.log(thisSlise);
		app.goTo(section, slideGo);
}

function goBack(section, slideGo) {
		app.goTo(section, slideGo);
}

// /*отправка статистики*/
// var response_value = "",
// question_value = "",
// label_id = 0;
// function submitDataFlex(){
// 	ag.submit.data({
// 		unique: true,
// 		category: "CLM_Beauty_line_1cycle_2016",
// 		categoryId: label_id,
// 		label: question_value,
// 		value: response_value,
// 		valueType: "text",
// 		labelId: label_id,
// 		path: app.getPath()
// 	});
// 	console.log("label_id = " + label_id + ": " + question_value + ": " + response_value);
// };

// function submitData(val, question){
// 	ag.submit.data({
// 		unique: true,
// 		category: "CLM_VITA_line_1cycle_2016",
// 		categoryId: "CLM_VITA_line_1cycle_2016",
// 		label: question,
// 		value: val,
// 		valueType: "text",
// 		labelId: "Id",
// 		path: app.getPath()
// 	});
// 	console.log(val + ": "+ question);
// };

var response_value = "",
question_value = "",
label_id = 0;

function getValQuestionnaire(id, name, question, text) {
	label_id = '';
	response_value = '';
	question_value = '';

	label_id = id;
	$('input[name="'+name+'"]:checked').each(function() {

		response_value = response_value + this.value + ", ";
	});	
	question_value = question;
	if($('#checkbox_' + id).is(":checked")){
		console.log($('#' + text));
		response_value = response_value + $('#' + text).val();
	} 

	submitData();
}

/*отправка статистики*/

function submitData(){
	ag.submit.data({
		unique: true,
		category: "A CLM_Beauty_line_2cycle_2016",
		categoryId: label_id,
		label: question_value,
		value: response_value,
		valueType: "text",
		labelId: label_id,
		path: app.getPath()
	});
	//alert("label_id = " + label_id + ": " + question_value + ": " + response_value);
};