/*Basic Req's:
Create two keyboards (include space bar): 
* First keyboard, lowercase keys, numbers and special characters acessed without shift.
* Second, keys accessed while holding down the shift key 
* Exclude keys like tab, delete, shift, command, ctl, caps, option/alt & enter
The first keyboard should be the only one displayed when the page loads.
The second keyboard should toggle when the shift key is held down.
When keys are pressed, they should be highlighted in the browser. 
*Hint: the letters should be matched with the corresponding ascii code.
The provided array sentences should be displayed at the top of the page one sentence at a time. 
Once the sentence has been completed, the next in line should appear.
Letters should be highlighted with animation as the correct keys are pressed: 
If the correct letter is pressed, indicate below with a green check. 
If not correct key pressed, indicate below with red X
In the center, display the current letter to be typed.
The users words per minute should be calculated and displayed on the screen when
 there are no more sentences left in the array. 
 *Can be calculate by number of words typed divided by minutes minus 2 for every mistake.
There should be a delay so the user can see the score, asked if they would like to play again. 
If confirmed yes, resload the page. If no, leave as is.*/




var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
'Too ato too nOt enot one totA not anot tOO aNot', 
'oat itain oat tain nate eate tea anne inant nean', 
'itant eate anot eat nato inate eat anot tain eat', 
'nee ene ate ite tent tiet ent ine ene ete ene ate'];

var lines = [];
var lineCount = 0;
$(sentences).each(function(){
   var letters = this.split('');
   console.log(letters);
   var line = $('<div class="letters"></div>');
   $(letters).each(function() {
       var letter = this;
       if(letter == ' ') {
           letter = '&nbsp;';
       }
       line.append($('<div class="letter"></div>').html(letter));
   });
   lines.push(line);
});

$('#words').append(lines[lineCount]);
//provide sentences-- trying to show them all just to start.
//$(sentences).show();

//highlight letters same as selecting boxes in Lab 3?
//seems like you could reuse code from lab 3

$(document).ready(function() {
	$("#keyboard-upper-container").hide();
	
	$(document).keydown(function(event) {
		if (event.which === 16){
			$("#keyboard-upper-container").show();
			$("#keyboard-lower-container").hide();
		}
	});
	
	$(document).keyup(function(event) {
		if (event.which === 16){
			$("#keyboard-lower-container").show();
			$("#keyboard-upper-container").hide();
		}else{		

			$('.key').css({'background-color':'rgb(245,245,245)'});
	}
	});


	$(document).keypress(function(event) {
		var keyCharCode = event.charCode;
		var charID = String.fromCharCode (keyCharCode);
			$('#'+keyCharCode).css({'background-color':'rgb(255,255,0)'});
			$('#'+charID).css({'background-color':'rgb(255,255,0)'});
	})
});

//set up a clock of some sort to test wpm.

//delay so can see score. 3000?
//prompt to play again. if yes, reload page.
