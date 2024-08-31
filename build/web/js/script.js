function userRegistration() {

    var data = {
        mobile = "0767235819",
        name = "Ishan"
    }

    var ajax = new XMLHttpRequest();
    ajax.open("POST", "UserRegistration", true);
    ajax.setRequestHeader("Content-type", "application/json")
    ajax.send(jSON.stringify(data));

}