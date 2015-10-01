/*/ 
 *	This shows the correct part of a form 
 *  on the selection of a radio button
/*/

var radio = document.getElementsByName('submit-for');
var project = document.getElementById('project');
var stage = document.getElementById('stage');

function showForm() {
	if (this.value === 'project') {
		stage.style.display = 'none';
		project.style.display = 'block';
	} else if (this.value === 'stage') {
		project.style.display = 'none';
		stage.style.display = 'block';
	} else {
		console.log('You\'ve been messing with the code. Suit yourself. Donate to a charity of your choosing.');
	}
}

for (var i = 0; i < radio.length; i++) {
	radio[i].addEventListener('click', showForm, false);
}