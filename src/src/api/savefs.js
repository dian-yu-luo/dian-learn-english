var fs = require("fs")

class dianfs {
    static savetofile(filename, str) {
        fs.writeFile(filename, str, function (err) {
            if (err) {
                return console.log('文件写入失败！' + err.message)
            }
            console.log('文件写入成功！')
        })
    }
}

module.exports.dianfs = dianfs;