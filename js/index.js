var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
    greeting = 'Boa noite!';
}else if (hourNow > 12){
    greeting = 'Boa tarde!';
}else if (hourNow > 0){
    greeting = 'Bom Dia!';
}else {
    greeting = 'Seja bem-vindo!';
}
var elgreeting = document.getElementById('greeting');
elgreeting.textContent = greeting;
