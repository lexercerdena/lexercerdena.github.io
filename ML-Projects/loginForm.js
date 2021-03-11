var body = document.getElementsByTagName('body')[0];
	var homePage = document.querySelector('#homepage');
		//console.log(homePage);

	var container = document.querySelector('.container-div');
	var forgotAcct = document.querySelector('#forgotAcct');
	var div = document.querySelector('div');
		//console.log(div);
		
	
	//Get login form Id's
	var userName = document.getElementById('userName');
	var password = document.getElementById('password');
		//console.log(userName, password);
	var loginButton = document.getElementById('loginButton');
		//console.log(loginButton);

	var credentials = {
		userName: 'Lexing',
		password: '123'
	}

	var userNameValue;
	var passwordValue;

	loginButton.onclick = function loginButton() {
		userNameValue = userName.value;
		passwordValue = password.value;

		if (userNameValue == '' || userNameValue == null || userNameValue == undefined) {
			alert('Please Login your Credentials');
		} else {
			checkLoginDetails();
		}
	}

	function checkLoginDetails() {
		if (userNameValue == credentials.userName) {
			if (passwordValue == '' || passwordValue == null || password == undefined) {
				alert('Please enter your password');
			} else {
				if (passwordValue == credentials.password) {
					alert('Successfully Login');	
					//var welcomeMessage = document.querySelector('.welcome');	
					//welcomeMessage.innerHTML = 'Welcome back ' + credentials.userName + '!';
					hideElement(container);
					window.location.href = "index.html";
					displayCharacters();
				} else {
					alert('Login incorrect, password invalid');
				}
			}
		} else { 
			alert('This username does not exist');
		}
	}
	
	function hideElement(elem) {
		elem.style.display = 'none';
	}

	function showElement(elem) {
		elem.style.display = 'block';
	}