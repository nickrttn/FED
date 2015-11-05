// JS wrapped in IIFE's (Immediately-invoked function expression) to protect scope

(function foo(){

	(function(){
		//  Responsive disclosure helper function, aka BIG MESSY IF/ELSE statement. 
		//  I'm sure this can be a lot more concise.

		function showForm() {

			if (this.value === 'project') {

				if (stage.classList.contains('visible')) {
					stage.classList.remove('visible');
				}

				project.classList.add('visible');

			} else if (this.value === 'stage') {
				
				if (project.classList.contains('visible')) {
					project.classList.remove('visible');
				}
				
				stage.classList.add('visible');
			}
		}

		/*/ 
		 *	This shows the correct part of a form 
		 *  on the selection of a radio button
		/*/
		if(document.querySelector('form')) {
			var radioButtons = document.getElementsByName('submit-for');
			var project = document.getElementById('project');
			var stage = document.getElementById('stage');

			for (var i = 0; i < radioButtons.length; i++) {
				radioButtons[i].addEventListener('click', showForm, false);
			}
		}
	})();

	(function(){
		// Responsive navigation
		// Tried my hand at a little functional programming

		var menu = document.querySelector('nav ul');
		var menuButton = document.createElement('span'); // button
		var listItems = document.querySelectorAll('nav ul li');

		function sizeDetection() {
			return window.innerWidth < 500;
		}

		function featureDetection() {
			return "ontouchstart" in window;
		}

		function createButton() {
			menuButton.textContent = 'Menu';
			menu.insertBefore(menuButton, menu.firstChild);
		}

		function removeButton() {
			var menuButton = document.querySelector('nav ul span');
			if (menuButton) {
				menu.removeChild(menuButton);
			}
		}

		function hasListItems() {
			return listItems[0].classList.contains('hide');
		}

		function hideListItems() {
			for (var i = 0; i < listItems.length; i++) {
				listItems[i].classList.add('hide');
			}
		}

		function showListItems() {
			for (var i = 0; i < listItems.length; i++) {
				listItems[i].classList.remove('hide');
			}
		}

		function resizeOnMobile() {
			if(sizeDetection() || featureDetection()) {
				createButton();
				hideListItems();
			}
		}

		menuButton.addEventListener('click', function() {
			return hasListItems() ? showListItems() : hideListItems();
		});

		window.addEventListener('resize', function() {
			if (sizeDetection() || featureDetection()) {
				resizeOnMobile();
			} else  {
				showListItems();
				removeButton();
			}
		});

		document.addEventListener('DOMContentLoaded', resizeOnMobile);
	})();

	/*/
	 *  The below code finds links to downloadable files in the Downloads section of 
	 *  related articles on the form page and adds a data-type to them, so we can target them with CSS ::before.
	 *  It's become useless because I use CSS href extension selectors now. 
	 *  It's still here because it's pretty and I couldn't get rid of it.
	/*/

	// var links = document.querySelectorAll('.related article section:last-of-type ul li a');

	// (function(){
	// 	for (var i = 0; i < links.length; i++) {
	// 		var ext = links[i].href.split('.').pop();
			
	// 		if(ext === 'jpeg') {
	// 			ext = 'jpg';
	// 		}

	// 		links[i].setAttribute('data-type', ext);
	// 	}
	// })();

	(function() {
		var mededelingenArticles = document.querySelectorAll('aside section:first-of-type article');
		var mededelingenHeading = document.querySelector('aside section:first-of-type h2 a');
		
		for (var i = 0; i < mededelingenArticles.length; i++) {
			mededelingenArticles[i].classList.add('hide');
		}

		mededelingenHeading.addEventListener('click', function(e){
			e.preventDefault();

			for (var i = 0; i < mededelingenArticles.length; i++) {
				if (mededelingenArticles[i].classList.contains('hide')) {
					mededelingenArticles[i].classList.remove('hide');
				} else {
					mededelingenArticles[i].classList.add('hide');
				}
			}
		});

	})();

})();

