// console.log("main.js is loaded");


//when document is ready, run this function

$(document).ready(function(){

	$("button").on("click", function(){
		$(".booboo").html(
			$("textarea").val()
		);

	});

	$("li").on("click", function(){
		//(this) finds what is clicked

			if ($(this).hasClass("done")){
				$(this).removeClass("done");
			}

			else {
				$(this).addClass("done");
			}
	});

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