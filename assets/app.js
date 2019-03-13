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
    var trainName = "";
    var destination = "";
    var firstTrain = "";
    var frequency = "";

    //click event
    $("#submit").on("click", function () {
        event.preventDefault();
        trainName = $("#train").val().trim();
        destination = $("#destination").val().trim();
        firstTrain = $("#firstTrain").val().trim();
        frequency = $("#frequency").val().trim();

        database.ref().push({
            trainName: trainName,
            destination: destination,
            firstTrain: firstTrain,
            frequency: frequency,
        })
    });

    database.ref().on("child_added", function (childSnapshot) {

        console.log(childSnapshot);

        var trainName = childSnapshot.val().trainName;
        var destination = childSnapshot.val().destination;
        var firstTrain = childSnapshot.val().firstTrain;
        var frequency = childSnapshot.val().frequency;

        //append as rows to the table

        $("#schedule > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
            firstTrain + "</td><td>" + moment(frequency).format("hh:mm A"));
    });

});