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

    
    
}


function clickLogin() {

	location.href = "index.html"
    
}


