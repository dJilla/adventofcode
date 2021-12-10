let fs = require('fs');
let depths = fs.readFileSync('input.txt').toString().split("\n");

let counter = 0;
counter = counter;

for (i = 0; i < depths.length; i++) {

    if(parseInt(depths[i]) < parseInt(depths [i + 1])) {

        counter++;
    }
}

console.log(counter);