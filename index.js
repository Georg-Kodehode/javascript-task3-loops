// LOOPS

const wordArr = [
  " deTTe",
  "er  ",
  " tekST ",
  "som",
  "må",
  "rydDES   ",
  "Opp",
  "   i   ",
];

const cleanedArr = [];
let sentence = "";
/*
   
  - Skriv en funksjon som heter wordCleaner, som tar i mot en string, og returnerer stringen med whitespace
  fjernet fra begynnelse og slutten, og alt gjort om til små bokstaver.
   
  - Skriv en loop som looper gjennom wordArr og kjører wordCleaner på hvert ord, og pusher
  dette ordet inn i cleanedArr
   
  - Tilslutt, kombiner cleanedArr sammen til en string, og konsoll logg denne.
   
  Konsoll loggen skal se sånn ut:
   
  "dette er tekst som må ryddes opp i"
   
  Lykke til!
   
  Spør meg på Discord hvis du står fast :)
   
  */

// Returns the input string with whitespace removed from the beginning and the end, and the string to lowercase
function wordCleaner(word) {
  return word.trim().toLowerCase();
}

// Loops through the wordArr array, runs the wordCleaner function on each word, and finally pushes each word to the cleanedArr array
for (let i = 0; i < wordArr.length; i++) {
  cleanedArr.push(wordCleaner(wordArr[i]));
}

// Loops through each word pushed to the cleanedArr array, and appends them to the sentence variable
for (word of cleanedArr) {
  sentence += word + " ";
}

//logs out the sentence variable with the added whitespace removed
console.log(sentence.trim());
