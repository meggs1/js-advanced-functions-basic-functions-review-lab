// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair="*") {
    return function(adjective="special") {
        return `You are ${visualFlair}${adjective}${visualFlair}!`
    }
}

const Calculator = {
    add(num1, num2) {return num1 + num2},
    subtract(num1, num2) {return num1 - num2},
    multiply(num1, num2) {return num1 * num2},
    divide(num1, num2) {return num1 / num2}
}

function actionApplyer(startInt, arrayOfFunctions) {
    let a = startInt

    for (let i = 0; i < arrayOfFunctions.length; i++){
        a = arrayOfFunctions[i](a)
    }
    return a
}