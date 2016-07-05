/* list commander component
 * To use add require('../cmds/list.js')(program) to your commander.js based node executable before program.parse
 */
'use strict';

module.exports = function(program) {

	program
		.command('list')
		.version('0.0.0')
		.description('List your dropbox files')
		.action(function (/* Args here */) {
			// Your code goes here
		});

};
