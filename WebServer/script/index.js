let http = require('http')
let miaUtils = require('./utils')
let url = require('url');
let querystring = require('querystring');
let port = 8000;

const server = http.createServer((req,res)=>{
  
  let params = querystring.parse(url.parse(req.url).query);
  let page = url.parse(req.url).pathname;
  res.writeHead(200, {"Content-Type": "text/plain"});

  switch(page)
    {
      case "/somma": res.write(miaUtils.somma(params['A'], params['B']));
        break;

      case "/randpd": res.write(miaUtils.randpd());
        break;

      case "/stringa": res.write(miaUtils.stringa(params['string']));
        break;
        
      default: res.write("I'm running as a server!!!");
        break;
    }
  res.end();
})

server.listen(port,()=>{
  console.log(`server is running at http://${port}`);
})
