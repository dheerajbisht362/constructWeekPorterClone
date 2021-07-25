let faq = document.getElementsByClassName("question");
let i;

for (i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let answer = this.nextElementSibling;
    if (answer.style.display === "inline") {
      answer.style.display = "none";
    } else {
      answer.style.display = "inline";
    }
  });
}

var data_div = document.getElementById("data");

function storeInformation() {
  let form = document.getElementById("form-text");

  let city = document.getElementById("city").value;

  let name = document.getElementById("name").value;

  let contact = document.getElementById("contact").value;

  let movingFrom = document.getElementById("moving-from").value;

  let movingTo = document.getElementById("moving-to").value;

  let detail = {
    city,
    name,
    contact,
    movingFrom,
    movingTo,
  };

  let arr;

  arr = localStorage.getItem("detail");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("detail"));
  }
  arr.push(detail);

  localStorage.setItem("detail", JSON.stringify(arr));
}

var last_question

function toggleElement(id)
{
    if (last_question != undefined) {
        document.getElementById(last_question).style.display = 'none';
        document.getElementById(last_question + "Col").style.color = 'black';
    }
    if(document.getElementById(id).style.display == 'none')
    {
        document.getElementById(id).style.display = '';
        document.getElementById(id+ "Col").style.color = 'blue';
    }
    else
    {
        document.getElementById(id).style.display = 'none';
        document.getElementById(id + "Col").style.color = 'black';
    }
    last_question= id;
}

function sumbitForm(){
  document.getElementById("form01").style.display = "none"
  document.getElementById("hide01").style.display = "block"
  
}
document.getElementById("form01").addEventListener("submit", function (event) {
      event.preventDefault()
  });