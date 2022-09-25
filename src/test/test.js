var hello = require('../src/lib/sqlite');

var assert = require('assert');

describe('play', function () {
    it("play", () => {
        hello.world();
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