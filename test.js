bot = require('./bot')
formulas = bot.formulas;
testFormulas()
function testFormulas() {                                           // Function that tests our formulas!
    for (const [key, value] of Object.entries(formulas)) {
        if (key == "00" && Math.trunc(value(2)*100)/100 == 117.89) {
        } else if (key == "01" && Math.trunc(value(2)*100)/100 == 112.71) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "02" && Math.trunc(value(2)*100)/100 == 111.54) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "03" && Math.trunc(value(2)*100)/100 == 55.25) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "04" && Math.trunc(value(2)*100)/100 == 109.36) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "05" && Math.trunc(value(2)*100)/100 == 167.57) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "06" && Math.trunc(value(2)*100)/100 == 205.05) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "07" && Math.trunc(value(2)*100)/100 == 215.54) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "08" && Math.trunc(value(2)*100)/100 == 213.04) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "09" && Math.trunc(value(2)*100)/100 == 229.71) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "10" && Math.trunc(value(2)*100)/100 == 207.03) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "11" && Math.trunc(value(2)*100)/100 == 207.63) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "12" && Math.trunc(value(2)*100)/100 == 188.60) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "13" && Math.trunc(value(2)*100)/100 == 208.42) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "14" && Math.trunc(value(2)*100)/100 == 246.17) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "15" && Math.trunc(value(2)*100)/100 == 252.94) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "16" && Math.trunc(value(2)*100)/100 == 260.54) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "17" && Math.trunc(value(2)*100)/100 == 243.19) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "18" && Math.trunc(value(2)*100)/100 == 169.29) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "19" && Math.trunc(value(2)*100)/100 == 119.53) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "20" && Math.trunc(value(2)*100)/100 == 111.39) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "21" && Math.trunc(value(2)*100)/100 == 123.71) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "22" && Math.trunc(value(2)*100)/100 == 103.76) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else if (key == "23" && Math.trunc(value(2)*100)/100 == 55.87) {
            console.log("YAY! TEST OF FORMULA <", key, "> IS PASSED!");
        } else {
            console.error("OH NO! TEST OF FORMULA <", key, "> IS NOT PASSED!");
            continue;
        }
    }
}