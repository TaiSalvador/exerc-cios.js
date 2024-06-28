// Exercicio 1
let nome = "João"
console.log(nome)

// Exercicio 2
let a = 5 
let b = 10
console.log(a+b)

//Exerxixio 3

let  primeironome = "Josefa"
let ultimonome = "Silva"
console.log(primeironome, ultimonome)

// Exercicio 4

let pessoa = {
    nome: "Tainá",
    idade: "18",
    endereco: "João de nunca",
    email: "tainasalvador71@gmail.com"
}
console.log(pessoa)

// Exercício 4.2

let fruta = ["banana", "maça", "laranja"]
fruta[3]='uva'
fruta.push('tangerina')
console.log(fruta)

// Exercício 5

let número = [1,2,3,4,5]
console.log(número[0], número[4])

// Exercício 6

let cores = ["vermelho", "verde", "azul"]
for (let i = 0; i < 3; i++){
    console.log(cores[i])
}

// Exercício 7

let idade = "20"

if (idade < 18){
    console.log ("Menor de idade")
} else {
    console.log ("Maior de idade")
}

// Exercício 8

let nota = "10"

if (nota >= 8) {
    console.log ("Aprovado")
} else if (nota >= 5) {
    console.log ("Recuperação")
}else {
    console.log("Reprovado")
}

// Exercício 9

let diaDaSemana = "2"
switch (diaDaSemana) {
    case '1': {
        console.log ('Domingo')
        break
    }case '2': {
        console.log ('Segunda')
        break
    }case '3': {
        console.log ('Terça')
        break
    }case '4': {
        console.log ('Quarta')
        break
    }case '5': {
        console.log ('Quinta')
        break
    }case '6': {
        console.log ('Sexta')
        break
    }case '7': {
        console.log ("Sabádo")
        break
    }

}

// Exercício 10

for (i = 1; i <= 10; i++){
    console.log(i)
}

// Execício 11

let contador = 1

while (contador <= 5){
    console.log(contador)
    contador++
}

// Exercício 12

let pares = 0 

while (pares <= 30){
    console.log(pares)
    pares = pares + 2
}

// Exercício 13

let Valores = [10,20,30,40,50], soma = 0
for (i = 0; i < 5; i++){
    soma = soma + Valores[i]
    console.log(soma)
}

// Exercício 14

let numero = [27,38,49,52,73], maior = 0
for(i = 0; i < numero.length; i++){
    if (maior < numero[i]){
        maior = numero[i]
    }
}
console.log(maior)

// Exercício 15

let numeros = [27,38,49,52,73], menor = 90
for(i = 0; i < numero.length; i++){
    if (menor > numero[i]){
        menor = numero[i]
    }
}
console.log(menor);

// Exercício 16

let n = 5, resultado
for (i = 1; i < n; i++){
resultado *= i;
}
console.log(resultado)
