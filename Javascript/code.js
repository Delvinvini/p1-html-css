function kleurEnTekstAanpassen()
{
    document.getElementById("kop1").style.color = "red";
    document.getElementById("kop1").innerHTML = "i have changed";
}

function Reset()
{
    document.getElementById("kop1").style.color = "black";
    document.getElementById("kop1").innerHTML = "Welkom!";
}

/* 6.4 oefening 3 */
function Calculate(getal1, getal2)
{
antwoord = getal1 + getal2;
console.log("het antwoord van de soms is: ");
console.log(antwoord);
}

/* 6.4 oefening 2 */
function keer5(getal1)
{
antwoord = getal1 * 5;
console.log("Het antwoord van de som is: ");
console.log(antwoord);
}

/* 6.4 oefening 3 */
function calculateMinutes(seconden)
{
antwoord = seconden / 60;
console.log("Het antwoord van de som is: ");
console.log(antwoord);
}