console.log('hello world!');

// sau 2s thi thuc thi callback
setTimeout(()=>{
    console.log('Ha ha');
},2000);

// cu sau 2s thi thuc thi callback.
let time = 1;
let timer = setInterval(()=>{
        console.log('hi hi : ',time);
        time += 9;
        if(time > 99){
            clearInterval(timer);
            console.log('End --- goodbye ---')
        }
},1000);
