import $ from 'jquery';
import { Entry } from './journal';
import './styles.css';

var entries = [];

$(document).ready(function() {
  $('#journal-form').submit(function(event) {
    event.preventDefault();
    var date = $('input#date').val();
    var subject = $('input#subject').val();
    var content = $('textarea#content').val();
    var entry = new Entry(date, content, subject);
    entries.push(entry);

      $('#entryList').append("<li><span class='entry'>" + entry.getTeaser() + "..." + "</span></li>");


    $(".entry").last().click(function() {
      $(".show-entry").show();
      $(".show-entry h3").text(entry.date);
      $(".subject").text(entry.subject);
      $(".content").text(entry.content);
      $(".words").text(entry.words);
      $(".vowels").text(entry.vowels);
      $(".consonants").text(entry.consonants);
    });

  });

});
