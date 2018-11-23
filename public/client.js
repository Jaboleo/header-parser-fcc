// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  	$.getJSON('https://ipinfo.io', function(data){
     var webInfo = data.ip;
var sysInfo = navigator.userAgent;
var winVersion = sysInfo.slice(13,39);
var language = navigator.language;		
var responseObject = {
	ipadress:webInfo,
	language:language,
	software:winVersion
}; 
      
     $.post('/who?' + $.param({dream: responseObject }));     
    });

  






});
