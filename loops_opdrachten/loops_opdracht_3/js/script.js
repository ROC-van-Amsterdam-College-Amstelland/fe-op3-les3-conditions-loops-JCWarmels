//javascript code
function loop()
{
var i;
var text = "";
for (i = 1; i <= 50; i++) 
{ 
    if(i == 20)
    {
        text += "Dit zijn mooie getallen <br>"
    }
    else if(i == 40){
        text += "Dit zijn mooie getallen <br>"
    }
    else{
        text += i + "<br>"
    }
   
}
document.getElementById("een").innerHTML = text
}