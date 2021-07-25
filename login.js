var logInData = [["dheerajbisht362@gmail.com", "123456","Dheeraj Bisht"]]
localStorage.setItem("logData", JSON.stringify(logInData))

function openForm() {
                document.getElementById("myForm").style.display = "block"
            }
function closeForm() {
                document.getElementById("myForm").style.display = "none";
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
function redirect() {

    var email = document.getElementById("email").value;
    var password = document.getElementById("psw").value;
    var data = JSON.parse(localStorage.getItem("logData"))
    
    console.log(data[0])
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] == email && data[i][1] == password) {
            console.log(1)
            localStorage.setItem("currentuser", JSON.stringify(data[i]))
            return true
        }
    }
    return false
}
function validateMyForm()
{
    if (redirect()) {
        window.location.href = "userOrderHistory.html"
    }
    else {
        alert("Email or password incorrect");
    }
}
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault()
});

