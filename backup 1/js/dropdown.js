// JavaScript Document

$(function() {

$(function selectMachine() {
	$("#first-choice").change(function() {
		$("#second-choice").load("textdata/" + $(this).val() + ".txt");
		
	});

$("#cross-icon").click(function(){
	$(".trytoclose").hide();
});


});	





// function setImg(){
// 	var img= document.getElementById("image");
// 	img.src = this.value;
// 	return false;
// }


// document.getElementById("first-choice").onchange = setImg;


});