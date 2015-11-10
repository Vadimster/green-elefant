
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
		box: [red, yellow, green, yellow],
		activeItemIndex: 2, //array index of currently active item. Zero at game start

		draw: function(){
			console.log('config.inventory.draw() launched');
			$('#inventory').empty();
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
						var item = $('<div class="item-inv-empty"></div>');
						item.css('background-color', this.box[precedingIndex].color);
						item.appendTo('#inventory');
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
						var item = $('<div class="item-inv-empty"></div>');
						item.css('background-color', this.box[followingIndex].color);
						item.appendTo('#inventory');						
						counter++;
					}
				} //end of FOR
			
			} else { //active item exists in array
				console.log('Item with current activeItemIndex of ' +this.activeItemIndex+ ' exists in array');
				
				var counter = 2; //TO DO  -  DEACTIVATE ALL THESE 2 ITEMS!
				for (i=0; i<2; i++){
					var precedingIndex = this.activeItemIndex-counter;
					if (precedingIndex < 0){ //
						console.log('preceding item with index ' +precedingIndex+ ' is undefined');
						var item = $('<div class="item-inv-empty"></div>');
						item.appendTo('#inventory');
						counter--;
					} else {
						console.log('preceding item with index ' +precedingIndex+ ' exists.');
						var item = $('<div class="item-inv-empty"></div>');
						item.css('background-color', this.box[precedingIndex].color);
						item.appendTo('#inventory');
						counter--;
					}						
				}

				var activeItem = $('<div class="item-inv-active"></div>'); //active item box is empty 
				activeItem.css('background-color', this.box[this.activeItemIndex].color);
				activeItem.appendTo('#inventory');
				this.box[this.activeItemIndex].active = true;
				console.log(this.box[this.activeItemIndex].name + ' is now active');

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
						var item = $('<div class="item-inv-empty"></div>');
						item.css('background-color', this.box[followingIndex].color);
						item.appendTo('#inventory');
						counter++;
					}
				} //end of FOR
			} //end of IF
		} //end of DRAW()
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
 });