/* auth commander component
 * To use add require('../cmds/auth.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('auth')
		.version('0.0.0')
		.description('Authenticate the app')
		.action(function (/* Args here */) {
			// Your code goes here
		});

};
