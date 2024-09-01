# Java EE 7 Application

This is a Java EE 7 application that handles data in JSON format, utilizing the GSON library from Google for JSON parsing and serialization. 

## Features

- JSON data handling
- Use of the GSON library for JSON parsing and serialization
- Java EE 7 framework for robust backend development

## Prerequisites

- Java Development Kit (JDK) 8 or later
- A Java EE 7 compliant server (e.g., GlassFish 4.1, WildFly 8.1, etc.)
- [GSON library](https://github.com/google/gson) (included in the project)

## Setup and Installation

1. **Download the Project**
   - Clone this repository or download the ZIP file.

2. **Import the Project**
   - Open your IDE (e.g., Eclipse, IntelliJ IDEA, NetBeans).
   - Import the project as an existing project.

3. **Add GSON Library**
   - Download the GSON jar from the [official GSON GitHub repository](https://github.com/google/gson) or from [Maven Central](https://mvnrepository.com/artifact/com.google.code.gson/gson).
   - Add the GSON jar to your project's `lib` directory.
   - Include the jar in your project's build path.

4. **Deploy the Application**
   - Deploy the application to your Java EE 7 compliant server.
   - Access the application through the server's deployment URL.

## Usage

The application handles JSON data using the GSON library. You can send and receive JSON objects through the application's API endpoints.

### Example JSON Request in POST

```bash
function userRegistration() {

    var data = {
        name:"Ishan",
        country: "USA",
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

```
### Example JSON Request in GET
```bash
function loadUser() {

    var ajax = new XMLHttpRequest();
    ajax.open("GET", "LoadUser", true);

    ajax.onreadystatechange = function () {
        if (ajax.readyState === 4 && ajax.status === 200) {
            var user = JSON.parse(ajax.responseText);
            console.log(user)
        }
    };
    ajax.send();
}
