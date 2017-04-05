
var medtime;
var medtime2;
var timer;
var resume;
var stopclick=0;
var daytrack;
var datetrack;
var totaltime;
var goaltime;
var tracktime;
var playing=false;

$( document ).ready(function() {
$("body").on('click', "#start",settime);
$("body").on('click', "#stop",stoptime);
$("body").on('click', "#resume",resumetime);

function playaudio(){
  if (playing===false) {
    $(".music").play();
    playing=true;
  }
  else {
    $(".music").pause();
    playing=false;
  }
}

function settime(){
      $("#min").html("00");
      $("#sec").html("00");
      var amount=parseInt($(minuteinput).val().trim());
      console.log(amount);
      console.log(jQuery.type(amount));
      starttime= amount*60000;
      medtime= amount*60000;
      console.log(medtime);
      var minutes = Math.floor(medtime/60000);
      console.log(minutes);
      var seconds = Math.floor(medtime/1000);
      console.log(seconds);
      if(minutes>9){
      $("#min").html(minutes); 
      }
      if(minutes<10){
        $("#min").html("0"+minutes);
      }
      timer=setInterval(countdown,1000);

};

       function countdown() {
        console.log(medtime);
         medtime=medtime-1000;
         console.log(medtime);
         minfinal=Math.floor(medtime/60000);
         secfinal=(medtime-(minfinal*60000))/1000;
         console.log(minfinal);
         console.log(secfinal);
         if(medtime!==0 && minfinal<10){
          $("#min").html("0"+minfinal);
         };
         if(medtime!==0 && minfinal>10){
          $("#min").html(minfinal);
         };
         if(medtime!==0 && secfinal<10){
          $("#sec").html("0"+secfinal); 
         };
         if(medtime!==0 && secfinal>10){
          $("#sec").html(secfinal);
         };
      }

function stoptime() {
  clearInterval(timer);
  clearInterval(resume);
  stopclick++;
  console.log(stopclick);
  $("#minuteinput").val("");
}

function resumetime() {
  resume=setInterval(startagain,1000);
  function startagain() {
  console.log(medtime);
    medtime=medtime-1000;
    console.log(medtime);
    minfinal=Math.floor(medtime/60000);
    secfinal=(medtime-(minfinal*60000))/1000;
    console.log(minfinal);
    console.log(secfinal);
    if(medtime!==0 && minfinal<10){
    $("#min").html("0"+minfinal);
    };
    if(medtime!==0 && minfinal>10){
    $("#min").html(minfinal);
    };
    if(medtime!==0 && secfinal<10){
    $("#sec").html("0"+secfinal); 
    };
    if(medtime!==0 && secfinal>10){
    $("#sec").html(secfinal);
    };
}
}

});

