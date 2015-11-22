
var fork = {
	name: 'вилка',
	icon: 'img/inventory/icons/fork.png', //image to be used in inventory scroller
	img: 'img/inventory/icons/fork.png', //image to be used within a description dialog
	equipped: false,
	description: 'Обыкновенная столовая вилка. Возможно, ты найдешь ей какое-то особенное применение?',
	useOnElement: '#ID', //ID of an alavant (div) on which item can be used.

	clicked: function(){
		dialog.itemInfo(this);
	}
};

var hand = {
	name: 'рука',
	icon: 'img/inventory/icons/hand.png', //image to be used in inventory scroller
	img: 'img/inventory/icons/hand.png', //image to be used within a description dialog
	equipped: false,
	description: 'В некоторых случаях рука может пригодиться. Только стены не малафить!',
	clicked: function(){
		dialog.itemInfo(this);
	}
};