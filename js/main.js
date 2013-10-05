// console.log("main.js is loaded");


//when document is ready, run this function

$(document).ready(function(){

	$("img").on("dblclick", function(){
		$("img").width(200);

		$("h1").fadeOut();

		$(".booboo").slideUp();

		$("#rahul").hide();

	});

	//$("img").click(function(){
		//$("img").width(200);
	//});
});