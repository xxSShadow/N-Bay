function Function1() {
  var x = document.getElementById("Input1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function Function2(x) {x.classList.toggle("fa-eye-slash");}
