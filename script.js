let numMot = 1
let longueur = 0
let voyelle = 0

const algo = (mot) => {
    if (mot === " " || mot === "") {
        numMot = 0
    } else {
        for (let i = 0; i < mot.length; i++) {
            if (mot[i] !== " ") {
                longueur += 1
            }
            if (mot[i] === " ") {
                numMot += 1
            }
            if (mot[i] == "a" || mot[i] == "e" || mot[i] == "i" || mot[i] == "o" || mot[i] == "u" || mot[i] == "y") {
                voyelle += 1
            }
        }
    }
    return "le nombre de mot est: " + numMot + " , le longueur: " + longueur + " , le nombre de voyelle : " + voyelle
}

console.log(algo("Bonjour"))