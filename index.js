document.addEventListener("DOMContentLoaded",
function (event) {
  var dataText = ["Web Designer.",
  "Web Developer.", "Computer Technician.",  "Louie Gie Capoy."];

function typeWrite(text, i, fnCallback){

  if(i < text.length) {
    document.querySelector("span").innerHTML =
      text.substring(0, i + 1) + "<span aria-hidden='true'></span>";

      setTimeout(function () {
        typeWrite(text, i + 1, fnCallback);
      }, 100);
  } else if (typeof fnCallback == "function") {
    setTimeout(fnCallback, 700);
  }
}

function StartTextAnimation(i){
  if (typeof dataText[i] === "undefined" ||
  dataText[i] === null) {
    setTimeout(function () {
      StartTextAnimation(0);
    }, 5000);
  } else {
    if (i < dataText[i]. length){
      typeWrite(dataText[i], 0, function () {
        StartTextAnimation(i + 1);
      });
    }
  }
}

  StartTextAnimation(0);
});
