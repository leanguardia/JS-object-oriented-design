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

    it('begins a counter after it starts', ()=> {
        sw.start();
        assert.notEqual(sw.duration, 0);
    });

    it('throws an error when trying to start it twice', ()=> {
        sw.start();
        assert.throws(sw.start, 'Stopwatch has already started.');
    });

    it('still shows duration time after is stops', ()=> {
        sw.start(); sw.stop();
        assert.notEqual(sw.duration, 0);
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