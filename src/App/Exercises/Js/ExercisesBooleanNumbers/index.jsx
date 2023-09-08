// import './styles.css';

// export function Exercise() {
//   //..........ZAD 1.................

//   function canDrive(age, hasDriverLicense, hasCar) {
//     if (age < 18) {
//       return 'You are too young to drive.';
//     } else if (!hasDriverLicense) {
//       return "You can't drive without a driver's license.";
//     } else {
//       return hasCar ? 'You can drive your car!' : 'You can drive a rental car.';
//     }
//   }

//   function hasEnough(hasEnough) {
//     return hasEnough ? true : false;
//   }

//   let age = 17;
//   let hasDriverLicense = true;
//   let hasCar = true;
//   console.log('canDrive', canDrive(age, hasDriverLicense, hasCar));
//   console.log('hasEnough', hasEnough(''));

//   //..........ZAD 2.................

//   function isStringShort(string) {
//     return string.length < 10 ? true : false;
//     // return !(string.length >= 10)
//   }
//   console.log('isStringShort', isStringShort('afafaggsdgdsgsg'));

//   //..........ZAD 3.................

//   const radius = 3;
//   const areaOfCircle = (radius) => {
//     const pi = Math.PI;
//     return pi * radius ** 2;
//   };
//   console.log('The area of the circle is: ' + areaOfCircle(radius));

//   //..........ZAD 4.................

//   function zmianaLiczbyNaOcenę(mark) {
//     switch (mark) {
//       case 1:
//         return 'niedostateczny';
//       case 2:
//         return 'dopuszczający';
//       case 3:
//         return 'dostateczny';
//       case 4:
//         return 'dobry';
//       case 5:
//         return 'bardzo dobry';
//       case 6:
//         return 'celujący';
//       default:
//         return 'Złe wejście';
//     }
//   }
//   console.log(zmianaLiczbyNaOcenę(1));
//   console.log(zmianaLiczbyNaOcenę(2));
//   console.log(zmianaLiczbyNaOcenę(3));
//   console.log(zmianaLiczbyNaOcenę(4));
//   console.log(zmianaLiczbyNaOcenę(5));
//   console.log(zmianaLiczbyNaOcenę(6));
//   console.log(zmianaLiczbyNaOcenę(7));

//   //..........ZAD 5.................

//   let numbers_array = [4, 7];
//   let max_value = -Infinity;

//   for (let i = 0; i < numbers_array.length; i++) {
//     let element = numbers_array[i];

//     // find maximum value
//     if (element > max_value) max_value = element;
//   }
//   console.log('ownMax', max_value);
//   // result => 5

//   //..........ZAD 6.................

//   function sumFloat(inputFloat1, inputFloat2) {
//     let result = (inputFloat1 + inputFloat2).toPrecision(4);
//     console.log('The sum of the float values is: ', result);
//   }
//   let inputFloat1 = parseFloat(3.141592);
//   let inputFloat2 = parseFloat(2.141592);

//   console.log(
//     'The two float values are defined as ',
//     inputFloat1,
//     'and',
//     inputFloat2
//   );

//   console.log(sumFloat(inputFloat1, inputFloat2));

//   //..........ZAD 7.................

//   // f(x) = ax^2 + bx + c
//   function mathRevenge(a, b, c) {
//     const delta = b ** 2 - 4 * a * c;
//     if (delta < 0) {
//       return 'Nie ma pierwiastków';
//     } else if (delta === 0) {
//       const x0 = (-b / 2) * a;
//       return `Pierwiastek to: ${x0}`;
//     } else {
//       const deltaSqrt = Math.sqrt(delta);
//       const x1 = ((-b + deltaSqrt) / 2) * a;
//       const x2 = ((-b - deltaSqrt) / 2) * a;
//       return `Pierwiastki to: ${x1}, ${x2}`;
//     }
//   }
//   console.log(mathRevenge(5, 10, 2));

//   //..........ZAD 8.................

//   function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
//   }

//   console.log('Random Number between 1 and 5: ');

//   console.log(getRandom(1, 5));

//   //..........ZAD 8A.................

//   function generateRandom(min = 1, max = 5) {
//     let difference = 5 - 1;
//     let rand = Math.random();
//     rand = Math.floor(rand * difference);
//     rand = rand + 1;
//     return rand;
//   }

//   console.log(generateRandom());

//   //..........ZAD 8B.................

//   function between(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
//   }
//   console.log(between(10, 200));

//   //..........ZAD 9.................

//   function getAvarage(number1, number2) {
//     const result = number1 >= 0 ? number1 : Math.abs(number1);
//     return console.log(result);
//   }

//   //..........ZAD 10.................

//   function podzielnePrzez(number, podzielna1, podzielna2) {
//     number = parseInt(number);
//     let result = false;
//     if (number % podzielna1 === 0 || number % podzielna2 === 0) {
//       result = true;
//     }
//     return console.log(result);
//   }

//   //..........ZAD 11.................

//   function isPrimer(number) {
//     let prime = true;
//     let result = 'Zła wartość';

//     if (parseInt(number) !== parseFloat(number)) {
//       return console.log(result);
//     }

//     if (number === 1) {
//       prime = false;
//     } else if (number > 1) {
//       for (let i = 2; i < number; i++) {
//         if (number % i === 0) {
//           prime = false;
//           break;
//         }
//       }
//     } else {
//       return console.log(result);
//     }
//     result = prime ? 'tak' : 'nie';
//     return console.log(result);
//   }
//   //..........ZAD 12.................

//   return <div>p</div>;
// }
