# FormIsValid

It is a simple form validator for small applications and projects,
it checks for the field lengths and email type.

It returns an array of form valid being true or false and an object of
errors being detected.

# Getting Started

It's very simple.

	> npm install formisvalid

After **npm install** go to the file where this package is required, and
simply do

	> const formIsValid = require('formisvalid');

After that you can pass the arguements to ***formisvalid*** for validation.

# Quick Start

	> const formIsValid = require('formisvalid');
	> const formValidated = formIsValid(firstName, lastName, email);

	> console.log(formValidated);

If form is valid it will return

	> [ true, { fieldError: '', emailError: '' } ]

If form is not valid it will return

	> [ false, { fieldError: 'Fields can't be empty', emailError: '' } ]

OR

	> [ false, { fieldError: '', emailError: 'Email must be in proper format' }]

OR

	> [ false, { fieldError: 'Fields can't be empty', emailError: 'Email must be in proper format'} ]

# Author

Written by @codetoomuch, you can find me on github/twitter, if you find
any bug or any problem with implementation feel free to contact me, happy to help you.
