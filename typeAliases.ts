// when we need to make 2 different object but with same types then we can use,,,

type TUser = {
  userId: number;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  age: number;
  contact: string;
  address: {
    country: string;
    city: string;
    road: string;
    area: string;
  };
};

// user1
const user1: TUser = {
  userId: 1,
  name: {
    firstName: "Al Shahariar",
    middleName: "Arafat",
    lastName: "Shawon",
  },
  age: 24,
  contact: "01518935876",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
    road: "U****",
    area: "M*****",
  },
};

console.log(user1);

const user2: TUser = {
  userId: 1,
  name: {
    firstName: "Farzana",
    // middleName: "Arafat",
    lastName: "Ahmed",
  },
  age: 24,
  contact: "01518*****",
  address: {
    country: "Bangladesh",
    city: "Dhaka",
    road: "****",
    area: "M******",
  },
};

console.log(user2);
