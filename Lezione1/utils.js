function Saluta(nome)
  {
    console.log("Ciao " + nome)
  }

function Inverti(str)
  {
    let s=str.split("").reverse().join("");
    console.log(s);
  }

function successivo(n)
  { //da n restituisci il successivo
    console.log(n+1);
  }

function successivoDispari(n)
  { //primo dispari successivo a n
    if(n%2==0)
      console.log(n+1);
    else
      console.log(n+2);
  }

function livelloSimpatia(n)
  {
    let numeri = [];
    
    for(i = 0; i < 100; i++)
      {
        if(n==i)
        {
          numeri[i] = n + ":selected"
        }
        else
        {
          numeri[i] = i;
        }
      }

    return numeri;
  }

function givePrime(n,m)
  {
    for(i = n; i <= m; i++)
      {
        if(isPrime(i))
        {
          console.log(i);
        }
      }
  }

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

const {readFile, writeFile,appendFile} = require('fs');

function persona(id, nome, nick, messaggio, ip, data, color, font)
  {
    var persona = 'Id: ' + id + '\nNome: ' + nome + '\nNickname: ' + nick + '\nMessaggio: ' + messaggio + '\nIP: ' + ip + '\nData: ' + data + '\nColore: ' + color + '\nFont: ' + font;
    writeFile('./persona.txt', persona, (error)=>
      {
        if (error)
          { 
            console.log(error);
            return
          }
        console.log(persona);
      })
  }

function primeFS()
  {
    cont = 0;
    i = 1;
    str = '';
    while(cont<1000)
    {
      if(isPrime(i))
      {
        str = str + i + '\n';
        cont++;
      }
      i++;
    }
  writeFile('./numeriprimi.txt', str, (error)=>
    {
      if (error)
        { 
          console.log(error);
          return
        }
      console.log(str);
    })
  }

function restituisciStrigaNelFile(str, n)
  {
    for(i=0;i<n;i++)
      {
        appendFile('./stringhe.txt', str+"\n", (error)=>
        {
          if (error)
            { 
              console.log(error);
              return
            }
          console.log(str);
        })
      }
  }

module.exports={
  saluta:Saluta,
  scambia:Inverti,
  succ:successivo,
  dispari:successivoDispari,
  simpatia:livelloSimpatia,
  primi:givePrime,
  persona:persona,
  primiFS:primeFS,
  strFile:restituisciStrigaNelFile
}