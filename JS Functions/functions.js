//1.Print FullName

function printFullName() {

    console.log("Sineray Dayday")
}
printFullName();

//2.Print FullName with Arrow Function

let printFullNameWithParam = (firstName, lastName) => {
    console.log(printFullNameWithParam("Sineray", "Dayday"));
}

//3.Perimeter of Rectangle

function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}

console.log(perimeterOfRectangle(10, 5));

//4.Calculate BMI

function calculateBMI(weight, height, age) {
    if (age <= 20) {
        return "BMI cannot be calculated for a person under 20 years old.";
    }

    let bmi = weight / (height * height);
    let result = "bmi";

    if (bmi < 18.5) {
        result = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        result = "Normal Weight";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        result = "Overweight";
    }
    else {
        result = "Obese";
    }
    return "BMI is " + bmi + ".You are " + result;
}
console.log(calculateBMI(70, 2, 25));

//5.FindMax

function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

console.log(findMax(0, 10, 5));
console.log(findMax(0, -10, -2));

//6. Exponent

function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

console.log(pow(3, 2));
console.log(pow(3, 3));
console.log(pow(1, 100)); 
