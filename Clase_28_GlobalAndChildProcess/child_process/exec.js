const { exec } = require('child_process');

exec('ls -lh', (error, stdout, stderr) => {
    if (error) return console.error(`Error --EXEC--:\n${error.message}`);
    if (stderr) return console.error(`Error --> STDERR:\n${error}`);
    console.error(`--STDOUT--:\n${stdout}`);
});