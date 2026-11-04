for (let i = 0; i<3; i++){
    setTimeout(() => console.log("Número:", i),0);
}
console.log("Loop terminou");
//O let garante o comportamento esperado pois ele cria uma variável "i" de forma individual no escopo e assim o callback consegue se lembrar do prório valor de "i".
//Se utilizássemos o var as repetição de funções compartilhariam a mesma variável "i".