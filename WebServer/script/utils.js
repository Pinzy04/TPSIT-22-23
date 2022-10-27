function somma(n1,n2)
  {
    sum = n1 + n2;
    return n1 + " + " + n2 + " = " + sum;
  } 

function randparidispari()
  {
    rand = Math.floor(Math.random() * 99 + 1);
    if(rand%2==0)
      {
        return "Il numero " + rand + " e' pari";
      }
    else
      {
        return "Il numero " + rand + " e' dispari";
      }
    
  }

function stringa(str)
  {
    var giorno = new Date();
    return "Stringa: " + str + /*"\nLunghezza: " + str.length +*/ "\nData: " + giorno;
  }

const {readFile, writeFile,appendFile} = require('fs');

module.exports={
  somma:somma,
  randpd:randparidispari,
  stringa:stringa
}
