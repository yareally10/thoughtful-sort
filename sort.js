const STACK_STANDARD = "STANDARD";
const STACK_SPECIAL = "SPECIAL";
const STACK_REJECTED = "REJECTED";

function sort(width, height, length, mass) {
    // validate inputs
    if (isNaN(width) || isNaN(height) || isNaN(length) || isNaN(mass) || width <= 0 || height <= 0 || length <= 0 || mass <= 0) {
        throw new Error('Invalid inputs');
    }

    let bulky = false, heavy = false;
    // check if object is heavy
    if (mass >= 20) {
        heavy = true;
    }
    // check if object is bulky
    if (width >= 150 || height >= 150 || length >= 150 || width*height*length >= 1000000) {
        bulky = true;
    }

    if (heavy && bulky) {
        return STACK_REJECTED;
    } else if (heavy || bulky) {
        return STACK_SPECIAL;
    } else {
        return STACK_STANDARD;
    }
}

function main() {
    try{
        const width = 20;
        const height = 10;
        const length = 100;
        const mass = 150;
        const result = sort(width, height, length, mass);
        console.log(`Package dimension: ${width} x ${height} x ${length}`);
        console.log(`Package mass: ${mass}`);
        console.log(`Package stack: ${result}`);
    } catch(error) {
        console.error(error.message)
    }
}

main();