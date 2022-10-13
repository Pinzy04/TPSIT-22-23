function saluta(nick, email, message, remember)
  {
    return 'Hi ' + nick + "\nemail: " + email + "\nmessage: " + message + "\nremember: " + remember;
  }

function Inverti(str)
  {
    let s=str.split("").reverse().join("");
    console.log(s);
  }

module.exports={
  saluta:saluta,
  scambia:Inverti,
}