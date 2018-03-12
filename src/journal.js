export function Entry(date, content, subject) {
  this.date = date;
  this.content = content;
  this.subject = subject;

}

Entry.prototype.wordCount = function () {
  return this.content.split(' ').length;
};
