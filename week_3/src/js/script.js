/*/ 
 *	This shows the correct part of a form 
 *  on the selection of a radio button
/*/

var radio = document.getElementsByName('submit-for');
var project = document.getElementById('project');
var stage = document.getElementById('stage');

function showForm() {
	if (this.value === 'project') {
		stage.classList.remove = 'visible';
		project.classList.add = 'visible';
	} else if (this.value === 'stage') {
		project.style.display = 'none';
		stage.style.display = 'block';
	} else {
		console.log('You\'ve been messing with the code. Continue to jail, do not go past Start.');
	}
}

for (var i = 0; i < radio.length; i++) {
	radio[i].addEventListener('click', showForm, false);
}