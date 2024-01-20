document.addEventListener('DOMContentLoaded', function() {

    var userData = sessionStorage.getItem('userName');

    displayData(userData);
});

function displayData(data) {
    var displayElements = document.querySelectorAll('.card');


    displayElements.forEach(function(element) {
        element.innerText = data;
    });
}    

document.getElementById("card1").style.fontFamily = "Impact";
document.getElementById("card2").style.fontFamily = "Audiowide";
document.getElementById("card3").style.fontFamily = "Tangerine";
document.getElementById("card4").style.fontFamily = "Verdana";
document.getElementById("card5").style.fontFamily = "Trirong";
document.getElementById("card6").style.fontFamily = "Sofia";

