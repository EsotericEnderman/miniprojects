let sampleWord = "astronaut";
let pwRegex = /(?=[A-Za-z])(?=\D*\d{2})/g; // Change this line
let result = pwRegex.test(sampleWord);
