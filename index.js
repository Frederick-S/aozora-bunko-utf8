var fs = require('fs');
var convert = require('./lib/convert');

module.exports = function (filePath, callback) {
    fs.readFile(filePath, function (error ,data) {
        if (error) {
            console.log(error);
        } else {
            data = convert(data);

            fs.writeFile(filePath, data, function (error) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('File is converted. Check it again.');
                }
            });
        }
    });
};
