const assert = require('chai').assert;
const Stopwatch = require('../stopwatch');

describe('Stopwatch', () => {
    let sw;

    beforeEach(()=> {
        sw = new Stopwatch();
    });

    it('has an initial duration of 0', ()=> {
        assert.equal(sw.duration, 0);
    });

    it('throws an error when trying to start it twice', ()=> {
        sw.start();
        assert.throws(sw.start, 'Stopwatch has already started.');
    });

    it('still shows duration time after it stops', function(done) {
        sw.start();
        setTimeout( function() {
            sw.stop();
            assert.notEqual(sw.duration, 0); done();
        }, 1);
    });

    it('increments duration after starting again', function(done) {
        sw.start();
        setTimeout( function() {
            sw.stop();
            let firstLap = sw.duration;
            sw.start();
            setTimeout( function() {
                sw.stop();
                // console.log(firstLap, sw.duration);
                assert.isAbove(sw.duration, firstLap);
                done();
            },1);
        }, 1);
    });

    it('resets the duration counter after restarting', ()=> {
        sw.start(); sw.stop(); sw.restart();
        assert.equal(sw.duration, 0);
    });

    it('throws an error when trying to stop an new Stopwatch', ()=> {
        assert.throws(sw.stop, 'Stopwatch is not started.');
    });

    it('throws an error when trying to stop it twice', ()=> {
        sw.start(); sw.stop();
        assert.throws(sw.stop, 'Stopwatch is not started.');
    })
});