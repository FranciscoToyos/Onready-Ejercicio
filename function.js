const fs = require('fs');
const parsingFile = (filePath) => JSON.parse(fs.readFileSync(filePath, 'utf-8'))
const autosFilePath = '../data/autos.json';

module.exports ={
    getConces : () => parsingFile(autosFilePath),
}