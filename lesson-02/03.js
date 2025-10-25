/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 99 // тестовое значение, можно изменять
let grade

// if (score <= 49 && score >= 0) {
//     grade = "F";
// } else if (score <= 69 && score >= 50) {
//     grade = "D";
// } else if (score <= 79 && score >= 70) {
//     grade = "C";
// } else if (score <= 89 && score >= 80) {
//     grade = "B";
// } else if (score <= 100 && score >= 90) {
//     grade = "A";
// }
// console.log(grade);
// your code

switch (true) {
    case score >= 0 && score <= 49: {
        grade = "F";
        break;
    }
    case score >= 50 && score <= 69: {
        grade = "D";
        break;
    }
    case score >= 70 && score <= 79: {
        grade = "C";
        break;
    }
    case score >= 80 && score <= 89: {
        grade = "B";
        break;
    }
    case score >= 90 && score <= 100: {
        grade = "A";
        break;
    }
}
console.log(grade);