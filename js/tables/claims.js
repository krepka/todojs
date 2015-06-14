(function($){

	$.getJSON(
		"http://cdn.rawgit.com/selvestro/Website/master/assets/claimsss.json",

			function( data ) {

		$(document).ready(function() {

    		$('#claims').dataTable( {
        		// "ajax": data
        		"data": data,
        		// "table": "#policies",
				"fields": [
					{
						"label": "Убыток",
						"name": "claim"
					},
					{
						"label": "Дата заявления",
						"name": "dateClaimed"
					},
					{
						"label": "Сумма заявленная",
						"name": "amountClaimed"
					},
					{
						"label": "Дата выплаты",
						"name": "datePaid"
					},
					{
						"label": "Сумма выплаченная",
						"name": "amountPaid"
					},
					{
						"label": "Страховой полис",
						"name": "policy"
					}
				],
		    	"columns": [
					{
						"data": "claim",
						"sClass": "alignCenter"
					},
					{
						"data": "dateClaimed",
						"sClass": "alignCenter"
					},
					{
						"data": "amountClaimed",
						"render": $.fn.dataTable.render.number( ' ', ',', 2, '' ),
						"sClass": "alignCenter"
					},
					{
						"data": "datePaid",
						"sClass": "alignCenter"
					},
					{
						"data": "amountPaid",
						"render": $.fn.dataTable.render.number( ' ', ',', 2, '' ),
						"sClass": "alignCenter"
					},
					{
						"data": "policy",
						"sClass": "alignCenter"
					}
				],
				"language": {
            		"url": "http://cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Russian.json"
        		},
        		"paging":   false,
        		"ordering": false,
        		"info":     false,
        		"sDom": '<"top"i>rt<"bottom"flp><"clear">'
    		} );
		} );
	} );

}(jQuery));