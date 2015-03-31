'use strict';

$( '.navbar' ).load( '/components/navbar.html' );

$( '.include' ).load( '/include.html' );

var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();

var output =
   month + ((''+month).length<2 ? '' : '') + '|'+ day + '|' + ((''+day).length<2 ? '0' : '') + d.getFullYear();
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var weekday = weekdays[d.getDay()];

function clock() {
  var now = new Date();
  var outStr = now.getHours()+':'+now.getMinutes()+':'+now.getSeconds();
  document.getElementById('clockDiv').innerHTML=outStr;
  setTimeout('clock()',1000);
}
clock();


$('.time').html(output);
$('.date').html(weekday);

$.backstretch([
  'images/keep-river-mangroves-full.jpg'
  , 'images/korea-aquaculture-full.jpg'
  , 'images/tomales-bay-full.jpg'
], {duration: 10000, fade: 1000});

function process_bookmark(bookmarks) {

  for (var i =0; i < bookmarks.length; i++) {
    var bookmark = bookmarks[i];
    if (bookmark.url) {
      console.log("bookmark: "+ bookmark.title + " ~  " + bookmark.url);
    }

    if (bookmark.children) {
      process_bookmark(bookmark.children);
    }
  }
}



