// Função tradicional
const soma = (a, b) => a + b;
function soma(a, b) {
    a + b;
}
const soma3 = (a, b) => {
    return a + b;
}
console.log(soma(3, 4));
console.log(soma(3, 4));
console.log(soma(3, 4));

/*
// Arrow Functions
const dobro = (n) => n * 2;
console.log(dobro(4));

const digaOla = () => console.log("Olá!");
digaOla();

const sayHello = (_) => console.log("Hello!");
sayHello();

const subtracao = (a, b) => {
    const resultado = a - b;
    return resultado;
}
console.log(subtracao(10, 8));
*/

// Spread Operator
const meuArray = [1, 2, 3];
console.log(meuArray);

console.log(...meuArray);

console.log([...meuArray, 4, 5, 6]);
console.log([meuArray, 4, 5, 6]);

// JSON - é tipo um dicionário
const data = {
    firstName: "Samantha",
    lastName: "Faruolo",
};
console.log({...data, email: "email@email.com"})

J - Java
S - Script
O - Object
N - Notation

// Destructuring
const meuArray2 = ["azul", "vermelho", "verde"];
const [cor1] = meuArray2;

console.log(cor1);

const meuObjeto = { a: 1, x: 10, y: 20, z: 30 };
const { x } = meuObjeto;

console.log(x);
console.log(y);
console.log(aleatorio);

// Classes
class Pessoa {
  // Constructor
  constructor() {
    this.nome = "";
    this.email = "";
  }
}

const pessoa = new Pessoa();
pessoa.nome = "João";
console.log(pessoa.nome);

// Módulos
import { MinhaClasse } from "./meuModulo.js";

const a = new MinhaClasse();
a.show();
