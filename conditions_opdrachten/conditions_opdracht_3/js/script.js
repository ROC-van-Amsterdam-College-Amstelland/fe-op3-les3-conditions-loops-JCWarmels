//javascript code

function mysaldo()
{

var saldo = 520;

    if (saldo <= 499)
        {
            document.getElementById("melding").innerHTML="U heeft geen Salaris ontvangen.";
        }
    else if (saldo == 500)
        { 
            document.getElementById("melding-1").innerHTML="U heeft Salaris ontvangen.";
        }
    else 
        {
            document.getElementById("melding-2").innerHTML="U heeft Salaris en een Bonus ontvangen.";
        }
}