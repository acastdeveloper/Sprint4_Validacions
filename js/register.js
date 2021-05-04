// inputs
let iEmail = document.getElementById("inputEmail");
let iPass = document.getElementById("inputPassword");
let iCPass = document.getElementById("cInputPassword");
let iProv = document.getElementById("inputProvince");

function vEmail(email) {

    iEmail.classList.remove("is-invalid");

    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    if (regex.test(email)) {
        return true;
        iEmail.classList.add("is-valid");
    } else {
        iEmail.classList.add("is-invalid");
        return false;
    }
}

function vPass() {

    iPass.classList.remove("is-invalid");

    let n = iPass.value.length;

    if (n > 0) {
        return true;
    } else {
        iPass.classList.add("is-invalid");
        return false;

    }
}

function vCPass() {

    iCPass.classList.remove("is-invalid");

    let m = iCPass.value.length;

    if (m > 0) {
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
    let a = vEmail(iEmail.value);
    console.log("Test Email: " + a);
    let b = vPass();
    console.log("Test Password: " + b);
    let c = vCPass();
    console.log("Test Confirm: " + c);
    let d = equPass();
    console.log("Test EquPass: " + d);
    let e = vProv();
    console.log("Test prov: " + e);

    if (a && b && c && d && e) {
        console.log("TEST DE VALIDACIÓ DE NIVELL 1");
        return true;
    } else {
        console.log("NO HA PASSAT LA VALIDACIÓ DE NIVELL 1");
        return false;
    }

}
