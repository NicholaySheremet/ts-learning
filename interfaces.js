var rect1 = {
    id: 'testId1',
    size: {
        width: 12,
        height: 33
    },
};
var rect2 = {
    id: 'testId2',
    size: {
        width: 3,
        height: 22
    },
    color: 'black'
};
// type coercion
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: 'testId2',
    size: {
        width: 3,
        height: 22
    },
    getArea: function () {
        return this.size.width * this.size.height;
    },
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    width: '20px',
    color: 'black',
    'text-size': '111111111111px'
};
