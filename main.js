//Aula1: Introdução ao JS 
//Criado esta pasta para separar o JS do HTML e lá na pasta index.html está linkado o que é feito aqui por:<script type="text/javascript" scr ="js/main.js"</script>
//As variáveis são detectadas por tipo, exemplo: quando colocados "" é do tipo string
var nome = "Karina Fukuda";
//var numero inteiro 
var idade = 31
var idade2 = 10;

//operações matemáticas simples:
var soma = (idade + idade2);
console.log(soma)
//imprime 41

var subtracao =(idade - idade2);
console.log(subtracao);
//imprime 21

var multiplicacao = (idade * idade2);
console.log(multiplicacao);
//imprime 310

var divisao = (idade / idade2);
console.log(divisao);
//imprime 3.1

//Abaixo exibirá pop-up com a mensagem entre "" + concatenado a variável nome
alert("Bem-vinda" + " " + nome);
//Imprime: Bem-vinda Karina Fukuda (em pop-up)

var frase = "Japão é o melhor time do mundo"
console.log(frase.replace("Japão!" , "Brasil"));
//Visualizará no console a frase e a substituição da String 'Japão' por 'Brasil', também pode ser feito no Alert
//Imprime: Brasil é o melhor time do mundo

console.log(frase.toUpperCase());
//Nesse comando as letras da variável frase ficarão em maiúsculo

console.log(frase.toLowerCase());
//Neste comando as letras da varoável frase ficarão em minúsculo




//Aula 2: Array e Dicionário
//Criando uma lista

var lista =[ "maçã" , "banana" , "pêra"];
console.log(lista);
//visualiza a lista no console, os itens ficam separados por vírgula
console.log(lista[0]);
//imprime o que está na posição do index [0] no caso a primeira que é 'maçã'

//precisa agregar mais um dado na lista, use o push:
lista.push("uva");
console.log(lista);
//imprime: Array[ "maçã" , "banana" , "pêra", "uva"];

//precisa retirar o último dado da lista, use o pop:
lista.pop();
console.log(lista);

//para saber o tamanho da lista, ou seja, quantidade de objetos, usa-se o Length
console.log(lista.length);
//imprime: 3 (pois 1 item foi retirado no pop)

//para trazer a informação de forma reversa, do último para o primeiro, usa-se o Reverse
console.log(lista.reverse());

/*alterar para string, usa-se .toString:
console.log(lista.toString());*/

//trocar a separação dos itens de vírgula por traço, pode ser por outro símbolo ou por nenhum
console.log(lista.join(" - "));
//imprime: pêra - banana - maçã

//Criando Dicionário

var fruta ={ tipo: "maçã" , cor: "vermelha"}
console.log(fruta.tipo);
//imprime: maçã

//Agora uma lista com dicionário
var frutas =[{ tipo: "maçã" , cor: "vermelha"} , {tipo: "uva" , cor: "verde"}]
console.log(frutas[1].tipo);
//imprime: uva , pois está na posição 1 e como pedido o 'tipo'




//Aula 3: Condicionais, Laços de Repetição e Date

var suaIdade = prompt("Qual a sua idade?");
if (suaIdade >= 18){
    console.log("Você é maior de idade!");
}else{
    console.log("Você é menor de idade!");

}

//no comando prompt é criada uma interação com o usuário através de uma janela no browser que salva a informação digitada na variável, neste caso suaIdade
//a condicional IF pediu que se a idade digitada for maior ou igual a 18, então imprime "Você é maior de idade!" senão(else) imprime "Você é menor de idade!"

var contador = 0
while(contador <=5){
    console.log(contador);
    contador = contador + 1;
}
//para somar mais 1 pode usar o ++ 
/*imprime:
0
1
2
3
4
5
*/

var contagem = 0
for (contagem =0 ; contagem <=3 ; contagem++){
    console.log(contagem);
}
/*imprime:
0
1
2
3
*/

//Data - Date

var today = new Date();
alert(today);
//imprime dados da data atual: hora + dia da semana + dia + mês + ano+ fuso horário

var today = new Date();
alert(today.getDate());
//imprime somente o dia 

var today = new Date();
alert(today.getMonth()+1);
//imprime somente o mês, precisa incluir o +1 porque inicia contando do zero e fica errado o mês

var today = new Date();
alert(today.getMinutes());
//imprime somente os minutos

var today = new Date();
alert(today.getDay());
//imprime somente o dia

var today = new Date();
alert(today.getHours());
//imprime somente a hora 

//Desenvolva páginas web com JavaScript
//Aula:1  - exemplo função

function somar(n1, n2){
    return n1 + n2;
}
console.log("O resultado da soma da função é  " + somar(2, 3))


//variável 'validar' fora da função é a variável global
var validar = 0;
function validarIdade(idades){
       if (idades >= 18){
        validar = true
    }else{
        validar= false
    }
    return validar;
}
var idades = prompt("Digite sua idade");
validarIdade(idades);
console.log(validar);*/

//Aula 2 :  Manipulando elementos da página

//função para simular mensagem após clique no botão

function clique (){
    alert("Obrigada por clicar!");
}

//Mesma função para trazer uma resposta impressa do html para o js
//innerHTML traz/leva texto para o html para o JS

function clique (){
    document.getElementById("agradecimento").innerHTML = "<b>Clique aqui para ir para o site da DIO</b>";

}

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");
    //abre em outra janela o site
    //ou podemos usar: window.location.href="https://web.digitalinnovation.one/home"; (abre na mesma janela)
}

function moverMouse(){
    document.getElementById("mousemove").innerHTML = "Você acabou de alterar o texto que estava aqui";
}

function trocar(){
    //elemento.innerHTML = "Passe o mouse aqui";
    //altera o texto ao passar o mouse em cima
    document.getElementById("mousemove").innerHTML = "Passe o mouse novamente";

}

function voltar(){
    document.getElementById("mousemove").innerHTML = "Você acabou de alterar o texto que estava aqui";
    //elemento.innerHTML = "Você alterou o texto daqui";
}

function load(){
//para abrir um pop-up com uma mensagem antes da página    
    alert("Página carregada");
}

function funcaoChange(elemento){
//para criar elementos de escolha em um box com valores   
    console.log(elemento.value);

}

//FIM