//javascript code
var myOutput = new Array();
var calcInput;

function calculator(myInput)

{
    if(Number.isInteger(myInput)==true)
    {
        myOutput.push(myInput);
    } 
    else if(myInput == ".")
    {
        myOutput.push(myInput);
    } 
    else
    {
        myOutput.push(myInput);
    }
console.log(myOutput);
calcInput=myInput;
display();


}

function display()
{
var calcArray = myOutput.length;
var calcOutput = "";
var i;
var x;
var myNumbers = new Array;
var myOperations = new Array;
var myUitkomst;

    for(i=0; i<calcArray; i++)
    {
        calcOutput += myOutput[i];

        //1 check of variabel array gevuld is met een nummer of undefined
        //je moet hier cheken of getal een nummer is zo ja opslaan in een variabele getal1
        //parseInt getal 1 zodat je ermee kan rekenen


    }
document.getElementById("myDisplay").innerHTML=calcOutput;
console.log(calcInput);
   
if(calcInput == '=')
    {
        for(x=0; x<calcArray; x++)
        {
            if(Number.isInteger(myOutput[x])==true)
            {
                myNumbers[x] = myOutput[x];
            }
            else if(myOutput[x] == '.')
            {
                myNumbers[x] = myOutput[x];
            }
            else
            {
                myOperations[x] = myOutput[x];
            }

            if(myNumbers[x] == 'undefined')
            {
                console.log(x);
            }
        }
    }


console.log(myNumbers);
console.log(myOperations);
} 


function empty(myInput)
{
    if(myInput == 'C')
    {
    myOutput.length = 0;
    document.getElementById("myDisplay").innerHTML="";
    document.getElementById("Uitkomst").innerHTML="";
    }
}



