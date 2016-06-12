// JavaScript Document
	
$(function() {
		   
		   var maxAppend = 0;
		   var thumbnailID = 0;
		   //var firstChoiceID = 0;
		   //var secondChoiceID = 0;
		   var currentAttrValue = $(".first-choice").attr('id');
		   $('.accordion ' + currentAttrValue).attr('id', thumbnailID); 
		   
		   $(".thumbnail").attr('id', thumbnailID); //set .thumbnail's id (for 1st thumbnail) to 0
		   $(".first-choice").attr('id', thumbnailID);
		   $(".second-choice").attr('id', thumbnailID);
		   
		   console.log(thumbnailID);
		   
		   for(i = 0; i < 2; i++){ //set no. of default thumbnails displayed
			   
			   var addThumbnail = $('<div class="thumbnail"><div class="machineBox"><div id="machineEmpty"><img src="images/add-machine-01.png" width="150" height="150"></div></div><div class="dropdown"><select class="first-choice"><option value="base" selected>Type</option><option value="ibe">IBE</option><option value="wire-bonder">Wire Bond</option></select><br><select class="second-choice"><option>Machine</option></select></div></div>'); //define what to append
			   $("#thumbnailContainer").append(addThumbnail);
			   thumbnailID++; // increment thumbnailID by 1
			   $(".thumbnail").attr('id', thumbnailID); // set .thumbnail id value
			   //firstChoiceID++;
			   $(".first-choice").attr('id', thumbnailID); // set .first-choice's id same as .thumbnail's id
			   //secondChoiceID++;
			   $(".second-choice").attr('id', thumbnailID);
			   console.log(thumbnailID);
		   }
		   
		   $("#addMoreButton").click(function () {
				
				if (maxAppend >= 5) return; // stop adding if max no. of thumbnails is reached
				
				maxAppend++; // increment maxAppend by 1
				
				var addThumbnail = $('<div class="thumbnail"><div class="machineBox"><div id="machineEmpty"><img src="images/add-machine-01.png" width="150" height="150"></div></div><div class="dropdown"><select class="first-choice"><option value="base" selected>Type</option><option value="ibe">IBE</option><option value="wire-bonder">Wire Bond</option></select><br><select class="second-choice"><option>Machine</option></select></div></div>'); //define what to append
				
				$("#thumbnailContainer").append(addThumbnail); // add more machine thumbnails
				thumbnailID++; 
				$(".thumbnail").attr('id', thumbnailID); 
				//firstChoiceID++;
				$(".first-choice").attr('id', thumbnailID); // set .first-choice's id same as .thumbnail's id
				//secondChoiceID++;
				$(".second-choice").attr('id', thumbnailID);
			    console.log(thumbnailID);
								
				/*$(document).on('click', '.thumbnail', function(){
					$(".first-choice").change(function() {
					$(".second-choice").load("textdata/" + $(this).val() + ".txt");
				});
		});*/
				
				if (maxAppend >= 5){
					$(".addMore").hide(); //hide addMore section & button when max no. of thumbnails is reached
				}
				//document.getElementsByClassName("first-choice").setAttribute("id", maxAppend);
				
			});
		   
		   	
			 /*
			 $("#thumbnailContainer").on("click", addThumbnail, function(){
				  $("#first-choice").change(function() {
						  $("#second-choice").load("textdata/" + $(this).val() + ".txt");
						  });
			  });
			  */															
		   	
});			   