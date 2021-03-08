// (0,50,55) => 50
const clamp = function(minimum, maximum, value) {
  return Math.min(maximum, Math.max(minimum, value));
}

String.prototype.replaceAt = function (index, characters) {
    return this.substr(0, index) + characters + this.substr(index + characters.length);
}

Number.prototype.inRange = function (a, b) {
    var n = +this;
    return ( n >= a && n <= b );
};

// unit8array => string
const ToBase64 = u8 => {
	return btoa(String.fromCharCode.apply(null, u8))
}

// string => unit8array
const FromBase64 = str => {
	return atob(str).split('').map( c => c.charCodeAt(0) )
}

// "My files" => "my-files"
function normalizeName(name: string) {
    return name.replace(/\s+/gu, '-').toLowerCase();
}

// "<p></p>" => "&lt;p&gt;&lt;/p&gt;"
const cleanseString = function(str:string) {
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
const date = new Date();
Intl.DateTimeFormat('en', { year: 'numeric' }).format(date); // => 2021
Intl.DateTimeFormat('en', { month: 'long' }).format(date); // => "February"
Intl.DateTimeFormat('en', { day: '2-digit' }).format(date); // => 15

// fn => promise
function promisify(fn) {
 	return new Promise((resolve,reject) => {
 		fn(resolve,reject)
 	})
 }

// json url => promise
function fetchJSON(url: string) {
    return fetch(url).then(r => r.json());
}

// ms => promise
function delay(time: number) {
   return new Promise((resolve) => setTimeout(resolve, time))
};


// a throttle function found online.
// throttle(200, callbackfn)
function throttle(delay, callback) {
    let previousTime = 0;

    return (...args) => {
        const currentTime = new Date().getTime();
        if (currentTime - previousTime > delay) {
            previousTime = currentTime;
            return callback(...args);
        }
    };
};

// somewhat Gaussian random
// void => 0...1
function gaussian() {
  return ((Math.random()+Math.random())/2)
}


function isDigit(char: string) {
  return /^\d+$/.test(char) 
}
function isLetter(char: string) {
  return char.toUpperCase() !== char.toLowerCase() || char.codePointAt(0) > 127 
};
