const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
};

export function fetchAPI(date) {
    let result = [];
    let dt = new Date(date);
    let seed = dt.getDate();

    let random = seededRandom(seed);
    for (let i = 5; i <= 11; i++) {
        if (random() < 0.5) {
            result.push(i + ":00PM");
        }
        if (random() < 0.5) {
            result.push(i + ":30PM");
        }
    }
    return result;
}

export function submitAPI(formDate) {
    return true;
}