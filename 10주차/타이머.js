//setTimeout 한번실행
//setInterval 타이머가 만료될 때마다 반복 호출

console.log('hello world');
let timeOut ;

setTimeout(()=>{
    timeOut = setTimeout(()=>{
        console.log('inner;')
    },1500);
    console.log('outer;')

    
},1000);

clearTimeout(timeOut);