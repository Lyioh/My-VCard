function copyAdress() {
  let tempElement = document.createElement("textarea");
  tempElement.value = "bidegaray.lionel@gmail.com";
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);

  document.querySelector("#gmailIcone").style.display = "none";
  let tempText = document.createElement("p");
  tempText.style.whiteSpace = "pre-wrap";
  tempText.innerHTML = "Email\nCopied";
  document.querySelector("#gmailLink").appendChild(tempText);

  setTimeout(function removeTempText() {
    document.querySelector("#gmailLink").removeChild(tempText);
    document.querySelector("#gmailIcone").style.display = "inline";
  }, 500);
}
