<!DOCTYPE html>
<html lang="it">
  <head>
    <title>Webserver HTTP</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"></script>
  </head>
  <body>
    <div class="container mt-3">
      <h2>Webserver HTTP</h2>

      <form action="https://WebServer2.fabiopinzarrone.repl.co/somma" method="get">
        <div class="mb-3 mt-3">
          <label for="A">A:</label>
          <input type="text" class="form-control" id="A" placeholder="Enter A" name="A">
          
          <label for="nick">B:</label>
          <input type="text" class="form-control" id="B" placeholder="Enter B" name="B">
        </div>
        <button type="submit" class="btn btn-primary">Somma</button>
      </form> 
      
      <br>
      
      <form action="https://WebServer2.fabiopinzarrone.repl.co/randpd" method="get">
        <button type="submit" class="btn btn-primary">Random</button>
      </form>    

      <form action="https://WebServer2.fabiopinzarrone.repl.co/stringa" method="get">
        <div class="mb-3 mt-3">
          <label for="string">Stringa:</label>
          <input type="text" class="form-control" id="string" placeholder="Enter Your String" name="string">
        </div>
        <button type="submit" class="btn btn-primary">Invia</button>
      </form>    
    </div>
  </body>
</html>
