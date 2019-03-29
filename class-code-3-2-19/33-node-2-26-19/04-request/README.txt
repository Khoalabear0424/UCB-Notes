if I wanted to do this from scratch

	1. creates a package.json file

		$ 	 npm init -y

			the -y skips all the questions that comes up

	2. downloads the code for the request package from npmjs.org and puts it into the current folder AND adds the package and version number into package.json

		$ npm install request

	3. run the file

		$ node 04-tryrequest.js

If I already have a package.json file

	1. install all the packages that are listed in the package.json file at the version numbers in the file

		$ npm install

	2. run the file

		node 04-tryrequest.js











