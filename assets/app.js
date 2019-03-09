$(document).ready(function () {

    var config = {
        apiKey: "AIzaSyDiG-bLYHf9QH2vwmzABnGBqrsxyqIumkA",
        authDomain: "trainstation-dc7df.firebaseapp.com",
        databaseURL: "https://trainstation-dc7df.firebaseio.com",
        projectId: "trainstation-dc7df",
        storageBucket: "trainstation-dc7df.appspot.com",
        messagingSenderId: "819318727587"
    };

    firebase.initializeApp(config);
    
    var database = firebase.database();
}
