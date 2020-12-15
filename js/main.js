		//get navBar
		var navBar = document.getElementById('navBar');
		console.log(navBar);
		//add event
		background: 'red';

		var pink = 'pink';
		var blue = 'blue';
		
		var loginUser;
		var colorHover;

		var viewportWidth = window.innerWidth;
		console.log(viewportWidth);
		
		if(viewportWidth < 780) {
			loginUser = 'male';
		}else {
			loginUser = 'female';
		}

		function onNavClick() {
		
		}

		navBar.onclick = function() {
			console.log('clicked me');
		}
		
		navBar.onmouseover = function() {
			console.log('hover me');

			if(loginUser == 'male') {
				colorHover = blue;
			}else {
				colorHover = pink;
			}

			/*switch(loginUser) {
				case "male":
					colorHover = blue;
				break;

				case "female":
					colorHover = pink;
				break;
			}*/

			this.style.background = colorHover;
			
		}
		
		navBar.onmouseout = function() {
			console.log('hover out');
			this.style.background = 'none';
		}

		navBar.oncontextmenu = function() {
			console.log('right click');
		}