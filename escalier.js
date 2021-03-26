var readline = require("readline-sync");
var saisir = readline.question("saisir un argument : ");
var argument = saisir;
var espace  = argument;
var diese = "#";
var espace = " ";

for(var i = 0 ; i < saisir ; i++){
    console.log(espace.repeat(argument - i) + diese.repeat(i+1));
}