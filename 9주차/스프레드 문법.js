function foo(...rest){
    console.log(rest);
}

foo(1,2,3); // [1, 2, 3]
foo(...[1,2,3]);// [1, 2, 3]