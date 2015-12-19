
var quests = {
	
	quest1: {
		name: 'Quest 1',
		display: 1,
		solved: 1,
		clicked: function(){
			if (hand.equipped && this.solved === 0){
				console.log('Hand equipped! ' + this.name + ' is activated!');

			} else {
				console.log('Nothing happens');

			}
		}
	} //end of object

};