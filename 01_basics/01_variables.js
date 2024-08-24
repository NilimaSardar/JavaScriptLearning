const accountId = 15654
let accountEmail = "nilima123@google.com"
var accountPassword = "12345"
accountCity = "Biratnagar"
let accountState;

//accountId= 2 //not allowed
accountEmail= "lili@google.com"
accountPassword = "121212212"
accountCity = "ktm"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);