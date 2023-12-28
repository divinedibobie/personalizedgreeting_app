function myfunction() {
    var name = document.getElementById("myText").value;
    localStorage.setItem("Username", name);
    alert(document.getElementById("myText").innerHTML = "Hello Dear " + localStorage.Username + ", Wishing you a Merry Christmas and a Prosperous New Year In Advanace.")
}
function Greetings() {
    alert(document.getElementById("myText").innerHTML = "Hello Dear " + localStorage.Username + ", Wishing you a Merry Christmas and a Prosperous New Year In Advanace.")
}
function clear() {
    var name = localStorage.delete();
    alert("hello");

}
