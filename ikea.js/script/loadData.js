import { getData } from './getData.js';

const wishList = ['idd005', 'idd006', 'idd007', 'idd008'];
const carList = [
  {
    id: 'idd045',
    count: 3,
  },
  {
    id: 'idd075',
    count: 1,
  },
  {
    id: 'idd095',
    count: 2,
  },
];

export const loadData = () => {
  if (location.search) {
    const search = decodeURI(location.search);
    const prop = search.split('=').substring()[0];
    const value = search.split('=')[1];
    if (prop === 's') {
      console.log(value);
    } else if (prop === 'wishlist') {
      getData.wishList(wishList, (data) => console.dir({ wishList: data }));
    } else {
      console.log(prop, value);
    }
  }

  if (location.hash) {
    getData.item(location.hash.substring(1), (data) => console.log(data));
  }

  if (location.pathname.includes('cart')) {
    getData.cart(carList, (data) => console.log(data));
  }
};
