var Iconv = require('iconv').Iconv;

module.exports = function (data) {
    if (!data) {
        return '';
    }

    var iconv = new Iconv('SHIFT_JIS', 'UTF-8');

    return iconv.convert(data).toString('utf8');
}
