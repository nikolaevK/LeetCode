var MyQueue = function () {
  this.firstStack = [];
  this.secondStack = [];
};

MyQueue.prototype.push = function (x) {
  this.firstStack.push(x);
};

MyQueue.prototype.pop = function () {
  this._prepare();
  return this.secondStack.pop();
};

MyQueue.prototype.peek = function () {
  this._prepare();
  return this.secondStack[this.secondStack.length - 1];
};

MyQueue.prototype.empty = function () {
  return this.firstStack.length === 0 && this.secondStack.length === 0;
};

MyQueue.prototype._prepare = function () {
  if (this.secondStack.length === 0)
    while (this.firstStack.length > 0)
      this.secondStack.push(this.firstStack.pop());
};

// my solution
var Node = function (value) {
  this.value = value;
  this.next = null;
};

var MyQueue = function () {
  this.first = null;
  this.last = null;
  this.size = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  let newNode = new Node(x);
  if (!this.first) {
    this.first = newNode;
    this.last = newNode;
  } else {
    this.last.next = newNode;
    this.last = newNode;
  }
  this.size += 1;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let poppedEl = this.first;
  if (this.size === 1) {
    this.first = null;
    this.last = null;
  } else {
    this.first = poppedEl.next;
    poppedEl.next = null;
  }
  this.size -= 1;
  return poppedEl.value;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.first.value;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.size < 1;
};
