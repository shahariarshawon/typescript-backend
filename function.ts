// normal function
function normalAdd(num1: number, num2: number) {
  console.log(num1 + num2);
}
normalAdd(20, 30);

// arrow function
const arrowAdd = (num1: number, num2: number): number => {
  return num1 + num2;
};
console.log(arrowAdd(34, 43));

// function in a object
const employee: {
  name: string;
  age: number;
  balance: number;
  addReveneue: Function;
} = {
  name: "Al Shahariar Arafat Shawon",
  age: 24,
  balance: 60,
  addReveneue(rev: number): number {
    let totalBalance = this.balance + rev;
    return totalBalance;
  },
};

console.log(employee.addReveneue(25000));

// function in for loop

const arrays: number[] = [12, 24, 75, 32, 65, 98, 15, 26, 28, 79, 36, 45];
let totalValue = 0;
arrays.map((arr) => {
  function addValue(value: number): number {
    return (totalValue += arr * value);
  }
addValue(2400);
});
console.log("Total Value is: ", totalValue);
