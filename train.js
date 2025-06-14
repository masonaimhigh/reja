// C TASK 
class Shop {
  constructor(non, lagmon, cola) {
    this.products = {
      non: non,
      lagmon: lagmon,
      cola: cola
    };
  }

  getTime() {
    const now = new Date();
    const soat = String(now.getHours()).padStart(2, '0');
    const minut = String(now.getMinutes()).padStart(2, '0');
    return `Hozir ${soat}:${minut}da`;
  }

  qoldiq() {
    const time = this.getTime();
    const { non, lagmon, cola } = this.products;
    console.log(`${time} ${non}ta non, ${lagmon}ta lag'mon va ${cola}ta cola mavjud!`);
  }

  sotish(nomi, soni) {
    if (this.products[nomi] === undefined) {
      console.log(`Bunday mahsulot mavjud emas: ${nomi}`);
      return;
    }

    if (this.products[nomi] < soni) {
      console.log(`Yetarli ${nomi} yo'q! Mavjud: ${this.products[nomi]}ta`);
    } else {
      this.products[nomi] -= soni;
      console.log(`${this.getTime()} ${soni}ta ${nomi} sotildi.`);
    }
  }

  qabul(nomi, soni) {
    if (this.products[nomi] === undefined) {
      console.log(`Yangi mahsulot qo'shildi: ${nomi}`);
      this.products[nomi] = 0;
    }

    this.products[nomi] += soni;
    console.log(`${this.getTime()} ${soni}ta ${nomi} qabul qilindi.`);
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();

shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();



//D task 
function checkContent(str1, str2) {
  const normalize = str => str.split('').sort().join('');
  return normalize(str1) === normalize(str2);
}
console.log(checkContent("mitgroup", "gmtiprou")); 
console.log(checkContent("hello", "olleh"));       
console.log(checkContent("abc", "abcd"));          
console.log(checkContent("openai", "aiopen"));     





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

