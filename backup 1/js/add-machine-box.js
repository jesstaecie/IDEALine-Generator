// JavaScript Document

$(function() {
		   var maxAppend = 0;
		   
		   $("#addMoreButton").click(function () {
				if (maxAppend >= 7) return;
				
				var addThumbnail = $('<div id="thumbnail"><div class="machineBox"><div id="machineEmpty"><img src="images/add-machine-01.png" width="150" height="150"></div><div id="machineFilled"></div></div><div class="dropdown"><select id="first-choice"><option value="base" selected>Type</option><option value="ibe">IBE</option><option value="wire-bonder">Wire Bond</option></select><br><select id="second-choice"><option>Machine</option></select></div></div>');
				
				maxAppend++;
				
				$("#thumbnailContainer").append(addThumbnail);
				
				if (maxAppend >= 7){
					$(".addMore").hide();
				}
				function selectMachine() {
				$("#first-choice").change(function() {
					$("#second-choice").load("textdata/" + $(this).val() + ".txt");
				});
			}
			});
		   	
			
			function selectMachine() {
				$("#first-choice").change(function() {
					$("#second-choice").load("textdata/" + $(this).val() + ".txt");
				});
			}
});			   