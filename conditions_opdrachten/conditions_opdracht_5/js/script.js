//javascript code
function calculator(myOperator)
{
var myNumber1 = parseInt(document.getElementById("myNumber1").value);
var myNumber2 = parseInt(document.getElementById("myNumber2").value);
var myUitkomst;

    if(myOperator == "+")
    {
        myUitkomst = myNumber1 + myNumber2;
    }
    else
    {
        myUitkomst = myNumber1 - myNumber2;
    }

    document.getElementById("myUitkomst").innerHTML="De uitkomst van de som " + myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
}
