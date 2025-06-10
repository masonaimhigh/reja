// A TASK 
/*
function countDigits(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      count++;
    }
  }
  return count;
}
console.log(countDigits("aadsfs9")); 
*/


console.log("Jack Ma maslahatlari");
const list = [
  "yaxshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "uzingizga ishlashni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling", //60
];

// CALBACK FUNCTIONS

// function maslahatBering(a, callback) { 
//   if (typeof a !== "number") callback("Insert number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//    //setTimeout
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



//ASYNC functions
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("Insert  a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    // return list[5];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(list[5]);
      }, 5000);
    });                           // promise functions da setTimeout, setInterval ishlaydi
  }
}

// call via then / catch
// console.log("passed here 0");
// maslahatBering(20)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// call via asyn / await
async function run() {
  let javob = await maslahatBering(65); // ketma ket amalga oshiriladi, function  amalga oshmaguncha keyingisiga otmaydi
  console.log(javob);
  javob = await maslahatBering(31);
  console.log(javob);
  javob = await maslahatBering(41);
  console.log(javob);
}
run();

