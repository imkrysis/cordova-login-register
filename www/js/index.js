document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version)

    const btnLogin = document.getElementById("btnLogin").onclick = checkLogin
    const btnRegister = document.getElementById("btnRegister").onclick = clickRegister

    const fieldUsername = document.getElementById("fieldUsername")
    const fieldPassword = document.getElementById("fieldPassword")

}

function checkLogin() {

    

}

function clickRegister() {

	location.href = "register.html"

}


