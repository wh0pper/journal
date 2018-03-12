export function Entry(date, content, subject) {
  this.date = date;
  this.content = content;
  this.subject = subject;
  this.words = this.wordCount();
  this.vowels = this.vowelCount();
  this.consonants = this.consonantCount();
}

Entry.prototype.wordCount = function () {
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

Entry.prototype.getTeaser = function () {
  return this.content.split('.')[0].split(' ').slice(0, 8).join(' ');
};
