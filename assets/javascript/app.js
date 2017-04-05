/**
 * Created by elenastaylor on 3/25/17.
 */
    // Initialize Firebase
var config = {
        apiKey: "AIzaSyA9qYnOxosgykkMz_FTdFq62TVKL1giEVQ",
        authDomain: "meditateapp-a960e.firebaseapp.com",
        databaseURL: "https://meditateapp-a960e.firebaseio.com",
        projectId: "meditateapp-a960e",
        storageBucket: "meditateapp-a960e.appspot.com",
        messagingSenderId: "777838008422"
    };
firebase.initializeApp(config);

var database = firebase.database();

//declare a function to check that number entered is valid
function getIntValue(valtoCheck) {
    var result = parseInt(valtoCheck);
    if (isNaN(result)) {
        result =  0;
    }
    return result;
}

//declare table variables and set their values at zero
var newWeek2 = {
    goal: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0,
    saturday: 0,
    sunday: 0,
    totalMin: 0
};

//Variables
$("#addWeek").on("click", function() {
    //alert("test");
    //User Input
    var weeklyGoal = getIntValue($('#weeklyGoal').val().trim());
    var weekday1 = getIntValue($('#weekday1').val().trim());
    var weekday2 = getIntValue($('#weekday2').val().trim());
    var weekday3 = getIntValue($('#weekday3').val().trim());
    var weekday4 = getIntValue($('#weekday4').val().trim());
    var weekday5 = getIntValue($('#weekday5').val().trim());
    var weekday6 = getIntValue($('#weekday6').val().trim());
    var weekday7 = getIntValue($('#weekday7').val().trim());
    //var total = $('#total').val().trim();


    newWeek2.goal = weeklyGoal;
    newWeek2.monday = weekday1;
    newWeek2.tuesday = weekday2;
    newWeek2.wednesday = weekday3;
    newWeek2.thursday = weekday4;
    newWeek2.friday = weekday5;
    newWeek2.saturday = weekday6;
    newWeek2.sunday = weekday7;
    //newWeek2.total = totalMin;




    var sum = weekday1 + weekday2 + weekday3 + weekday3 + weekday4 +
        weekday5 + weekday6 + weekday7;

    console.log("weekly Goal: " + weeklyGoal);
    console.log("week day 1:" + weekday1);
    console.log("week day 2:" + weekday2);
    console.log("week day 3:" + weekday3);
    console.log("week day 4:" + weekday4);
    console.log("week day 5:" + weekday5);
    console.log("week day 6:" + weekday6);
    console.log("week day 7:" + weekday7);
    console.log("sum:" + sum);

    newWeek2.totalMin = sum;

//Objests:
  /*  var newWeek = {
        goal: weeklyGoal,
        totalMin: /!**weeklyTotal**!/0
    };*/

//Upload Data to Database
   // database.ref().push(newWeek);


    $("#weekList").append("<tr><td >" + newWeek2.goal+ "</td><td>" + newWeek2.monday +"</td><td>" + newWeek2.tuesday +"</td><td>" + newWeek2.wednesday +"</td><td>" +
         + newWeek2.thursday + "</td><td>" + newWeek2.friday + "</td><td>" + newWeek2.saturday + "</td><td>" + newWeek2.sunday + "</td><td>" + sum + "</td></tr>");


    var percent = calculatePercent(sum,  newWeek2.goal);

        var $ppc = $('.progress-pie-chart'),
            percent = parseInt(/*$ppc.data('percent')*/percent),
            deg = 360*percent/100;
        if (percent > 50) {
            $ppc.addClass('gt-50');
        }
        $('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');
        $('.ppc-percents span').html(percent + '%');
        /*$('#data-percent').append(percent + '%');*/


    $("#weeklyGoal").val("");
    $("#weekday1").val("");
    $("#weekday2").val("");
    $("#weekday3").val("");
    $("#weekday4").val("");
    $("#weekday5").val("");
    $("#weekday6").val("");
    $("#weekday7").val("");
    $("#totalMin").val("");

    return false;

});




//link to the progress bar/progress pie chart
function calculatePercent(weeklyGoal, weeklyTotal) {
    //var weeklyGoal = 0;
    //var weeklyTotal = 0;
    var result = weeklyGoal/weeklyTotal*100;
    console.log(result);
    return result;

}

/* Progress Pie Chart */




/*database.ref().on("child_added", function(snapshot, prevChildKey) {*/
/* var newWeek = snapshot.val();*/
/* console.log("Previous Post ID: " + prevChildKey);*/
