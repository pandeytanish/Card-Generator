function myData() {
    var name = document.getElementById("name").value;

    if(name < 10){
        alert("Enter name max 10 letters");
        return false;
    }
    else{
        sessionStorage.setItem("userName",name);
        return true;
    }
}