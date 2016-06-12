// JavaScript Document
// JavaScript Document
$(function() {

	$("#thumbnail3").hide();
	$("#thumbnail4").hide();
	$("#thumbnail5").hide();
	$("#thumbnail6").hide();
	$("#thumbnail7").hide();

	$(function selectMachine0() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice0").on('change',  function() {	
			 var getFirstChoice0ID = ($(this).find('option:selected').attr('data-firstchoice-id')); //retrieve the id set to firstchoice "IBE"	
			 console.log(getFirstChoice0ID);
				$(".second-choice0").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine1() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice1").on('change',  function() {									 
				$(".second-choice1").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine2() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice2").on('change',  function() {									 
				$(".second-choice2").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine3() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice3").on('change',  function() {									 
				$(".second-choice3").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine4() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice4").on('change',  function() {									 
				$(".second-choice4").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine5() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice5").on('change',  function() {									 
				$(".second-choice5").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine6() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice6").on('change',  function() {									 
				$(".second-choice6").load("textdata/" + $(this).val() + ".txt");
			});
	});	

	$(function selectMachine7() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice7").on('change',  function() {									 
				$(".second-choice7").load("textdata/" + $(this).val() + ".txt");
			});
	});	


	$("#crossIcon0").click(function(){
		$("#thumbnail0").hide();
	});

	$("#crossIcon1").click(function(){
		$("#thumbnail1").hide();
	});

	$("#crossIcon2").click(function(){
		$("#thumbnail2").hide();
	});

	$("#crossIcon3").click(function(){
		$("#thumbnail3").hide();
	});

	$("#crossIcon4").click(function(){
		$("#thumbnail4").hide();
	});

	$("#crossIcon5").click(function(){
		$("#thumbnail5").hide();
	});

	$("#crossIcon6").click(function(){
		$("#thumbnail6").hide();
	});

	$("#crossIcon7").click(function(){
		$("#thumbnail7").hide();
	});

		
	var maxRepeat = 2;
	
	$("#addMoreButton").click(function (){
		if (maxRepeat >= 7) return;
		maxRepeat++;
		$('#thumbnail' + maxRepeat).show();
		
		if (maxRepeat >= 7){
			$(".addMore").hide();
		}
	});		


	$.get("dropdownlist.txt", function(csvString){
		var csvObject = Papa.parse(csvString);
		console.log(csvObject)
		var title = csvObject.data[0];
		console.log(title);
		 

		for (var i=0; i <1; i++){
			$('.thumbnail').append(dropdownBox(csvObject.data[i+1][1], csvObject.data[i+1][0],csvObject.data[i+1][2]));
		}

		$(function selectMachine0() {
		/*$(".first-choice").change(function() {*/
			$(".first-choice0").on('change',  function() {	
			 var getFirstChoice0ID = ($(this).find('option:selected').attr('data-firstchoice-id')); //retrieve the id set to firstchoice "IBE"	
			 console.log(getFirstChoice0ID);
				$(".second-choice0").load("textdata/" + $(this).val() + ".txt");
			});
	});	


	});
	
	
});

function dropdownBox(optionName, optionID, machineImageName) {
	return (
		'<div class = "dropdown" id ="dropdown0">'
		+ '<select class = "first-choice0">'
		+'<option value = "base" selected> Type </option>'
		+'<option value = "'+ optionName + '"data-firstchoice-id="' + optionID +'"> IBE</option>'
		+'<option value = "'+ optionName + '"data-firstchoice-id="' + optionID +'"> Wire Bond</option>'
		+'</select>'
		+'<br>'
		+'<select class="second-choice0">'
		+'<option>Machine</option>'
		+' </select>'
		+'</div>'
		
		);
}