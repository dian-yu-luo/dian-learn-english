var hello = require('../src/lib/sqlite');
import { Article } from "../src/lib/sqlite";
var fs = require('fs');

var assert = require('assert');

describe("sqlite3", function () {
    it("1", function () {
        Article.all(cb)
    })
    it("current file path", () => {
        console.log("current path ", __dirname);
    })
})

describe('play', function () {
    it("测试写文件", () => {
        str = "aaaa"
        fs.writeFile(__dirname + "/jour.org", str, function (err) {
            // 如果err为true，则文件写入失败，并返回失败信息
            if (err) {
                return console.log('文件写入失败！' + err.message)
            }
            // 若文件写入成功，将显示“文件写入成功”
            console.log('文件写入成功！')
        })

    })
    it('one point', function () {
        assert.equal([1, 2, 3].indexOf(4), -1);
        console.log("yes");
    });

    it("nice", function () {
        console.log('----------------------------------------------');
        console.log("this is a great func");
        console.log('----------------------------------------------');
    })

});