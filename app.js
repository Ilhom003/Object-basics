// let account = {
//     name: 'Webbrain Academy',
//     major: 'Frontend',
//     'full name': 'Webbrain IT Academy',
//     0:1234
// }
// brect notation ni ishlatilish yollari
// console.log(account["full name"]);
// console.log(account[0]);
// console.log(account['0']);

// let key = 'major';
// console.log(account.key);
// console.log(account[key]);
// console.log(account['key']);

// account.name='WBA';
// console.log(account);

// Object.freeze(account);
// console.log(account);


//structuredClone() objectdan nusxa olish uchun ishlatiladi
// let account2=structuredClone(account)
// console.log(account2);

//in bor yoqligini aniqlash uchun ishlatiladi
// console.log('name' in account);

//Object.assign() objectni nusxalash uchun ishlatiladi
// let ac2={};
// Object.assign(ac2,account);
// console.log(ac2);

// let ac = {
//     name: 'Webbrain Academy',
//     major: 'Frontend',
//     funded:2022,
//     students: 1000
// }

// for (const key in ac) {
//     console.log(key,ac[key]);
// }

//Examples
// 1
// let user ={name:'John', surName:'Smith'};
// user.name='Pete';
// delete user.name
// console.log(user);

// 2
//  let salaries={
//     John: 100,
//     Ann:160,
//     Pete:130
//  }

//  for (const key in salaries) {
//     let sum = 0;
//     sum+=salaries[key]

//  }

// let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
// console.log(arrayIntegers,arrayIntegers1);

// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);
// console.log(arrayIntegersOriginal1, arrayIntegers1);



//Object examples
// 1
// let obj={
//         id:1,
//         name:"WebBrain"
//     }
//     for (const key in obj) {
//        console.log(key);
//     }

// 2
// let obj = {
//     id: 1,
//     name: "WebBrain",
// };
// for (const key in obj) {
//     let value = obj[key];
//     if (Number(value)) {
//         console.log(key);
//     }
// }

// 3
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// }

// for (const key in obj) {
//     let value = obj[key];
//     if (value === true || value === false) {
//         console.log(key, obj[key]);
//     }
// }

// 4
// let obj={
//     id:1,
//     name:"WebBrain",
//     offline:true,
//     online:true,
//     individual:false
// }
// function Search(obj,str){
//     for (const key in obj) {
//         let value=obj[key]
//        if(value==String()){
//         return value
//        }
//     }
// }
// console.log(Search(obj,'WebBrain'));