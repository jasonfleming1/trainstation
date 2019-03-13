$(document).ready(function () {

    //here we initialize our firebase database
    var config = {
        apiKey: "AIzaSyDiG-bLYHf9QH2vwmzABnGBqrsxyqIumkA",
        authDomain: "trainstation-dc7df.firebaseapp.com",
        databaseURL: "https://trainstation-dc7df.firebaseio.com",
        projectId: "trainstation-dc7df",
        storageBucket: "trainstation-dc7df.appspot.com",
        messagingSenderId: "819318727587"
    };

    //getting real with firebase
    firebase.initializeApp(config);


    //variables for our database
    var database = firebase.database();
    var trainName;
    var destination;
    var firstTrain;
    var frequency;

    //click event
    $("#submit").on("click", function () {
        event.preventDefault();
        database.ref().push({
            trainName = $("#train").val().trim(),
            destination = $("#destination").val().trim(),
            firstTrain = $("#firsttrain").val().trim(),
            frequency = $("#frequency").val().trim(),
        });
    });

    database.on("child-added", function (childSnapshot) {

        console.log(childSnapshot);

        var dbName = childSnapshot.val().trainName;
        var dbDestination = childSnapshot.val().destination;
        var dbFirstTrain = childSnapshot.val().firstTrain;
        var dbFrequency = childSnapshot.val().frequency;

        //append as rows to the table

        $("#schedule > tbody").append("<tr><td>" + dbName + "</td><td>" + dbDestination + "</td><td>" +
            dbFrequency + "</td><td>" + moment(dbFirstTrain).format("hh:mm A"));
    });

});