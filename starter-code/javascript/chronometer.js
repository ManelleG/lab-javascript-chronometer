// Constructor
function Chronometer () {
    this.currentTime = 0;
    this.intervalId = 0;
    this.minutes = "00";
    this.seconds = "00";
};

Chronometer.prototype.startClick = function () {
    // var that = this;
    // this.intervalId = setInterval(function () {
    //     that.currentTime += 1;
    // }, 1000);
    this.intervalId = setInterval (() => {

        this.currentTime += 1;
        this.setTime();
    }, 1000);
};

Chronometer.prototype.setMinutes = function () {
    var minutes = (this.currentTime / 60);
    return Math.floor(minutes);
};

Chronometer.prototype.setSeconds = function () {
    var seconds = (this.currentTime % 60);
    if (this.currentTime === 0){
        return 0;
    }
    return seconds;
};

Chronometer.prototype.twoDigitsNumber = function (value) {
    if (value < 10){
        return ("0" + value.toString());
    }
    return value.toString();
};

Chronometer.prototype.setTime = function () {
   this.minutes = this.twoDigitsNumber(this.setMinutes());
   this.seconds = this.twoDigitsNumber(this.setSeconds());
   console.log(this.seconds);
};

// Chronometer.prototype.setMilliseconds = function () {

// };

Chronometer.prototype.stopClick = function () {
    clearInterval(this.intervalId);
};

Chronometer.prototype.resetClick = function () {
    this.currentTime = 0;
    this.setTime();
};

// Chronometer.prototype.splitClick = function () {

// };
