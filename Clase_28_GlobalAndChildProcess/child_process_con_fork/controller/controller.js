const sum = () => {
    let sum = 0;
    for (let i = 0; i < 5e9; i++) {
        sum += 1;
    }
    return sum;
}

process.on('message', msg => {
    console.log(`Process ${msg.PID} open!`);
    let result = sum();
    process.send(`Resultado de la suma: ${result}`);
    process.exit();
});

process.send('ready');

module.exports.sum = sum;