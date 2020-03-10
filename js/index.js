var checkbox_state = document.getElementById('cb_smile');
var label = document.getElementById('label');
var mouth = document.getElementById('mouth');

var SAD_MOUTH_PROP = "M 150 250 Q 225 150 300 250";
var HAPPY_MOUTH_PROP = "M 150 200 Q 225 300 300 200";
var LABEL_CHECKED = "Happy"
var LABEL_UNCHECKED = "Sad"

checkbox_state.checked = true;


function toggle_smile(){
	if (checkbox_state.checked === true) {
		label.innerHTML = LABEL_CHECKED
		mouth.setAttribute('d', HAPPY_MOUTH_PROP);
	}
	else {
		label.innerHTML = LABEL_UNCHECKED
		mouth.setAttribute('d', SAD_MOUTH_PROP);
	}
};