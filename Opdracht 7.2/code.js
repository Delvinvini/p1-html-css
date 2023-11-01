const budget = 100;
 
document.getElementById("checkButton").addEventListener("click", function() {
    const productPrijs = parseFloat(prompt("Heeft u voldoende saldo?"));
 
    if (isNaN(productPrijs)) {
        alert("Ongeldige invoer. Voer een getal in voor de prijs.");
    } else {
        if (productPrijs <= budget) {
            alert("U heeft te weinig saldo om dit product te kopen!");
        } else {
            alert("U heeft voldoende saldo");
        }
 
    }
});
