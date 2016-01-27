
//scene  =  div on main page which displays graphics within it
//room = a room the player is currently in
//view = part of the room the player currently views. All quests well be active here (appended to this view)



var view1a = { //start view on gaupvahta
	name: 'Start view',
	domID: '#view-1-a',
	background: 'img/locations/room1/b1.jpeg', //background URL image to be loaded into the scene
	draw: function(){ 
		console.log('drawing interactive elements on view: ' + this.name);

		if(quests.quest1.display){
			console.log('quest to be displayed');
			var quest1 = $("<div class='questElement' id='quest1'></div>");
				quest1.css('margin-left', '465px');
				quest1.css('width', '140px');
				quest1.appendTo('#scene');			
				quest1.data('obj', quests.quest1);
				quest1.click(function(){
					$(this).data('obj').clicked();
				});

		} else {
			console.log('Quest not to be displayed, e.g. solved and inactive');
		}

	}
};



var view1b = {
	name: 'gaupvahta door',
	domID: '#view-1-b',
	background: 'img/locations/room1/b2.jpg', //background URL image to be loaded into the scene
	draw: function(){
		console.log('drawing interactive elements on view: ' + this.name);

	}


};


var room1 = { 
	name: 'gauptvahta',
	views: [view1a, view1b], //each room consists of a number of views. Player can switch between these views.
};