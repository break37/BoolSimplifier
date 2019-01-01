$(document).ready(function(){
	$("tr").click(function(el){
		if ($(this).index() != 0)
			$(this).toggleClass("faded");
	});
	
	$("td").click(function(){
		if ($(this).parent().index() == 0){
			var index = $(this).index()
			
			$("tr").each(function(e){
				$("#test").html($(this).index());
				$(this).children("td:nth-child("+(index+1)+")").toggleClass("done");
				//$(this).(index).addClass("faded");
			});
		}
	});	
});