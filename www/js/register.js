document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)

    const btnLogin = document.getElementById("btnLogin").onclick = clickLogin
    const btnRegister = document.getElementById("btnRegister").onclick = checkRegister

    const fieldUsername = document.getElementById("fieldUsername")
    const fieldPassword1 = document.getElementById("fieldPassword1")
    const fieldPassword2 = document.getElementById("fieldPassword2")

}

function checkRegister() {

    if (fieldUsername.value == "") {

        alert("You must type an username")

    } else if (fieldPassword1.value == "" || fieldPassword2.value == "" ) {

        alert("You must type a password")

    } else if (fieldPassword1.value == fieldPassword2.value) {

        if (localStorage.getItem(fieldUsername.value)) {

            alert("Username is already used")

        } else {

            localStorage.setItem(fieldUsername.value, fieldPassword1.value)

            alert("User registered successfully")

        }

    } else {

        alert("The passwords dont match")

    }
    
}


function clickLogin() {

	location.href = "index.html"
    
}


