// inputs
let a, b, c, d, e, f, g; // Les condicions

let iEmail = document.getElementById("inputEmail");
let iPass = document.getElementById("inputPassword");
let iCPass = document.getElementById("cInputPassword");
let iProv = document.getElementById("inputProvince");

// Feedbacks for Level 3
let fEmail = document.getElementById("erEmail");
let fPass = document.getElementById("erPass");
let fPass2 = document.getElementById("erPass2");
let fPass3 = document.getElementById("erPass3");
let fCPass = document.getElementById("erConfPass");
let fCPass2 = document.getElementById("erConfPass2");
let fProv = document.getElementById("errorProvince");


function vEmail(email) {

    iEmail.classList.remove("is-invalid");

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (regex.test(email)) {
        return true;
    } else {
        iEmail.classList.add("is-invalid");
        return false;
    }
}

function vPass() {

    iPass.classList.remove("is-invalid");

    let n = iPass.value.length;

    if (n >= 8) { // level2: n>=8 instead n>0
        iPass.classList.remove("is-invalid");
        return true;
    } else {
        iPass.classList.add("is-invalid");
        return false;

    }
}

function vCPass() {

    iCPass.classList.remove("is-invalid");

    let m = iCPass.value.length;

    if (m >= 8) { // level2: m>=8 instead m>0
        return true;
    } else {
        iCPass.classList.add("is-invalid");
        return false;
    }
}

function equPass() {

    if (iPass.value == iCPass.value) {
        return true;
    } else {
        iPass.classList.add("is-invalid");
        iCPass.classList.add("is-invalid");
        return false;
    }
}

function vProv() {

    iProv.classList.remove("is-invalid");

    let provV = iProv.value;

    if (provV != "") {
        return true;
    } else {
        iProv.classList.add("is-invalid");
        return false;
    }
}

function vForm() {
    a = vEmail(iEmail.value);
    // console.log("Test Email: " + a);
    b = vPass();
    // console.log("Test Password: " + b);
    c = vCPass();
    // console.log("Test Confirm: " + c);
    d = equPass();
    // console.log("Test EquPass: " + d);
    e = vProv();
    // console.log("Test prov: " + e);
    f = maysPass();
    g = numPass();


    if (a && b && c && d && e && f && g) {
        console.log("OK");
        return true;
    } else {
        console.log("FAIL");
        feedBack();
        return false;
    }

}

// LEVEL 2
function maysPass() {
    let regex = /[A-Z]/;

    if (regex.test(iPass.value)) {
        // console.log("Conté una majúscula almenys");
        return true;
    } else {
        // console.log("NO conté majúscules");
        return false;
    }
}

function numPass() {
    let regex = /[0-9]/;

    if (regex.test(iPass.value)) {
        // console.log("Conté un número almenys");
        return true;
    } else {
        // console.log("NO Conté cap número");
        return false;
    }
}

// LEVEL 3
function feedBack() {

    if (!a) { fEmail.innerText = "Email required"; } else {
        iEmail.classList.remove("is-invalid");
        iEmail.classList.add("is-valid");
    }
    if (!b) { fPass.innerText = "8 characters required."; }
    if (!c) { fCPass.innerText = "8 characters required. "; }
    if (!d) { fCPass2.innerText = "Not coincident passwords."; }
    if (!e) { fProv.innerText = "Province required."; } else {
        iProv.classList.remove("is-invalid");
        iProv.classList.add("is-valid");
    }
    if (!f) { fPass2.innerText = "At least 1 capital letter is required. "; }
    if (!g) { fPass3.innerText = "At least 1 number is required. "; }

    if (b && f && g) {
        iPass.classList.remove("is-invalid");
        iPass.classList.add("is-valid");
    }

    if (d) {
        iCPass.classList.remove("is-invalid");
        iCPass.classList.add("is-valid");
    }

}
