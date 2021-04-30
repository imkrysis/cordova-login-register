document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)

    const btnLogin = document.getElementById("btnLogin").onclick = checkLogin
    const btnRegister = document.getElementById("btnRegister").onclick = clickRegister

    const fieldUsername = document.getElementById("fieldUsername")
    const fieldPassword = document.getElementById("fieldPassword")

}

function checkLogin() {

    if (fieldUsername.value == "") {

        alert("You must type an username")

    } else if (fieldPassword.value == "") {

        alert("You must type a password")

    } else if (localStorage.getItem(fieldUsername.value) == fieldPassword.value) {

        alert("Login successfull")

    } else {

        alert("Invalid credentials")

    }

}

function clickRegister() {

	location.href = "register.html"

}


