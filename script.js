let bowl = document.getElementById("bowl");

let scoreS = Number(localStorage.getItem("key"));


function scorePlus() {
  scoreS = scoreS + 1;
  localStorage.setItem("key", scoreS);
  document.getElementById("scoreN").innerHTML = scoreS;
  console.log("The consignmentis proud of you");
  console.log('+1 social credit')
}



document.getElementById("scoreN").innerHTML = scoreS;

bowl.addEventListener("click", scorePlus);
