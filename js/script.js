
let money,  
    name,
    time 
300

function start() {
  money = prompt('ваш бюджет');
  while(isNaN(money)|| money == "" || money == null) {
    money = prompt('ваш бюджет?');
  }
  name = prompt('название вашего магазина').toLocaleUpperCase()
  time = 21;
}

start();

let mainList = {
  budget: money,
  shopName: name,
  shopGoods: [],
  employers: {},
  open:false,
  discount: false
};

// цикл ///
      for (let i = 0; i < 1; i++) {
        let a = prompt(' какой тип товар будем продовать');

        if ((typeof(a)) ==='string' && (typeof(a)) === null && a !='' && 
        a.length < 50 ){
          console.log( ' всё верно ! ')
          mainList.shopGoods[i] = a;
        } 
    }  
// chooseGoods();



// if (time < 0 ){
//     console.log (' такого не может быть ! ')
//   } else if (time > 8 && time < 20){
//     console.log(' время работать !')
// }      else if (time < 24 ){
//         console.log (' уже слишком поздно')
// }       else {
//         console.log(' в сутках только 24 часа!!!')
// }


alert( "Ежедневный бюждет " + mainList.budget / 30);

// console.log(mainList);




// let num = 50;

 
// if (num <49 ){
//   console.log('neverno')
// } else if(num > 100) {
//   console.log('neverno')
// } else {
//   console.log('нет значения ')
// }

// (num == 50)? console.log('верно'):console.log('neverno');


// switch (num) {
//   case 49:
//       console.log('мало');
//       break;
//   case 100:
//       console.log('Много');
//       break;
//   case 80:
//       console.log('всё ещё много ');
//       break;
//   case 50:
//       console.log('в точку');
//       break;
//   default:
//       console.log('не в этот раз');
//       break;
// }

// while (num <55) {
//   alert(num)
//   num++;
// }

// do {
//   console.log(num);
//   num++;
// }
// while(num <55);

// for(let i = 0; i <8; i++){
//   console.log(i);
// }

// let num = 20;

// function showFirstMessage(text){
//   alert(text);
//   num = 10;
// }



// showFirstMessage("Hello world");

// // console.log(num)

// let calc = (a,b) => a+b 

// console.log (calc(4,5));
// console.log (calc(4,20));

// let str = "Test"
// console.log (str.toLocaleLowerCase());
// console.log (str.toLocaleUpperCase());