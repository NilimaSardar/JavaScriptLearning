{
    // p1
    let a =1;

    {
        //c1
        console.log(a);//1
    }
    console.log(a);//1
    
}

/* 
when a variable is called
first it is searched in its own block
if variable is not find in that block than variable will be searched in parent block
*/