const valor = parseFloat(process.argv[2]);
const origem = process.argv[3];
const destino = process.argv[4];

if (origem === "km" && destino === "milhas") {
  console.log(`${valor} km é igual a ${(valor * 0.621371).toFixed(2)} milhas`);
} else if (origem === "milhas" && destino === "km") {
  console.log(`${valor} milhas é igual a ${(valor / 0.621371).toFixed(2)} km`);
} else if (origem === "celsius" && destino === "fahrenheit") {
  console.log(`${valor} °C é igual a ${(valor * 9/5 + 32).toFixed(2)} °F`);
} else if (origem === "fahrenheit" && destino === "celsius") {
  console.log(`${valor} °F é igual a ${((valor - 32) * 5/9).toFixed(2)} °C`);
} else {
  console.log("Conversão não suportada");
}
