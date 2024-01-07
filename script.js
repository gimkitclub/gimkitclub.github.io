function login() {
  var text = document.getElementById("pin");
  var textEntered = text.value;
  if (textEntered == "gimkit") {
    alert("Welcome Guest");
    window.location.href='gimkit.html';
  }
    else if (textEntered == "alexhi"){
      alert("Welcome Alex da Great");
      window.location.href='gimkit.html';
    }
      else if (textEntered == "fbiAgent"){
        alert("Welcome Yiming da Great");
        window.location.href='gimkit.html';
      }
        else if (textEntered == "Evan.com" || "522114.31513") {
          alert("Welcome Admin");
          window.location.href='admin.html';
        }
          else if (textEntered == "ilike123") {
            alert("Welcome Leo");
            window.location.href='gimkit.html';
          }
    
  else {
    alert("You got it correct! Now, click OK to get to the website!");
    window.location.href='fbi.html';
  }
}