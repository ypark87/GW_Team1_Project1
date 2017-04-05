$( document ).ready(function() {
$('.genre').on('click', function(e) {
  e.preventDefault();
  console.log(this.id);
  var genre=this.id;
  var apikey="0UMP39O86QVYPFFZ";
  var queryURL = "https:/freemusicarchive.org/api/get/tracks.json?api_key="+apikey+"&limit=21&genre_handle="+genre;
  console.log (queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      var rand=Math.floor((Math.random() * (20)) + 0);
      console.log(rand);
      console.log(JSON.parse(response).dataset[rand]);
      console.log(JSON.parse(response).dataset[rand].track_id);
      var trackid=JSON.parse(response).dataset[rand].track_id;
      console.log(trackid);
      $(".music").empty();
      $(".music").append('<object width="300" height="50">');
      $(".music").append('<param name="movie" value="https://freemusicarchive.org/swf/trackplayer.swf"/>');
      $(".music").append('<param id="songnum1" name="flashvars" value="track=https://freemusicarchive.org/services/playlists/embed/track/' + trackid+ '.xml"/>');
      $(".music").append('<param name="allowscriptaccess" value="sameDomain"/>')
      $(".music").append('<embed id="songnum2" type="application/x-shockwave-flash" src="https://freemusicarchive.org/swf/trackplayer.swf" width="300" height="50" flashvars="track=https://freemusicarchive.org/services/playlists/embed/track/' + trackid+ '.xml" allowscriptaccess="sameDomain" /></object>');
       });
});
});
