
var red = {
	name: 'Red box',
	color: 'red',
	equipped: false,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	useOnElement: '#ID', //ID of an alavant (div) on which item can be used.

	clicked: function(){
		dialog.itemInfo(this);
	}
};

var green = {
	name: 'Green box',
	color: 'green',
	equipped: false,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	clicked: function(){
		dialog.itemInfo(this);
	}
};

var yellow = {
	name: 'Yellow box',
	color: 'yellow',
	equipped: false,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	clicked: function(){
		dialog.itemInfo(this);
	}	
};

var blue = {
	name: 'Blue box',
	color: 'blue',
	equipped: false,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	clicked: function(){
		dialog.itemInfo(this);
	}	
};

var brown = {
	name: 'Brown box',
	color: 'brown',
	equipped: false,
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
	clicked: function(){
		dialog.itemInfo(this);
	}
};