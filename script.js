var startMyDay = function () {
    return `Time for coffee and a shower!`;
};
  
console.log(startMyDay());


var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}.`
};

console.log(favoriteCookie("Snickerdoodle"));


var introduce = function (name, occupation) {
    return `My name is ${name} and my occupation is ${occupation}.`;
};

console.log(introduce("Denise", "web developer"));
console.log(introduce("James", "chef"));


var hydrationFeedback = function() {
    var numGlasses = Number(prompt('How many glasses of water did you have today?'));
    if (numGlasses >= 8) {
        console.log("Congrats!");
    } else {
        console.log("Not bad, not bad. Let’s try for a bit more tomorrow!");
    }
};

hydrationFeedback();