export function Entry(date, content, subject) {
  this.date = date;
  this.content = content;
  this.subject = subject;

}

Entry.prototype.wordCount = function () {
  console.log(this.content);
  return this.content.split(' ').length;
};

Entry.prototype.vowelCount = function () {
  var regexp = /[aeiou]/gi;
  return this.content.match(regexp).length;
};

Entry.prototype.consonantCount = function () {
  var regexp = /[^aeiou]/gi;
  return this.content.match(regexp).length;
};
