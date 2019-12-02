//javascript code
function loop()
{
var i;
var text = "";
for (i = 1; i <= 5; i++) 
{
    text += "Het nummer is " + i + "<br>"
}
document.getElementById("een").innerHTML = text
}