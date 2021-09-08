function counter() {
    let sum = 0;
    return function (number) {
        sum += number;
        console.log(`sum(${number})=`, sum);
    }
}
let sum = counter();
sum(3)
sum(5)
sum(228)