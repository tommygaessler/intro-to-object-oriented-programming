function Whiteboard(content) {
  this.content = '';
  this.lastInput = '';
}

Whiteboard.prototype.view = function () {
  return this.content;
}

Whiteboard.prototype.write = function (input) {
  this.lastInput = this.content;
  return this.content + '' + input;
}

Whiteboard.prototype.erase = function () {
  return this.content = '';
}

Whiteboard.prototype.eraseLast = function () {
  this.content = this.lastInput;
}

var tools = new Whiteboard;

console.log(tools.write('Hello'));

tools.write(' World!');

// tools.eraseLast()
// tools.view() >> 'Hello'

console.log(tools.view());

console.log(tools.erase());

console.log(tools.write('Back'));
