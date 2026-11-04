async function minhaFuncao() {
  console.log("A");

  await null;

  console.log("B");
}

console.log("Início");

minhaFuncao();

console.log("Fim");