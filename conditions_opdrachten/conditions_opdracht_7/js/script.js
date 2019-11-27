//javascript code
function myTekst(myOperator)
{


var myWaarde1 = "Misschien had je toch op de andere moeten klikken.";
var myWaarde2 = "Of toch die andere.";
var myWaarde3 = "Dussuh mooi weertje buiten?";
var myWaarde4 = "Wat doe je hier eigenlijk?";
var myWaarde5 = "Nog wat leuks beleeft laatst?";
var myWaarde6 = "En nu is het klaar.";


    if(myOperator == "zin1")
    {
        document.getElementById("myWaarde1").innerHTML = myWaarde1;
    }
    else if(myOperator == "zin2")
    {
        document.getElementById("myWaarde2").innerHTML = myWaarde2;
    }
    else if(myOperator == "zin3")
    {
        document.getElementById("myWaarde3").innerHTML = myWaarde3;
    }
    else if(myOperator == "zin4")
    {
        document.getElementById("myWaarde4").innerHTML = myWaarde4;
    }
    else if(myOperator == "zin5")
    {
        document.getElementById("myWaarde5").innerHTML = myWaarde5;
    }
    else
    {
        document.getElementById("myWaarde6").innerHTML = myWaarde6;
    }
    
}