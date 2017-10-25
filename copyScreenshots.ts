import  fs = require('fs');
import watch = require('watch');
let home = require('os').homedir();
const DESKTOP_PATH = `${home}/Desktop/`;
const IMAGES_PATH = './images/';



let lastNumber = calculateLastNumber();

watch.watchTree(DESKTOP_PATH, {}, () => copyScreenShots());


// _____ HELPER FUNCTIONS ______

function copyScreenShots() {
    let desktop = fs.readdirSync(DESKTOP_PATH);
    lastNumber = calculateLastNumber();
    desktop.forEach(file => {
        if (file.indexOf(".png") >= 0) {
            console.log("COPYING SCREEN SHOT");
            fs.renameSync(DESKTOP_PATH + file, IMAGES_PATH + (++lastNumber) + ".png")
        }
    })
}

function calculateLastNumber() {
    let imgCounter = [];
    let images = fs.readdirSync(IMAGES_PATH);
    images.map(img => {
        let matches = /(^[^\.]+)/.exec(img);
        if (matches) return imgCounter.push(matches[1]);
    });
    let highest = 0;
    imgCounter.forEach(count => {
        count = Number(count);
        highest = highest < count ? count : highest;
    });
    return highest;
}
