const { stringify } = require('querystring');

//Llamamos al modulo FS de Node
fs = require  ('fs')
//


let listarEnArray = {
    archivo:'concesionaria.json',

    escribirArray : function(concesionaria) {
        fs.readFileSync(this.archivo,stringify(concesionaria,null, ' '));
    },

}
    console.log(escribirArray())