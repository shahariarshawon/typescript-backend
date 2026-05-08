// question mark can be used as ternary operator or nullish coalescing or optional chaining

// ternary
const age = 2;
const isEligible = age >= 18 ? true : false;
console.log(isEligible ? "Eligible to marry" : "Not eligible to marry");

// nullish coalescing
//  works only for null and undefined

const theme: undefined = undefined;

const userTheme = theme ?? "Default Theme is Light Theme";
console.log(userTheme);

// optional chaining
// optional chaining are used a value can be assigned to a variable or not.