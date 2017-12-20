
var myApp = {
	mainMessage : "Welcome to the app",

	mainGreeting() {
		console.log('hey, welcome to this app');
	}
};

myApp.module1 = {
	saySomething(message) {
		console.log(myApp.mainMessage, message, 'I am a module');
	},

	doSomething() {
		console.log('Called from the module');
	}
};
myApp.module2 = {
	doSomethingElse() {
		console.log('Called from dorSomethingElse module');
	}
};
// JavaScript Document

(() => {
	myApp.mainGreeting();

	myApp.module1.saySomething('hello');

	function myFunction() {
		var theHeading = document.querySelector('h1').textContent = myApp.mainMessage;
	}

	myFunc();
	
})();