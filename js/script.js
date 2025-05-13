/* 1º Operadores de comparação
   
   > maior que
   >= maior que ou igual a 
   < menor que
   <= menor que ou igual a 
   == igualdade (valor) ******** Nao recomendado usar pois pode comparar uma string com um number
   === igualdade estrita (valor e tipo)
   != diferente (valor) ******** nao recomendado usar pois pode comparar uma string com um number
   !== diferente estrito (valor e tipo)

*/

/* 2º Operadores Lógicos
   && -> AND
   || -> OR
   !  -> NOT (inverte o valor da expressao 'se estiver true, passa a ser false e visse versa')

*/

/* 3º if else, if e else

*/

/* 
Entre 0 - 11 - Bom dia
Entre 12 - 17 - Boa Tarde
Entre 18 - 23 - Boa noite

*/
/* const hora = 50;

if (hora >= 0 && hora <= 11) {
  console.log("Bom dia");
} else if (hora >= 12 && hora <= 17) {
  console.log("Boa tarde");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite");
} else {
  console.log("Oi");
}
 */

/* const tenhoGrana = false;

if (tenhoGrana) {
  console.log("Vou comprar coisas");
} else {
  console.log("Não vou comprar nada");
}
 */
/* const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5.");
} else {
  console.log("O número não está entre 0 e 5.");
} */

/* const numero = 10;

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8.");
} else if (numero >= 9 && numero <= 11) {
  console.log("O número está entre 9 e 11.");
} else {
  console.log("O número não está entre 0 e 11.");
} */

// 4º OPERAÇÃO TERNARIA  ' ? : '
//(condicao) ? 'valor para verdadeiro' : 'valor para falso';

//const pontuacaoUsuario = 999;

//isso
//const nivelUsuario =
//pontuacaoUsuario >= 1000 ? "Usuario VIP" : "Usuario normal";

//é igual a isso
/* if( pontuacaoUsuario >= 1000) {
  console.log('usuario vip');
} else {
  console.log('Usuario normal');
} 
  */

//aqui faz uma fallback para caso o usuario nao tenha selecionado uma cor, ele informa que a cor padrao é preta.
//const corUsuario = "Pink";
//const corPadrao = corUsuario || "Preta";

//5º objeto Date

//const data = new Date(0); marco zero = 01/01/1970  Timestamp unix ou epoca unix
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia); //exemplo de calculo para selecionar uma data especifica
//const data = new Date(2019, 3); // ano, mes, dia, hora, mes, segundos, milesimos de segundos
//const data = new Date();
//const data = new Date('2019-04-20 20:20:59');
//const data = new Date(1743604348768);
//console.log("Dia", data.getDate()); //pega o número do dia
//console.log("Mês", data.getMonth() + 1); //O mês começa do zero
//console.log("Ano", data.getFullYear()); //pega o ano
//console.log("Hora", data.getHours()); //pega as horas
//console.log("Min", data.getMinutes()); //pega os minutos
//console.log("Seg", data.getSeconds()); //pega os segundos
//console.log("ms", data.getMilliseconds()); //pega os millisegundos
//console.log("Dia semana", data.getDay()); //0 = domingo, 6 = Sábado
//console.log(data.toString());
//console.log(Date.now());pega a data atual em millisegundos

//A funçao abaixo formata a data para o formato "dia/mes/ano hora:minutos:segundos"
/* function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataPortugal = formataData(data);
console.log(dataPortugal); */

//6º switch/case
/* function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;
  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
    default:
      diaSemanaTexto = "";
      return diaSemanaTexto;
  }
}

const data = new Date("1987-04-19 00:00:00");
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto); */
/* let diaSemanaTexto; */

/* switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda";
    break;
  case 2:
    diaSemanaTexto = "Terça";
    break;
  case 3:
    diaSemanaTexto = "Quarta";
    break;
  case 4:
    diaSemanaTexto = "Quinta";
    break;
  case 5:
    diaSemanaTexto = "Sexta";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;
  default:
    diaSemanaTexto = "";
    break;
} */

/* if (diaSemana === 0) {
  diaSemanaTexto = "Domingo";
} else if (diaSemana === 1) {
  diaSemanaTexto = "Segunda";
} else if (diaSemana === 2) {
  diaSemanaTexto = "Terça";
} else if (diaSemana === 3) {
  diaSemanaTexto = "Quarta";
} else if (diaSemana === 4) {
  diaSemanaTexto = "Quinta";
} else if (diaSemana === 5) {
  diaSemanaTexto = "Sexta";
} else if (diaSemana === 6) {
  diaSemanaTexto = "Sabado";
} else {
  diaSemanaTexto = "";
} */

/* console.log(diaSemana, diaSemanaTexto); */

//6º atribuiçao via desestruturaçao

//exemplo 1
/* let a = "A"; //B
let b = "B"; //C
let c = "C"; //A

const letras = [b, c, a];

[a, b, c] = letras;

console.log(a, b, c); */

//exemplo 2
//               0  1  2  3  4  5  6  7  8
//const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900];
/* const [primeiroNumero, segundoNumero, terceiroNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, terceiroNumero);
 */
/* const [um, , tres, , cinco] = numeros; //para pular os valores, precisa deixar espaços em branco
console.log(um, tres, cinco); */

//exemplo 3

//...rest, ...spread
//                       0          1          2
//                    0  1  2    0  1  2    0  1  2
/* const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
console.log(numeros[1][2]);
 */
/* const numeros = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//const [, [, , seis]] = numeros;
//console.log(seis);
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]); */

//7º atribuicao via desestruturacao para objetos

//exemplo 1
/* const pessoa = {
  nome: "luiz",
  sobrenome: "miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};
//atribuicao via desestruturacao pq está passando um objeto e diz "extrai" desse objeto essa chave "nome" e acaba criando uma variavel com esse nome também que no final é chamado pelo console.log(nome);
//podemos dar um nome a chave e também podemos setar um valor padrao ex:
// const { nome: n, sobrenome, idade } = pessoa; //informei que a chave nome vai passar a ser 'n'
//const { nome = 'Nao existe nome', sobrenome, idade } = pessoa; //informei que caso a chave 'nome' nao exista, ela passa a ser o valor especificado
const { nome, sobrenome, idade } = pessoa;
console.log(nome, sobrenome, idade); */

//exemplo 2
/* const pessoa = {
  nome: "luiz",
  sobrenome: "miranda",
  idade: 30,
  endereco: {
    rua: "Av Brasil",
    numero: 320,
  },
};

const {
  endereco: { rua: r, numero },
  endereco,
} = pessoa;
console.log(r, numero, endereco); */

//8º FOR - Estrutura de repetiçao 'for (let i = 0; i < frutas.length; i++)'
//exemplo 1                                      1                      2                            3
//para a estrutura precisamos criar uma variavel de controle  -> criar uma condiçao -> incrementar ou decrementar a variavel de controle
//i = index (normalmente utilizado com for)
// for (let i = 0; i <= 500; i += 10) { pula de 10 em 10
/* for (let i = 0; i <= 500; i++) {
  console.log(`Linha ${i}`);
} */

//exemplo  verifica se o numero é par ou ímpar
/* for (let i = 0; i <= 10; i++) {
  //const par = i % 2 === 0;
  const par = i % 2 === 0 ? "par" : "ímpar";
  console.log(i, par);
} */

// exemplo 3 percorrendo o array
/* const frutas = ["maça", "pera", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
 */

// 9º FOR IN  retorna o indice 'for (let i in pessoas)'

// exemplo 1
//  const frutas = ["Pera", "Maça", "Uva"];

// for (let i in frutas) {
//   console.log(frutas[i]);
// }

// exemplo 2

// const pessoas = {
//   nome: "Luiz",
//   sobrenome: "Otavio",
//   idade: 30,
// };

// for (let i in pessoas) {
//   console.log(i, pessoas[i]);
// }

//  10º FOR OF retorna o valor

// exemplo 1
// const nome = "Luiz Otavio";

// for (let valor of nome) {
//   console.log(valor);
// }

// exemplo 2 com array
// const nome = ["Luiz", "Otavio", "Miranda"];

// for (let valor of nome) {
//   console.log(valor);
// }

// 11º while e Do while
// Diferença o while checa a condiçao e depois executa o laço
// Do while executa e depois chega a condiçao

// exemplo 1
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// Exemplo 2
// function random(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.floor(r);
// }
// const min = 1;
// const max = 50;
// let rand = random(min, max);

// while (rand !== 10) {
//   rand = random(min, max);
//   console.log(rand);
// }

// exemplo 3 'Do While'
// function random(min, max) {
//   const r = Math.random() * (max - min) + min;
//   return Math.floor(r);
// }
// const min = 1;
// const max = 50;
// let rand = random(min, max);
// do {
//   rand = random(min, max);
//   console.log(rand);
// } while (rand !== 10);

// 12º BREAK E CONTINUE
// continue continua para a proxima iteração
// break sai do laço

// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let numero of numeros) {
//   if (numero === 2) {
//     console.log("Pulei o numero 2");
//     continue;
//   }
//   if (numero === 5) {
//     console.log("Pulei o numero 5");
//     continue;
//   }
//   console.log(numero);
// }

//For in  - ex break e continue
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i in numeros) {
//   const numero = numeros[i];

//   if (numero === 2) {
//     console.log("Pulei o numero 2");
//     continue;
//   }
//   if (numero === 5) {
//     console.log("Pulei o numero 5");
//     continue;
//   }
//   console.log(numero);
// }

// FOR classico  - ex break e continue
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numeros.length; i++) {
//   const numero = numeros[i];

//   if (numero === 2) {
//     console.log("Pulei o numero 2");
//     continue;
//   }
//   if (numero === 5) {
//     console.log("Pulei o numero 5");
//     continue;
//   }
//   console.log(numero);
// }

// WHILE  - ex break e continue
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let i = 0;
// while (i < numeros.length) {
//   const numero = numeros[i];

//   if (numero === 2) {
//     console.log("Pulei o numero 2");
//     i++;
//     continue;
//   }

//   console.log(numero);

//   if (numero === 5) {
//     console.log("encontrei o numero 5");
//     i++;
//     break;
//   }
//   i++;
// }

//  Do while - ex break e continue
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let i = 0;
// do {
//   const numero = numeros[i];

//   if (numero === 2) {
//     console.log("Pulei o numero 2");
//     i++;
//     continue;
//   }

//   console.log(numero);

//   if (numero === 5) {
//     console.log("encontrei o numero 5");
//     i++;
//     break;
//   }
//   i++;
// } while (i < numeros.length)

//  /////////////////////////////////////////////////////////////////////////////////////////////

// ex logica de programaçao 1
// retornar o numero maior

// ex 1
// function maxNumber(x, y) {
//   if (x > y) {
//     return x;
//   } else {
//     return y;
//   }
// }
// console.log(maxNumber(25, 16));

// ex 2 - como a funçao só tem 2 operadores, podemos tirar o else
// function maxNumber(x, y) {
//   if (x > y) {
//     return x;
//    }
//  return y;
// }
// console.log(maxNumber(25, 16));

// Melhoria 1
// function maxNumber(x, y){
//   if (x > y) return x;
//   return y;

// }
// console.log(maxNumber(25, 16));

// melhoria 2
// function maxNumber(x, y) {
//   return x > y ? x : y;
// }

// console.log(maxNumber(10, 12));

// melhoria 3 arrow function
// const max2 = (x, y) => {
//   return x > y ? x : y;
// };
// console.log(max2(20, 25));

// melhoria 4
// const max2 = (x, y) => (x > y ? x : y);
// console.log(max2(26, 10));

// Ex - 2 Logica programacao

// ex 1 com IF e ELSE

// function ePaisagem(largura, altura) {
//   if (largura > altura) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(ePaisagem(1920, 1080));

// ex 2 Com operador lógico

// function ePaisagem(largura, altura) {
//   return largura > altura ? true : false;
// }
// console.log(ePaisagem(1920, 1080));

//como estamos checando uma coisa (a condiçao já retorna true ou false), ele vai retornar 'true' or 'false', entao nao precisa do restante do operador lógico

// function ePaisagem(largura, altura) {
//   return largura > altura;
// }
// console.log(ePaisagem(1920, 1920));

// ex 3 ARROW function

// const ePaisagem = (largura, altura) => largura > altura;
// console.log(ePaisagem(1020, 1820));

// Ex 3 Fizz e buzz

// const eDivisivel = (x) => {
//   if (typeof x !== "number") return x;
//   if (x % 3 === 0 && x % 5 === 0) return "FizzBuzz";
//   if (x % 3 === 0) return "Fizz";
//   if (x % 5 === 0) return "Buzz";
//   return x;
// };
// console.log("a", eDivisivel("a"));

// for (let i = 0; i < 100; i++) {
//   console.log(i, eDivisivel(i));
// }

//13º Tratando erros (Try, catch, throw)

//ex 1
/* 
function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x ou y precisam ser números.");
  }
  return x + y;
}

try {
  console.log(soma(1, 4));
  console.log(soma("1", 2));
} catch (error) {
  console.log(error);
}
 */

//Ex 2

/* try {
  console.log(a);
  console.log("Abri um arquivo");
  console.log("Manipulei o arquivo e gerou erro");
  console.log("Fechei o arquivo");
  try {
    console.log(b);
  } catch (e) {
    console.log("deu erro");
  } finally {
    console.log("Também sou finally.");
  }
} catch (e) {
  console.log("Tratando o erro");
} finally {
  //executa sempre sempre
  console.log("FINALLY: Eu sempre sou executado");
} */

// EX 3

/* function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }
  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-PT", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try { //diz faça isso
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora(11);
  console.log(hora);
} catch (e) { //pega o erro
  //tratar erro
  //console.log(e);
} finally { //isto sempre executa, então pode ser utilizado para sair do erro (soluçao || redirecionamento)
  console.log("Tenha um bom dia.");
} */

//setTimeout and setInterval

/* function mostraHora() {
  let data = new Date();
  return data.toLocaleTimeString("pt-PT", {
    hour12: false,
  });
} */

//ex1
/* function funcaoDoInterval() {
  console.log(mostraHora());
}
setInterval(funcaoDoInterval, 1000); */

//ex2
/* setInterval(function () {
  console.log(mostraHora());
}, 1000);
 */

/* const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 4000);

setTimeout(function () {
  console.log("Olá mundo!");
}, 5000);
 */
