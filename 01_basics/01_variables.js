const accountId = 144553;
let accountEmail = "harisbinrahat@gmail.com";
var accountPassword = "12345";
accountCity = "Rawalpindi";

// accountId = 2 //not allowed

accountEmail = "harisbinrahat@hotmail.com";
accountPassword = "password123";
accountCity = "Islamabad";
let accountState;
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

