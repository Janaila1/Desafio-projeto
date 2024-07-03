let nome = "Vekna"
let quantidadeXP = 8000

switch (quantidadeXP){
    case quantidadeXP < 1000:
    console.log("o Herói de nome " + (nome)+ " está no nível de " + "Ferro")
    break;
    case quantidadeXP = 1001 && 2000: 
    console.log("o Herói de nome " + (nome) + " está no nível de " + "Bronze")
    break;
    case quantidadeXP = 2001 && 5000:
    console.log("o Herói de nome " + (nome) + " está no nível de " + "Prata")
    break;
    case quantidadeXP = 5001 && 7000:
    console.log("o Herói de nome " + (nome) + " está no nível de " + "Ouro")
    break;
    case quantidadeXP = 7001 && 8000:
    console.log("o Herói de nome " +(nome) + " está no nível de " + "Platina")
    break;
    case quantidadeXP = 8001 && 9000:
    console.log("o Herói de nome " + (nome) + " está no nível de " + "Ascendente")
    break;
    case quantidadeXP = 9001 && 10000:
    console.log("o Herói de nome " + (nome) + " está no nível de " + "imortal")
    break;
    case quantidadeXP >= 10001:
    console.log("o Herói de nome " + (nome) + " está no nível de " + "Radiante")

}
