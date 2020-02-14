

function calculadora(){
let nome = prompt ("Informe o seu nome")
let numero1= prompt("Informe um número");
let numero2= prompt("Informe outro número");
let total = numero1* numero2;
alert(numero1 + "x" + numero2 + "=" + total);
}

function Joguinho(){
    let palpite = prompt("Informe um número de 0 a 10");
    let numeroAlertorio = Math.floor(Math.random() * 10);
    if(palpite == numeroAlertorio){
        alert("Você ganhou")
    }else{
        alert("Você perdeu")
    }

}