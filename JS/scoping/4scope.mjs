{//parent
    let a=1;
    let b=10;
    {
        //child
        let a=2;
        console.log(a);//2
        console.log(b);//10
    }
    console.log(a);//1
    
}

/* 
parent
a=1
b=10


child
a=2

*/