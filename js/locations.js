
//scene  =  div on main page which displays graphics within it
//room = a room the player is currently in
//view = part of the room the player currently views



var view1a = { //start view on gaupvahta
	name: 'Startovij view',
	domID: '#view-1-a',
	background: 'yellow' //background URL image to be loaded into the scene
};



var view1b = {
	name: 'gaupvahta door',
	domID: '#view-1-b',
	background: 'orange'
};


var room1 = { 
	name: 'gauptvahta',

	views: [view1a, view1b], //each room consists of a number of views. Player can switch between these views.
};