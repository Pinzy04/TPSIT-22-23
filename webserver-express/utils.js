const head = ('<head>' +
    '<title>Webserver HTTP</title>' +
    '<meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">' +
    '<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>' +
  '</head>');

const indietro = '<a href="/">Torna indietro</a>';


function somma(n1,n2)
  {
    return ('<!DOCTYPE html>'+
     '<html>' +
        head +
     '  <body>' +
     '    <div class="container mt-3">' +
     '      <form method="post" action="/risposta">' +
     '        A:&nsbp;<input type="text" size="3" name="A" value="' + n1 +'"><br>' +
     '        B:&nsbp;<input type="text" size="3" name="B" value="' + n2 + '"><br>' +
     '        Somma:&nsbp;<INPUT type="text" value="' + (n1*1 + n2*1) + '" readonly><br>' +
     '        <button type="submit" class="btn btn-primary">Somma</button>' +
     '      </form>' +
     '      <form method="get" action="/">' +
     '        <input type="submit" size="3" value="Indietro">' +
     '      </form>' +
            indietro +
     '    </div>' +
     '  </body>' +
    '</html>');
  } 

function randparidispari()
  {
    rand = Math.floor(Math.random() * 99 + 1);
    if(rand%2==0)
      {
        str = "Il numero " + rand + " e' pari";
      }
    else
      {
        str = "Il numero " + rand + " e' dispari";
      }
    return ('<!DOCTYPE html>'+
     '<html>' +
            head +
     '  <body>' +
     '    <div class="container mt-3">' +
     '      <form method="post" action="/risposta">' +
              str +'<br>' +
     '        <input type="submit" size="3" name="B" value="' + n2 + '"><br>' +
     '        Somma:&nsbp;<INPUT type="submit" name="somma" value="' + (n1*1 + n2*1) + '" readonly><br>' +
     '      </form>' +
     '      <form method="get" action="/">' +
     '        <input type="submit" size="3" value="Indietro">' +
     '      </form>' +
     '  </body>' +
    '</html>');
  }

function stringa(str)
  {
    var giorno = new Date();
    return ("Stringa: " + str + "\nLunghezza: " + str.length + "\nData: " + giorno);
  }

const {readFile, writeFile, appendFile} = require('fs');

module.exports={
  somma:somma,
  randpd:randparidispari,
  stringa:stringa
}
