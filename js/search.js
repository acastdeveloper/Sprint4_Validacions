const formSearch = document.getElementById("formsearch");
const searchField = document.getElementById("searchfield");
const searchButton = document.getElementById("searchbutton");
const searchError = document.getElementById("errorsearch");

function validateSearch() {
        let searchValue=searchField.value;
        let sL=searchValue.length;
   if(sL<=3) {
    searchField.classList.add('is-invalid');
    searchError.classList.remove('invalid-feedback');
    searchError.content="No has escrit prou"
    return false;
}
else {
    searchField.classList.remove('is-invalid');
    searchError.classList.add('invalid-feedback');
       return true
   }
}
