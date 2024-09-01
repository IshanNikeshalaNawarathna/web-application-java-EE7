function userRegistration() {

    var data = {
        mobile: document.getElementById("mobile").value,
        name: document.getElementById("name").value,
        geder: document.getElementById("male").checked ? "male" : "female",
        country: document.getElementById("country").value,
        password: document.getElementById("password").value,
    }

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "UserRegistration", true);
    ajax.setRequestHeader("Content-type", "application/json");

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            var jsObject = JSON.parse(ajax.responseText);
            if (jsObject.msg == "Success") {
                window.location = "User_login.html";
            } else {
                document.getElementById("error").innerHTML = "Already have Account";
            }
        }
    };
    ajax.send(JSON.stringify(data));
}

function userLogin() {

    var data = {
        mobile: document.getElementById("mobile").value,
        password: document.getElementById("password").value,
    }

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "UserLogin", true);
    ajax.setRequestHeader("Content-type", "application/json");

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            var jsObject = JSON.parse(ajax.responseText);
            if (jsObject.msg == "Success") {
                window.location = "index.html";
            } else {
                document.getElementById("error").innerHTML = "Invalid Mobile number and password";
            }
        }
    };
    ajax.send(JSON.stringify(data));

}
function gotoRgistration() {
    window.location = "User_registration.html";
}

function logout() {
    window.location = "logout";
}

function loadUser() {

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "LoadUser", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            var user = JSON.parse(ajax.responseText);
            document.getElementById("mobile").innerHTML = user.mobile;
            document.getElementById("name").innerHTML = user.name;
            document.getElementById("gender").innerHTML = user.gender;
            document.getElementById("country").innerHTML = user.country;
        }
    };
    ajax.send();


}