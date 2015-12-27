
var quests = {
	
	quest1: {
		name: 'Quest 1',
		display: 1,
		solved: 0,
		clicked: function(){
			if (hand.equipped && this.solved === 0){
				alert("Ура, пахом получил в морду!");
				this.solved = 1;

			} else if (hand.equipped && this.solved === 1){
				alert("Пахому можно дать в морду только один раз.");

			} else {
				alert('Выберите в инвентаре "руку" и ткните Пахому в морду. ');

			}
		}
	} //end of object

};