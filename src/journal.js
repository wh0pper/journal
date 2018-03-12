export function Entry(date, content, subject) {
  this.date = date;
  this.content = content;
  this.subject = subject;

}

Entry.prototype.wordCount = function () {
  console.log(this.content);
  return this.content.split(' ').length;
};
