//1.

const isEmail = (str) => str.includes('@');
  

//2.
const roll = () => Math.floor(Math.random() * 6) + 1;
  
//3.
const getNumber = (id) => Number(document.querySelector(`#${id}`).value);
  
//4.
const weather = (temperature) => (temperature > 16 ? 'teplo':'zima');
  