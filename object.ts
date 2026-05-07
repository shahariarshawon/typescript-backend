// normal object in ts
const user1: {
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  isMarried: boolean;
  wifeName: string;
} = {
  firstName: "Shahariar",
  middleName: "Arafat",
  lastName: "Shawon",
  age: 24,
  isMarried: true,
  wifeName: "Farzana Ahmed",
};

console.log(user1);

// what if the middle name is not exists for a user
const user2: {
  firstName: string;
  middleName?: string;
  lastName: string;
} = {
  firstName: "Farzana",
  // middleName:"", //when we dont use middle name here it shows error to solve use "?" sign. it questions about the value
  lastName: "Ahmed",
};

// if i want to change and not change any value

const user3: {
  firstName: "Shahariar";
  middleName: string;
  readonly lastName: string;
  age: number;
  isMarried: boolean;
  wifeName: string;
} = {
  firstName: "Shahariar",
  middleName: "Arafat",
  lastName: "Shawon",
  age: 24,
  isMarried: true,
  wifeName: "Farzana Ahmed",
};
// user3.lastName="shawona";
// user3.firstName="Al Shahariar";  //we can change the value but when we dont want that anyone shouldn't right to change...
// There are 2 ways.
// 1. by using the value as a type
// 2. by using readOnly access modifier
console.log(user3);
