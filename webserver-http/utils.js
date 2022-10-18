function isPrime(n)
  {
    bPrime = true;
    fat = 2;
    while(fat <= (n/2))
    {
      if(n%fat==0)
      {
        bPrime=false;
      }
      fat++;
    }
    return bPrime;
  }


function primi()
  {
    str = '';
    for(i=0; i<101; i++)
      {
        if(isPrime(i))
          {
            str = str + i + '\n';
          }
      }
    writeFile('./primi.txt', str, (error)=>
      {
        if (error)
          { 
            console.log(error);
            return 
          }
        return str;
      })
    return str;
  }

function pari()
  {
    str = '';
    for(i=0; i<101; i++)
      {
        if(i%2 == 0)
          {
            str = str + i + '\n';
          }
      }
    writeFile('./pari.txt', str, (error)=>
      {
        if (error)
          { 
            console.log(error);
            return
          }
        return str;
      })
    return str;
  }

function dispari()
  {
    str = '';
    for(i=0; i<101; i++)
      {
        if(i%2 != 0)
          {
            str = str + i + '\n';
          }
      }
    writeFile('./dispari.txt', str, (error)=>
      {
        if (error)
          { 
            console.log(error);
            return
          }
        return str;
      })
    return str;
  }

function saluta(nick) {
  return 'Ciao ' + nick;
  console.log("Saluta" + nick);
}

const {readFile, writeFile,appendFile} = require('fs');

module.exports={
  primi:primi,
  dispari:dispari,
  pari:pari,
  saluta:saluta
}
