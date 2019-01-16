const gmailLink = document.querySelector("#gmailLink");
const gmailIcone = document.querySelector("#gmailIcone");
const flipContainer = document.querySelector(".flip-container-inner");
const frontContainer = document.querySelector(".flip-container-front");

function copyAdress() {
  let tempElement = document.createElement("textarea");
  tempElement.value = "bidegaray.lionel@gmail.com";
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand("copy");
  document.body.removeChild(tempElement);

  gmailIcone.style.display = "none";
  let tempText = document.createElement("p");
  tempText.style.whiteSpace = "pre-wrap";
  tempText.innerHTML = "Email\nCopied";
  gmailLink.appendChild(tempText);

  setTimeout(function removeTempText() {
    gmailLink.removeChild(tempText);
    gmailIcone.style.display = "inline";
  }, 500);
}

function flipTheCard() {
  flipContainer.classList.toggle("is-flipped");
  setTimeout(function() {
    frontContainer.style.display = "none";
  }, 800);
}

function flipTheCardBack() {
  frontContainer.style.display = "block";
  flipContainer.classList.toggle("is-flipped");
}

document.querySelector("#flip").addEventListener("click", flipTheCard);
document.querySelector("#flip-back").addEventListener("click", flipTheCardBack);
