let money = prompt('ваш бюджет');
let name = prompt('название вашего магазина');

let mainList = {
  budget: money,
  shopName: name ,
  shopGoods: [] ,
  employers: {},
  open:false,
};

for (let i = 0; i < 5; i++) {

    let a = prompt(' какой тип товар будем продовать');
    mainList.shopGoods[i] = a;
    if ((typeof(a)) ==='string' && (typeof(a)) === null && a !='' && a.length <50 ){
      console.log('всё верно');
      mainList.shopGoods[i] = a;
    }

}

alert(mainList.budget / 30);

console.log(mainList);




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