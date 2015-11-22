

var dialog  = {
	itemInfo: function(item){
		console.log('dialog.itemInfo() launched. Item name is ' + item.name);
	
		$('#item-info-dialog-picture').css('background-image', 'url('+item.img+')');
		$('#item-info-dialog-title').html(item.name);
		$('#item-info-dialog-text').html(item.description);





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



		}
};



