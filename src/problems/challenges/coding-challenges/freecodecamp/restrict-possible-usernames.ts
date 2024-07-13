let username = "JackOfAllTrades";
let userCheck = /^([A-Za-z]{2}|[A-Za-z]{2,}|[A-Za-z]{1}\d{2,})\d*$/;
let result = userCheck.test(username);
