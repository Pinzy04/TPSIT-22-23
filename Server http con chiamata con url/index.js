const http = require('http')
const miaUtils = require('./utils')
var url = require('url');
var querystring = require('querystring');
const port= 3000

const server = http.createServer((req,res)=>{
  
  var params = querystring.parse(url.parse(req.url).query);
  var page = url.parse(req.url).pathname;
  res.writeHead(200, {"Content-Type": "text/plain"});
  
  if(page == "/saluta")
    {
      res.write(miaUtils.saluta(params['nick'], params['email'], params['message'], params['remember']))
    }
  else
    {
      res.write("I'm running as a server!!!")
    }
  res.end();
})

server.listen(port,()=>{
  console.log(`server is running at http://${port}`)
})
