let fs = require('fs');
let depths = fs.readFileSync('input.txt').toString().split("\n").map((x) => parseInt(x));

//part one
let counter = 0;

// for (i = 0; i < depths.length; i++) {

//     if(parseInt(depths[i]) < parseInt(depths [i + 1])) {

//         counter++;
//     }
// }

// console.log(counter);

//part two
for (let i = 3; i < depths.length; i++) {

    let current = depths[i - 3];
    let next = depths[i];

    if (next > current) {

        counter++;
    }
}

console.log(counter);