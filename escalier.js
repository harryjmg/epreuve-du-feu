var readline = require("readline-sync");
var nb_etages = readline.question("Saisir un argument : ");

for(var i = 0 ; i < nb_etages ; i++){
    console.log(" ".repeat(argument - i) + "#".repeat(i+1));
}
