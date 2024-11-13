// <!-- 5) შევქმნათ ფუნქცია რომელსაც გადაეცემა მასივი და აბრუნებს ამ მასივის ელემეტების ჯამს -->
function sumOfNums(arr) {
    return arr.reduce((sum, currentNum) => sum + currentNum, 0);
}
const number = [7, 89, 91, 97, 100];
const result = sumOfNums(number);
console.log(result);  
