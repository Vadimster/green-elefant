
var config = {

	game: {		
		
		player: {
			username: null,
			clicksCounter: 0, //counts clicks the user made in the document.
			pointsLimit: 5, //number of points a player can have combined for all skills. Must be odd!
			strength: 3,
			charisma: 2,
		},

		started: false, //clicks are captures only if game is started
		

		init: function(){
			$('body').empty();
			$('body').append('<div class="wrapperTable"></div>');
				$('.wrapperTable').append('<div class="wrapperCell"></div>');
					$('.wrapperCell').append('<section class="content"></section>');
						$('.content').append('<div class="flipper-left"> << </div>');
							$('.flipper-left').click(function() {
								config.scene.flip('left');
								});
						$('.content').append('<div id="scene"></div>');
						$('.content').append('<div class="flipper-right"> >> </div>');
							$('.flipper-right').click(function() {
								config.scene.flip('right');
								});							
						$('.content').append('<div id="wrapperInventory"></div>');
							$('#wrapperInventory').append('<div id="inventory"></div>');
							$('#wrapperInventory').append('<div id="inventory-item-name"></div>');
			
			$('body').append('<div id="item-info-dialog">'); //Hidden dialog
				$('#item-info-dialog').append('<div class="dialog-bg"></div>');
					$('.dialog-bg').append('<div class="dialog-picture"></div>');
					$('.dialog-bg').append('<div class="dialog-title title"><h1></h1></div>');
					$('.dialog-bg').append('<div class="dialog-text text"><p></p></div>');

			config.inventory.draw();
			config.scene.update(room1, 0);
			this.started = true;
		},

		save: function(){
			console.log('config.game.save() launched');
			dialog.save();
		},

		load: function(){
			console.log('config.game.load() launched');
		}
	},


	inventory: {
		box: [hand, fork], //inventory container
		activeItemIndex: 2, //array index of currently active item. Zero at game start

		draw: function(){
			console.log('config.inventory.draw() launched');
			$('#inventory').empty();
			$('#inventory-item-name').empty();
			for (i = 0; i< this.box.length; i++){ //ensure all elements are set to inactive
				this.box[i].equipped = false;
			}	

			console.log('Active item index is now: ' + this.activeItemIndex);

			if (this.box[this.activeItemIndex] === undefined){
				console.log('No item with index found in array. This means there is nothing before this item.'); 

				var counter = 2;
				for (i=0; i<2; i++){
					var precedingIndex = this.activeItemIndex-counter;
					console.log(precedingIndex);
					if (this.box[precedingIndex] === undefined){ //
						console.log('preceding item with index ' +precedingIndex+ ' is undefined');
						var item = $('<div class="item-inv-empty"></div>');
						item.appendTo('#inventory');
						counter--;
					} else {
						console.log('preceding item with index ' +precedingIndex+ ' exists.');
						
						var item = this.box[precedingIndex];
						item.div = $('<div class="item-inv-empty"></div>');
						item.div.css('background-image', 'url('+this.box[precedingIndex].icon+')');
						item.div.data('obj', item);
						item.div.click(function(){
							$(this).data('obj').clicked();

						});
						item.div.appendTo('#inventory');
						counter--;
					}						
				}


				var activeItem = $('<div class="item-inv-active"></div>'); //active item box is empty 
				activeItem.appendTo('#inventory');
			
				var counter = 1; //this counter used as starting value for incrementing further and to refer to array elements following the activeItemIndex to check if they are undefined.
				for(i=0; i < 2; i++){
					var followingIndex = this.activeItemIndex+counter //index of an element following currently active one.
					console.log(followingIndex);

					if (this.box[followingIndex] === undefined){
						console.log('item following active Idex is undefined');
						var item = $('<div class="item-inv-empty"></div>');
						item.appendTo('#inventory');
						counter++;
					} else {
						console.log('Item in array with index ' +followingIndex+ ' exists');
						var item = this.box[followingIndex];
						item.div = $('<div class="item-inv-empty"></div>');
						item.div.css('background-image', 'url('+this.box[followingIndex].icon+')');
						item.div.data('obj', item);
						item.div.click(function(){
							$(this).data('obj').clicked();

						});

						item.div.appendTo('#inventory');			
						counter++;
					}
				} //end of FOR
			
			} else { //active item exists in array
				console.log('Item with current activeItemIndex of ' +this.activeItemIndex+ ' exists in array');
				
				var counter = 2;
				for (i=0; i<2; i++){
					var precedingIndex = this.activeItemIndex-counter;
					if (precedingIndex < 0){ //
						console.log('preceding item with index ' +precedingIndex+ ' is undefined');
						var item = $('<div class="item-inv-empty"></div>');
						item.appendTo('#inventory');
						counter--;
					} else {
						console.log('preceding item with index ' +precedingIndex+ ' exists.');

						var item = this.box[precedingIndex];
						item.div = $('<div class="item-inv-empty"></div>');
						item.div.css('background-image', 'url('+this.box[precedingIndex].icon+')');
						item.div.data('obj', item);
						item.div.click(function(){
							$(this).data('obj').clicked();

						});

						item.div.appendTo('#inventory');
						counter--;
					}						
				}

				var activeItem = this.box[this.activeItemIndex];
				activeItem.div = $('<div class="item-inv-active"></div>');  
				activeItem.div.css('background-image', 'url('+this.box[this.activeItemIndex].icon+')'); 
				activeItem.div.data('obj', activeItem);
				activeItem.div.click(function(){
							$(this).data('obj').clicked();
				});

				activeItem.div.appendTo('#inventory');
				this.box[this.activeItemIndex].equipped = true;
				$('#inventory-item-name').html(this.box[this.activeItemIndex].name);

				var counter = 1; //TO DO  -  DEACTIVATE ALL THESE 2 ITEMS!
				for(i=0; i < 2; i++){
					var followingIndex = this.activeItemIndex+counter //index of an element following currently active one.
					if (this.box[followingIndex] === undefined){
						console.log('following item with index ' +followingIndex+ ' is does not exist in array' );
						var item = $('<div class="item-inv-empty"></div>');
						item.appendTo('#inventory');
						counter++;
					} else {
						console.log('following item with index ' +followingIndex+ ' exists' );
						
						var item = this.box[followingIndex];
						item.div = $('<div class="item-inv-empty"></div>');
						item.div.css('background-image', 'url('+this.box[followingIndex].icon+')');
						item.div.data('obj', item);
						item.div.click(function(){
							$(this).data('obj').clicked();

						});

						item.div.appendTo('#inventory');
						counter++;
					}
				} //end of FOR	
			} //end of IF
		}, //end of DRAW()

		craft: function(){
			dialog.craft();
		} //end of CRAFT()

	},  // end of inventory

	scene: {
		room: null, //required to keep reference to current object, used in flip() 
		roomName: null, //required for quests and item interaction
		viewName: null, //a different camera position in a room - required for quests and item interaction
		currentIndex: null, //index of a view which has been drawn (currently on screen). This is needed to switch left/right between views of the room or to denote a starting point.

		update: function(room, viewIndex){ // Passed by eventhandlers which are linked to divs in the init pahse of the game. which room to draw and which view of that room to draw. Ecah room contains array with views.
			console.log('config.scene.update() launched');
			this.room = room;
			this.roomName = room.name;
			this.viewName = room.views[viewIndex].name;
			this.currentIndex = viewIndex;
			console.log('room: ' + this.roomName +'| view: ' +this.viewName+ ' | index of the view to draw/current index: ' +this.currentIndex);
			$('#scene').empty();

			var div = $("<div class='spinner' id="+this.room.views[this.currentIndex].domID+"></div>");
			div.css('background-image', 'url(img/spinner.gif)');
			div.appendTo('#scene');
			var background = new Image();
			background.src = room.views[this.currentIndex].background;
			
		
			$(background).on('load', function(){
				div.removeClass('spinner').addClass('view');
				div.css('background-image', 'url('+background.src+')');
			});

			this.room.views[this.currentIndex].draw(); //add interactive elements to background
		},


		flip: function(direction){ //switch between views in current room
			if (direction === 'right'){
				console.log('config.scene.flip(right) launched');
				this.currentIndex++;				
				if (typeof(this.room.views[this.currentIndex])=='undefined') {
					console.log('next item in array is undefined');
					this.update(this.room, 0);
				} else{
					console.log('next item in array is defined');
					this.update(this.room, this.currentIndex);
				}

			} else {
				console.log('config.scene.flip(left) launched');
				this.currentIndex--;				
				if (typeof(this.room.views[this.currentIndex])=='undefined') {
          			this.currentIndex = this.room.views.length - 1; 
					this.update(this.room, this.currentIndex);
				} else {
					this.update(this.room, this.currentIndex);
				}
			}
		},

		drawButtons: function(){ //manage flip view to right/left buttons (e.g. enable/disable buttons of there is only one view in a room)



		}

	}

};

var statsSelector = {

	showStats: function(){
		console.log('Strength: ' + config.game.player.strength);
		console.log('Charisma: ' + config.game.player.charisma);
	},

	draw: function(){
		$('.stats-container').empty();

		for(i=0; i < config.game.player.charisma; i++){
			var point = $('<div class="stats-cha-point">');
			point.appendTo('#stats-cha-container');

		}

		for(i=0; i < config.game.player.strength; i++){
			var point = $('<div class="stats-str-point">');
			point.appendTo('#stats-str-container');

		}

		this.showStats();

	},

	addCharisma: function(){
		console.log('addCharisma() launched');
		if(config.game.player.charisma===config.game.player.pointsLimit){
			console.log('max charisma reached ' + config.game.player.charisma);

		} else {
			config.game.player.charisma++;
			config.game.player.strength--;
			this.draw();
		}
	},

	addStrength: function(){
		console.log('addStrength() launched');
		if(config.game.player.strength===config.game.player.pointsLimit){
			console.log('max strength reached ' + config.game.player.strength);
		} else {
			config.game.player.strength++;
			config.game.player.charisma--;
			this.draw();
		}
	}
};

$(document).ready(function(){
	console.log('self invoke on document ready');
	statsSelector.draw();

	$(document).keydown(function(e) {
	  	if(e.keyCode == 37) { // left
	  		console.log('left key pressed');
			config.inventory.activeItemIndex--;
	  		config.inventory.draw();
		} else if(e.keyCode == 39) { // right
	  		console.log('right key pressed');
	  		config.inventory.activeItemIndex++;
	  		config.inventory.draw();
	  	}
	});	

	$(document).click(function() {
		if(config.game.started){
			config.game.player.clicksCounter++;
			//TO DO: send clicks to the server under current username.
			console.log(config.game.player.clicksCounter);			
		} else {
			console.log('Game not started');			
		}
	});

	$('#username').focusout(function(){
		var username = $('#username').val();
		if(username.length > 0){
		config.game.player.username = $('#username').val();
		console.log(config.game.player.username);
		} else {
		console.log('username is empty');
		console.log(config.game.player.username);
		}

	});

	$('.stats-button-str').click(function() {
		statsSelector.addStrength();
	});
	$('.stats-button-cha').click(function() {
		statsSelector.addCharisma();
	});	
	$('.start-game').click(function() {
		config.game.init();
	});	


 });


