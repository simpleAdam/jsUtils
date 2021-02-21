// "My files" => "my-files"
function normalizeName(name) {
    return name.replace(/\s+/gu, '-').toLowerCase();
}
// "<p></p>" => "&lt;p&gt;&lt;/p&gt;"
var cleanseString = function (str) {
    return str.replace(/</gu, "&lt;").replace(/>/gu, "&gt;");
};
// (3,1,5,10,50) => 30
function normalizeInterpolate(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
// new Date => "February 12"
// result appears to vary
function formatDate(date) {
    return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });
}
//another way of formatting dates
var date = new Date();
Intl.DateTimeFormat('en', { year: 'numeric' }).format(date); // => 2021
Intl.DateTimeFormat('en', { month: 'long' }).format(date); // => "February"
Intl.DateTimeFormat('en', { day: '2-digit' }).format(date); // => 15
// fn => promise
function promisify(fn) {
    return new Promise(function (resolve, reject) {
        fn(resolve, reject);
    });
}
// json url => promise
function fetchJSON(url) {
    return fetch(url).then(function (r) { return r.json(); });
}
// ms => promise
function delay(time) {
    return new Promise(function (resolve) { return setTimeout(resolve, time); });
}
;
// a throttle function found online.
// throttle(200, callbackfn)
function throttle(delay, callback) {
    var previousTime = 0;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var currentTime = new Date().getTime();
        if (currentTime - previousTime > delay) {
            previousTime = currentTime;
            return callback.apply(void 0, args);
        }
    };
}
;
// somewhat Gaussian random
// void => 0...1
function gaussian() {
    return ((Math.random() + Math.random()) / 2);
}
function isDigit(char) {
    return /^\d+$/.test(char);
}
function isLetter(char) {
    return char.toUpperCase() !== char.toLowerCase() || char.codePointAt(0) > 127;
}
;
