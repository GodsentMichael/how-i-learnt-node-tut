const amount = 10;
if (amount < 10) {
    console.log(`${amount} is a small number`);
} else {
    console.log(`${amount} is a large number`);
}

console.log(`This is my very first node app`);

console.log(__dirname);
setInterval(() => {
    console.log("hello world");
}, 1000);