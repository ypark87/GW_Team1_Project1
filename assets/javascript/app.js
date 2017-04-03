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

/*weeklyTotal = function(first){

}*/

function getIntValue(valtoCheck) {
    var result = parseInt(valtoCheck);
    if (isNaN(result)) {
        result =  0;
    }
    return result;
}

var newWeek2 = {
    goal: 0,
    monday: 0,
    tuesday: 0,
    wednesday: 0,

    totalMin: /**weeklyTotal**/0
};

//Variables
$("#addWeek").on("click", function() {
    //alert("test");
    //User Input
    var weeklyGoal = $('#weeklyGoal').val().trim();
    var weekday1 = $('#weekday1').val().trim();
    var weekday2 = $('#weekday2').val().trim();
    var weekday3 = $('#weekday3').val().trim();
    var weekday4 = $('#weekday4').val().trim();
    var weekday5 = $('#weekday5').val().trim();
    var weekday6 = $('#weekday6').val().trim();
    var weekday7 = $('#weekday7').val().trim();


    newWeek2.goal = weeklyGoal;
    newWeek2.monday = weekday1;
    newWeek2.tuesday = weekday2;
    newWeek2.wednesday = weekday3;



    var sum = getIntValue(weekday1) + getIntValue(weekday2) + getIntValue(weekday3) + getIntValue(weekday3) + getIntValue(weekday4) +
        getIntValue(weekday5) + getIntValue(weekday6) + getIntValue(weekday7);

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

//Clear off the text-boxes
    //$("#weekList").append("<tr><td>" + newWeek2.goal+ "</td><td>" + newWeek2.totalMin +"</td></tr>");

    $("#weekList").append("<tr><td>" + newWeek2.goal+ "</td><td>" + newWeek2.monday +"</td><td>" + newWeek2.tuesday +"</td><td>" + newWeek2.wednesday +"</td></tr>");

    $("#weeklyGoal").val("");
    $("#weekday1").val("");
    $("#weekday2").val("");
    $("#weekday3").val("");
    $("#weekday4").val("");
    $("#weekday5").val("");
    $("#weekday6").val("");
    $("#weekday7").val("");

    return false;

});

/*database.ref().on("child_added", function(snapshot, prevChildKey) {*/
   /* var newWeek = snapshot.val();*/
   /* console.log("Previous Post ID: " + prevChildKey);*/

/*var weeklyTotal = 0;
    for(var i = 0; i < weeklyTotal.length; i++){
        if(parseInt(arr[i].innerHTML))
            weeklyTotal+= parseInt(arr[i].innerHTML);
    }
    console.log(weeklyTotal);*/

   /* $("#weekList").append("<tr><td>" + newWeek2.goal+ "</td><td>" + newWeek2.totalMin +"</td></tr>");

    $("#weeklyGoal").val("");
    $("#weekday1").val("");
    $("#weekday2").val("");
    $("#weekday3").val("");
    $("#weekday4").val("");
    $("#weekday5").val("");
    $("#weekday6").val("");
    $("#weekday7").val("");
});*/