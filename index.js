var through = require('through');
var domly = require("domly");

module.exports = function (file, options) {

  var opts = options || {};
  var extension = opts.extension || 'html';
  var buffer = '';

  return !file.match('\.' + extension + '$') ? through() : through(
    function (chunk) { // write
      buffer += chunk.toString();
    },
    function () { // end
      try {
        this.queue('module.exports = ' + domly.precompile(buffer, opts));
        this.emit('end');
      } catch (e) {
        this.emit('error', e);
      }
    }
  );
};