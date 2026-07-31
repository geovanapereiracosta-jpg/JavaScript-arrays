const notas = [10, 6, 3];

notas.pop();

notas.push(10);

const media = (notas[0] + notas[1] + notas[2]) / notas.length;

console.log("Notas atuais:", notas); 
console.log("Média final:", media); 