//javascript code
function calculator(myOperator)
{
var myDisplay = parseInt(document.getElementById("myDisplay").value = myOperator);
var myUitkomst;

    if(myOperator == "C")
    {
        myUitkomst = "";
    }
    else if(myOperator == "*")
    {
        myUitkomst = myNumber1 * myNumber2;
    }
    else if(myOperator == "/")
    {
        myUitkomst = myNumber1 / myNumber2;
    }
    else
    {
        myUitkomst = myNumber1 - myNumber2;
    }

    document.getElementById("myUitkomst").innerHTML="De uitkomst van de som " + myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
}
function myDisplay()
{
    
}

