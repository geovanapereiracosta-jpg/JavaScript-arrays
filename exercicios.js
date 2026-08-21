
// ------------------------------------------------------
// Função auxiliar - NÃO precisa mexer aqui
function testar(nomeExercicio, resultado, esperado) {
  const igual = JSON.stringify(resultado) === JSON.stringify(esperado);
  if (igual) {
    console.log(`✅ Correto - ${nomeExercicio}`);
  } else {
    console.log(`❌ Errado - ${nomeExercicio}`);
    console.log(`   Esperado: ${JSON.stringify(esperado)}`);
    console.log(`   Recebido: ${JSON.stringify(resultado)}`);
  }
}
// ------------------------------------------------------

function encontrarRepetidos(array) {
  const vistos = new Set();
  const repetidos = new Set();

  array.forEach(item => {
    if (vistos.has(item)) {
      repetidos.add(item);
    } else {
      vistos.add(item);
    }
  });

  return [...repetidos];
}



function unirSemRepetir(array1, array2) {
  return [...new Set([...array1, ...array2])];
}






function temRepetido(array) {
  const setUnicos = new Set(array);
  return setUnicos.size < array.length;
}