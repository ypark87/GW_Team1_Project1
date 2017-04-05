var queryURL = "http://quotesondesign.com//wp-json/posts?rand&filter[posts_per_page]=20";

$( document ).ready(function() {
$('#get-another-quote-button').on('click', function(e) {
    e.preventDefault();
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
        console.log(response);
        var rand=Math.floor((Math.random() * (20)) + 0);
        console.log(rand);
        var quote1=response[rand].content;
        var author=response[rand].title;
        $('#quote-title').html(author);
        $('#quote-content').html(quote1);
       });
     });
   });