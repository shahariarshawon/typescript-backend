// spread and rest operator

// spread operator with array
let friends: string[] = [];
const schoolFriends: string[] = ["Al", "Shahariar", "Arafat", "Shawon"];
const collegeFriends: string[] = ["Farzana", "Ahmed"];

friends.push(...schoolFriends, ...collegeFriends);
console.log(friends);

// spread with object
const primaryInfo = {
  name: "Shahariar",
  age: 24,
  contact: "01518*****",
};

const secondaryInfo = {
  hobby: "Travelling",
  dream: "land a tech giant job",
  favouriteCountry: "Switzerland",
};

const employeeInfo = {
  ...primaryInfo,
  ...secondaryInfo,
};
console.log("Employee Info", employeeInfo);

// rest operator
const inviteFriends = (...friends: string[]) => {
  friends.forEach((friend: string) => console.log(friend + "tion"));
};
inviteFriends("Al", "Shahariar", "Arafat", "Shawon", "Farzana", "AHmed");
