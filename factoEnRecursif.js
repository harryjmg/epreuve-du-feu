// Créer un script qui calcul la factoriel du nombre passé en argument.
// Ex. d’appel du script :
// $> ./factoriel 3
// 6
  

var readline = require("readline-sync");
var factorielle = readline.questionInt("Quelle factorielle voulez-vous : ");
var resultat = 1 ;

for(var i = 1 ; i <= factorielle ; i++){
        resultat = resultat * i ;
    console.log(resultat );
}
    
    
    
//         if (n<=1) {
//         return 1
//     } else 
//             {return n*resultat(n-1)}
//     }

    
//     function fact(nbr){
//         var i, nbr, f = 1;
//         for(i = 1; i <= nbr; i++)  
//         {
//           f = f * i;   // ou f *= i;
//         }  
//         return f;
//       }
//       console.log(factorielle  * fact());