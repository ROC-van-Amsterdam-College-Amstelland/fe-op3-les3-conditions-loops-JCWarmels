//javascript code
function loop()
{
var i;
var text = "";
for (i = 20; i >= 0; i--) 
{
    text += "Het nummer is " + i + "<br>"
}
document.getElementById("een").innerHTML = text
}