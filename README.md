# Conversor de Unidades CLI

Ferramenta de linha de comando em **Node.js** para converter **distâncias** e **temperaturas**.

## Funcionalidades
- **Distância**:  
  - Quilômetros (**km**) ⇄ Milhas (**milhas**)
- **Temperatura**:  
  - Celsius (**celsius**) ⇄ Fahrenheit (**fahrenheit**)

## Pré-requisitos
- [Node.js](https://nodejs.org/) versão 14 ou superior.

## Como Executar
Abra o terminal na pasta do projeto e rode:

```bash
node conversor.js <valor> <origem> <destino>
```

- `<valor>`: número a ser convertido  
- `<origem>`: unidade de entrada (`km`, `milhas`, `celsius`, `fahrenheit`)  
- `<destino>`: unidade de saída (`km`, `milhas`, `celsius`, `fahrenheit`) 

## Exemplos

```
# Quilômetros para Milhas

node conversor.js 10 km milhas

# Saída: 10 km é igual a 6.21 milhas


# Milhas para Quilômetros

node conversor.js 6.21 milhas km

# Saída: 6.21 milhas é igual a 10.00 km


# Celsius para Fahrenheit

node conversor.js 50 celsius fahrenheit

# Saída: 50 °C é igual a 122.00 °F


# Fahrenheit para Celsius

node conversor.js 122 fahrenheit celsius

# Saída: 122 °F é igual a 50.00 °C

```
## Estrutura do Código

```
const valor = parseFloat(process.argv[2]);
const origem = process.argv[3];
const destino = process.argv[4];

// Lógica de conversão
```

## Tratamento de Erros

Caso a combinação de unidades não seja suportada, o programa exibirá:
```
Conversão não suportada
```








