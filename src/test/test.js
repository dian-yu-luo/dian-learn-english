var assert = require('assert');

describe('play', function () {
    it("play", () => {
        console.log("this is a great func");
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