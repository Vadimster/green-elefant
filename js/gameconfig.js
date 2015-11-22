
var config = {

	game: {
		save: function(){
			console.log('config.game.save() launched');
		},

		load: function(){
			console.log('config.game.load() launched');
		}

	},

	inventory: {
		box: [hand, fork],
		activeItemIndex: 2, //array index of currently active item. Zero at game start

		draw: function(){
			console.log('config.inventory.draw() launched');
			$('#inventory').empty();
			$('#item-name').empty();
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
				$('#item-name').html(this.box[this.activeItemIndex].name);

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
		} //end of DRAW()
	},  // end of inventory

	scene: {
		room: null, //requird to keep reference to current object, used in flip() 
		roomName: null, //required for quests and item interaction
		viewName: null, //required for quests and item interaction
		currentIndex: null, //index of a view which has been drawn (currently on screen). This is needed to switch left/right between views of the room to denote a starting point

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

	/*
			$(background).load(function(){
				div.removeClass('spinner').addClass('view');
				div.css('background-image', 'url('+background.src+')');
			});
*/

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

		drawButtons: function(){



		}

	}

};


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


$(document).ready(function(){
	console.log('self invoke');
	config.inventory.draw();
	config.scene.update(room1, 0);
 });


