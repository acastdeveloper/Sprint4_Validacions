// inputs
let iEmail = document.getElementById("inputEmail");
let iPass = document.getElementById("inputPassword");
let iCPass = document.getElementById("cInputPassword");
let iProv = document.getElementById("inputProvince");

function vEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (regex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function vPass() {
    let n = iPass.value.length;
    if (n > 0) {
        return true;
    } else {
        return false;
    }
}

function vCPass() {
    let m = iCPass.value.length;
    if (m > 0) {
        return true;
    } else {
        return false;
    }
}

function equPass() {
    if (iPass.value == iCPass.value) {
        return true;
    } else {
        return false;
    }
}

function vProv() {
    let provV = iProv.value;

    if (provV != "") {
        return true;
    } else {
        return false;
    }
}

function vForm() {
    let a = vEmail(iEmail.value);
    console.log("Test Email: " + vEmail());
    let b = vPass();
    console.log("Test Password: " + b);
    let c = vCPass();
    console.log("Test Confirm: " + c);
    let d = equPass();
    console.log("Test EquPass: " + d);
    let e = vProv();
    console.log("Test prov: " + e);

    if (a && b && c && d && e) {
        console.log("Test vàl·lid");
    }

}
