function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Skriv venligst lidt omkring dine idéer til app");
    return false;
  }
}