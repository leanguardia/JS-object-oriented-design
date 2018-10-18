function Stopwatch() {

    this.duration = 0;
    let isRunning = false;
    let startTime, stopTime;

    this.start = ()=> {
        if (isRunning) { throwError('Stopwatch has already started.'); }
        startTime = actualTime();
        isRunning = true;
    };

    this.stop = ()=> {
        if (!isRunning) { throwError('Stopwatch is not started.'); }
        stopTime = actualTime();
        calculateDuration();
        isRunning = false;
    };

    this.restart = ()=> {
        this.duration = 0;
    };

    const throwError = (message)=> { throw new Error(message); }
    const actualTime = ()=> { return (new Date()).getTime(); }
    const calculateDuration = ()=> {
         this.duration += ((stopTime - startTime) / 1000);
    };
};

module.exports = Stopwatch;