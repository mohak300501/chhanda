var profile;

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:633521309212-qb2q2mk90vgclojg21fp1412ijkisntk.apps.googleusercontent.com
    profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    console.log("ID Token: " + id_token);

    //Display portal
    document.getElementById('portal').style.display = "block";

    //Display name
    document.getElementById('name').innerHTML = "Namaste " + profile.getGivenName() + "!";

    //Put name and email in form
    document.getElementsByName('Name')[0].value = profile.getGivenName();
    document.getElementsByName('Email')[0].value = profile.getEmail();
}


function signOut() {
    //Hide portal
    document.getElementById('portal').style.display = "none";

    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        console.log('User signed out.');
    });
}

function auto_height(elem) {
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px";
    document.getElementById("submit").innerHTML = "";
}

//function nae() {
//    document.getElementById("demo").innerHTML = profile.getGivenName();
//    document.getElementsByName('Name')[0].value = profile.getGivenName();
//    document.getElementsByName('Email')[0].value = profile.getEmail();
//}