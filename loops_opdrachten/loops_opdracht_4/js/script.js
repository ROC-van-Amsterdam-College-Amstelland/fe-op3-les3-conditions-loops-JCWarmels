//javascript code
function loop()
{
var i;
var myOutput = "";
for (i = 1; i <= 1000; i+=10) 
{ 
    
    myOutput += i + "<br>"
    console.log(i)
    
}
document.getElementById("een").innerHTML = myOutput;
}