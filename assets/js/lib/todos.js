// check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// click on X to delete TODO

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13) {
		//pobranie tekstu z inputa
		var todoText = $(this).val();
		$(this).val("");
		//stworeznie nowego li do dodania w ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText +"</li>");

	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});