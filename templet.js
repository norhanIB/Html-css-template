var signup = document.querySelector("#login");
var heading = document.querySelector(".desch2")
var paragraph = document.querySelector(".desch2 + p")
console.log(signup);


var queryString = window.location.search.slice(1)
var valuesArray = queryString.split("&")
var finalArray = []
valuesArray.forEach(function (ele) {
   var value = ele.split("=")
    finalArray.push(value)
})
console.log(finalArray);



signup.addEventListener('click', function(){
        open("signup.html")
})

if (queryString ) {
    document.querySelector("#signup").style.display = "none"
    signup.style.display = "none"
    heading.textContent = finalArray[0][1].replace("+" , " ")
    paragraph.textContent = `Your mail is ${finalArray[1][1].replace("%40" , "@")} and your address is ${finalArray[2][1]} and your phone is ${finalArray[3][1]}`
}