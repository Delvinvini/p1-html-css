<<<<<<< HEAD
// Oefening 1
document.getElementById('oefening1').addEventListener('click', function () {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const sum = num1 + num2;
    console.log('Optelsom: ' + sum);
});
 
// Oefening 2
document.getElementById('oefening2').addEventListener('click', function () {
    const num = Math.floor(Math.random() * 100);
    const result = num * 5;
    console.log('Vermenigvuldigd met 5: ' + result);
});
 
// Oefening 3
document.getElementById('oefening3').addEventListener('click', function () {
    const seconds = Math.floor(Math.random() * 3600); // Willekeurige waarde tussen 0 en 3600 seconden
    const minutes = seconds / 60;
    console.log('Minuten: ' + minutes);
=======
// Oefening 1
document.getElementById('oefening1').addEventListener('click', function () {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const sum = num1 + num2;
    console.log('Optelsom: ' + sum);
});
 
// Oefening 2
document.getElementById('oefening2').addEventListener('click', function () {
    const num = Math.floor(Math.random() * 100);
    const result = num * 5;
    console.log('Vermenigvuldigd met 5: ' + result);
});
 
// Oefening 3
document.getElementById('oefening3').addEventListener('click', function () {
    const seconds = Math.floor(Math.random() * 3600); // Willekeurige waarde tussen 0 en 3600 seconden
    const minutes = seconds / 60;
    console.log('Minuten: ' + minutes);
>>>>>>> 7b45d55e30166fe46102df174f2e6f4cae561dfd
});