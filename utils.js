// "my files" => "my-files"
function normalizeName(name) {
    return name.replace(/\s+/g, '-').toLowerCase();
}
// (3,1,5,10,50) => 30
function normalizeInterpolate(n, start1, end1, start2, end2) {
  return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
}
// new Date => "February 12"
// implementation appears to vary
function formatDate(date) { 
   return date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' }); 
}

function makeImageFromURL(url) {
   return new Promise(resolve => {
        const image = new Image();
        image.addEventListener("load", () => {
            resolve(image);
        });
        image.src = url;
    });
}

function fetchJSON(url) {
    return fetch(url).then(r => r.json());
}

function delay(time) {
   return new Promise((resolve) => setTimeout(resolve, time))
};

// a throttle function with a delay. found online.
// throttle(200, mouseMoveHandler)
function throttle(delay, callback) => {
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
function gaussian() {
  return ((Math.random()+Math.random())/2)
}
