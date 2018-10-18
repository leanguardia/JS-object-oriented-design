function Stopwatch() {

    this.duration = 0;
    let isRunning = false;

    this.start = ()=> {
        if (isRunning) { throwError('Stopwatch has already started.'); }
        this.duration = 1;
        isRunning = true;
    };

    this.stop = ()=> {
        if (!isRunning) { throwError('Stopwatch is not started.'); }
        isRunning = false;
    };

    this.restart = ()=> {
        this.duration = 0;
    };

    const throwError = (message)=> { throw new Error(message); }
};

module.exports = Stopwatch;