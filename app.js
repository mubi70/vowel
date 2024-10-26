function checkWord() {
    var input = document.getElementById("userInput").value.toLowerCase();
    var vowels = ["a", "e", "i", "o", "u"];
    let hasVowel = false;

    for (let char of input) {
        if (vowels.includes(char)) {
            hasVowel = true;
            break;
        }
    }

    if (hasVowel) {
        document.getElementById("vowels").textContent += input + " ";
    } else {
        document.getElementById("consonants").textContent += input + " ";
    }

    document.getElementById("userInput").value = ""; 
}