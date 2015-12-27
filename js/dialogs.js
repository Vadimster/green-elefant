

var dialog  = {
	itemInfo: function(item){ //provides information about a clicked item in the inventory roll
		console.log('dialog.itemInfo() launched. Item name is ' + item.name);
	
		$('.dialog-picture').empty();
		$('.dialog-title').empty();
		$('.dialog-text').empty();

		$('.dialog-picture').css('background-image', 'url('+item.img+')');
		$('.dialog-title').html(item.name);
		$('.dialog-text').html(item.description);
		$('#item-info-dialog')
			.dialog(
				{ 
				draggable: false,
				resizable: false,
				modal: true,
				width: 610,
				height: 550,
				closeOnEscape: true,
				dialogClass: "no-close",
				position: { my: "center center", at: "center", of: "#scene", within: "#scene"} //
				}
			); //creates the dialog
		//$('.ui-dialog-titlebar-close').blur();

		}, //method ends

	save: function(){
		console.log('dialog.save() launched.');

		$('.dialog-picture').empty();
		$('.dialog-title').empty();
		$('.dialog-text').empty();
		$('.dialog-picture').css('background-image', '');
		$('.dialog-title').html('Сохранение игры');
		$('.dialog-text').html('Сохраниться пока нельзя -- функционал в разработке. Ну, хочешь, докури?');
		$('#item-info-dialog')
			.dialog(
					{buttons: 
		 				{
		 			 	'закрыть':function(){
		    			$(this).dialog('close');
		       			},
					},
				draggable: false,
				resizable: false,
				modal: true,
				width: 610,
				height: 550,
				closeOnEscape: true,
				dialogClass: "no-close",
				position: { my: "center center", at: "center", of: "#scene" }
				}
			); //creates the dialog

	}, //method ends

	craft: function(){
		console.log('dialog.craft() launched.');

		$('.dialog-picture').empty();
		$('.dialog-title').empty();
		$('.dialog-text').empty();
		$('.dialog-picture').css('background-image', '');
		$('.dialog-title').html('Запилить че-нить');
		$('.dialog-text').html('Ну что ты такой сердитый человек? Крафтинг в разработке.');
		$('#item-info-dialog')
			.dialog(
					{buttons: 
		 				{
		 			 	'закрыть':function(){
		    			$(this).dialog('close');
		       			},
					},
				draggable: false,
				resizable: false,
				modal: true,
				width: 610,
				height: 550,
				closeOnEscape: true,
				dialogClass: "no-close",
				position: { my: "center center", at: "center", of: "#scene" }
				}
			); //creates the dialog
	} //method ends
};



