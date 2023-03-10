const { execFile } = require('child_process');

execFile(__dirname + '/processNodejsImage.sh', (error, stdout, stderr) => {
    if (error) return console.log(`Error --EXECFILE--:\n${error.message}`);
    if (stderr) return console.log(`Error --> STDERR:\n${stderr}`);
    console.log(`--STDOUT--:\n${stdout}`);
});