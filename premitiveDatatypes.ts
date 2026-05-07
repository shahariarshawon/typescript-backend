// Premitive Data Types
// Typescript premitives data types are: numbers, strings, boolean, undefined, null, any, never, unknown, void

let userName: string = "shahariar123";
// userName=12 for this showing error that numbe type can't be assigned.

let userID = 24103019;

// userID="shahariar" here also showing error even we didnt declare the type to the variable. Typescript comes with auto identify type of variable features.

// userName.charAt by identifying its assigned type typescript suggests the method that can be used for specific type.

// number types
const rollNo: number = 24103019;
// string
const studentName: string = "Al Shahariar Arafat Shawon";
// boolean
const isAdmin: boolean = true;
// undefined
const x: undefined = undefined;
// any
let noBodyKnows: any = 1012;
noBodyKnows = "shahariar";
