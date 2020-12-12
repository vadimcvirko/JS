export const getData = {
  url: 'database/dataBase.json',
  get(process) {
    fetch(this.url)
      .then((response) => response.json())
      .then(process);
  },
  wishList(list, callback) {
    this.get((data) => {
      const result = data.filter((item) => list.includes(item.id));
      callback(result);
    });
  },
  item(value, callback) {
    this.get((data) => {
      const result = data.find(item.id === value);
      callback(result);
    });
  },
  cart(list, callback) {
    this.get((data) => {
      const result = data.filter((item) => list.some((obj) => obj.id === item.id));
      callback(result);
    });
  },
};
