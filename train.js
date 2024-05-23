// Node js => single thread -> thread pool 4ta, - bir xonali , kam xarajatli, togri ishlatish kk - aynch, call back
// php multi thread

// console.log("Jack Ma maslahatlari");
// const list = [
//   "yaxshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", //20-30
//   "uzingizga ishlashni boshlang", //30-40
//   "siz kuchli bolgan narsalarni qiling", //40-50
//   "yoshlarga investitsiya qiling", //50-60
//   "endi dam oling", //60
// ];

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");         // parametr sifatida function ishga tushadi
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// Callback functions
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("Insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//     }, 5000);
//   }
// }

// console.log("passed here 0");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

//Asynchrous functions    - sync ishga tushgandan keyin ishga tushadi, single thread ni band qilmaydi
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("Insert  a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     // return list[5];
//     return new Promise((resolve, reject) => {
//       //   setTimeout(() => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//     // return(list[5]);
// setTimeout(function () {                               // promise functions da setTimeout, setInterval ishlaydi
//   return list[5];
// }, 5000);
//   }
// }

// call viathen / catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// async function synchronus functionlar to'liq ishga tushib bolgach, async function
// natijalari bn Node Js ishlay boshlaydi, shu sabab single thread ni band qilmaydi event loop orqali thrad poolga tashlayveradi

// call via asyn / await
// async function run() {
//   let javob = await maslahatBering(65); // ketma ket amalga oshiriladi, function  amalga oshmaguncha keyingisiga otmaydi
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

// Exercise

// function countElement(letter, value) {
//   const text = letter.toLowerCase();
//   let n = 0;
//   for (let i = 0; i < value.length; i++) {
//     if (value[i].toLowerCase() === text) {
//       n++;
//     }
//   }
//   return n;
// }
// console.log(countElement("E", "element"));

/* B-TASK: 
Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("acs44ewe67t0s6fgb9") 7ni return qiladi.
*/

function countDigits(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (!isNaN(parseInt(a[i]))) {
      count++;
    }
  }

  if (count === 0) {
    return `There is no number in string`;
  } else {
    return count;
  }
}

console.log(countDigits("acs44ewe67t0s6fgb9"));
console.log(countDigits("www333ooo"));
console.log(countDigits("I study English 2022"));
