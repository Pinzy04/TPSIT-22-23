const fs = require('fs');

file_path = './my_data.json';

data = {  "nome":"Marco", "cognome":"Paiola" }
append_data (file_path , data );

if (fs.existsSync(file_path)) {
   jString=JSON.parse(fs.readFileSync(file_path));
   console.log(jString);

   for(i=0;i<jString.length;i++) {
        console.log(jString[i].nome+" "+jString[i].cognome);
   }    
}

async function append_data (filename , data ) {
    if (fs.existsSync(filename)) {
        read_data = await readFile(filename)
        if (read_data == false) {
            console.log('not able to read file')
        }
        else {
            read_data.push(data)
            dataWrittenStatus = await writeFile(filename, read_data)
            if (dataWrittenStatus) {
                console.log('data added successfully')
            }
            else{
                console.log('data adding failed')
            }
        }
    }
    else {
        dataWrittenStatus = await writeFile(filename, [data])
        if (dataWrittenStatus) {
            console.log('data added successfully')
        }
        else{
            console.log('data adding failed')
        }
    }
}

async function readFile  (filePath) {
    try {
        const data = await fs.promises.readFile(filePath, 'utf8')
        return JSON.parse(data)
    }
    catch(err) {
        return false;
    }
}

async function writeFile  (filename ,writedata) {
    try {
        await fs.promises.writeFile(filename, JSON.stringify(writedata,null, 4), 'utf8');
        return true
    }
    catch(err) {
        return false
    }
}