
function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
        i.className += " responsive";
    } else {
        i.className = "nav-menu";
    }
}


// var a = document.getElementById("loginBtn");
// var b = document.getElementById("registerBtn");

function login() {
    location.href = "loginpage.html";
};

function register() {
    location.href = "registerpage.html"
};



