document.getElementById("rolarD20Pericia").addEventListener("click", function () {
    var periciaSelecionada = document.getElementById("selecaoPericia").value;
    var forca = parseInt(document.getElementById("forca").value) || 0;
    var defesa = parseInt(document.getElementById("defesa").value) || 0;
    var constituicao = parseInt(document.getElementById("constituicao").value) || 0;
    var sorte = parseInt(document.getElementById("sorte").value) || 0;
    var velocidade = parseInt(document.getElementById("velocidade").value) || 0;
    var destreza = parseInt(document.getElementById("destreza").value) || 0;
    var conhecimento = parseInt(document.getElementById("conhecimento").value) || 0;
    var vontade = parseInt(document.getElementById("vontade").value) || 0;
    var fortitude = parseInt(document.getElementById("fortitude").value) || 0;

    var bonus = 0; // Inicializa o bônus com zero

    // Calcula o bônus com base na perícia selecionada
    switch (periciaSelecionada) {
        case "Intuição":
            bonus = (sorte + vontade) / 15;
            break;
        case "Sobrevivência":
            bonus = (constituicao + sorte) / 12;
            break;
        case "Carisma":
            bonus = (conhecimento + sorte) / 10;
            break;
        case "Aprendizado":
            bonus = (conhecimento + fortitude) / 12;
            break;
        case "Arcanismo":
            bonus = (conhecimento + fortitude) / 15;
            break;
        case "Intimidação":
            bonus = (forca + vontade) / 18;
            break;
        case "Natureza":
            bonus = (conhecimento + sorte) / 15;
            break;
        case "Acrobacias":
            bonus = (destreza + velocidade) / 12;
            break;
        case "Inteligência":
            bonus = (conhecimento + vontade) / 18;
            break;
        case "Religião":
            bonus = (conhecimento + vontade) / 18;
            break;
        case "Percepção":
            bonus = ((sorte + vontade) / 15 + vontade) / 12; // Intuição + vontade / 12
            break;
        case "Persuasão":
            bonus = ((conhecimento + sorte) / 10 + sorte) / 15; // Carisma + sorte / 15
            break;
        case "Furtividade":
            bonus = ((destreza + velocidade) / 12 + velocidade + destreza) / 12;
            break;
        case "Iniciativa":
            bonus = (sorte + velocidade) / 14;
            break;
        case "Adestrar":
            bonus = (destreza + (conhecimento + fortitude) / 12) / 8; // Destreza + Aprendizado / 8
            break;
    }

    // Rola o D20 e adiciona o bônus calculado
    var resultadoD20 = Math.floor(Math.random() * 20) + 1;
    var resultadoFinal = resultadoD20 + bonus;

    document.getElementById("resultado").innerText = "D20: " + resultadoD20 + " + Bônus: " + bonus.toFixed(2) + " = Total: " + resultadoFinal.toFixed(2);
    // Corrigido para usar console.log
    console.log("D20: " + resultadoD20 + " + Bônus: " + bonus.toFixed(2) + " = Total: " + resultadoFinal.toFixed(2));
});
