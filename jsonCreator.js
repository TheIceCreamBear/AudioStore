const fs = require('fs');

let audioFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.ogg'));

let object = {
    baseurl: 'https://github.com/TheIceCreamBear/AudioStore/blob/main/',
    files: audioFiles,
    params: '?raw=true'
}

console.log(JSON.stringify(object));
