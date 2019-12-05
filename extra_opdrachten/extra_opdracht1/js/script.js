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

    for(i=0; i<calcArray; i++)
    {
        calcOutput += myOutput[i];
    }
document.getElementById("myDisplay").innerHTML=calcOutput;
console.log(calcInput);
    if(calcInput == '=')
    {
        
    }
} 


function empty(myInput)
{
    if(myInput == 'C')
    {
    myOutput.length = 0;
    document.getElementById("myDisplay").innerHTML="";
    }
}



