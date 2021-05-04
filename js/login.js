// inputs
let iEmail=document.getElementById("inputEmail");
let iPass=document.getElementById("inputPassword");

// feedbacks
// let fF=document.getElementById("lF");
// let eF=document.getElementById("eF");
// let pF=document.getElementById("pF");

function vEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    // return regex.test(email) ? true : false;

    if(regex.test(email)){
        iEmail.classList.remove('is-invalid');
        // eF.classList.add('invalid-feedback');
        return true;
    }else {
        iEmail.classList.add('is-invalid');
        // eF.classList.remove('invalid-feedback');
        return false;

    }


}

function vPass() {
   let n=iPass.value.length;
    if(n>0){
        iPass.classList.remove('is-invalid');
        // pF.classList.add('invalid-feedback');
        return true;
    }
    else {
        iPass.classList.add('is-invalid');
        // pF.classList.remove('invalid-feedback');
        return false;
    }
}

function vForm(){
    let a = vEmail(iEmail.value);
    let b = vPass();

    if (a && b) {
        console.log(true);
        // fF.classList.add('invalid-feedback');
        return true;
    } else {
        console.log(false);
        // fF.classList.remove('invalid-feedback');
        return false;
    }

}
