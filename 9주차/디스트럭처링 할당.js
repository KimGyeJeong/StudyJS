const arr = [1,2,3];
const obj = {obj_one:'1', obj_two:'2'};

const [one, two, three] = arr;

const {ONE, TWO, THREE} = arr;

const {obj_one, obj_two} = obj

console.log(ONE);   // undefined

console.log(obj_one);   // 1