function getBotResponse(input) {
    //jogo pedra papel e tesoura
    if (input == "pedra") {
        return "papel";
    } else if (input == "papel") {
        return "tesoura";
    } else if (input == "tesoura") {
        return "pedra";
    }

    // Respostas simples
    if (input == "Eai") {
        return "Salve!";
    } else if (input == "tchau") {
        return "Talk to you later!";
    }
	else if (input == "Vc é bonito?"){
		return "Maravilhoso :)";
	}
	else {
        return "Try asking something else!";
    }

   
}