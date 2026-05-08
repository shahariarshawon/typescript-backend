// union works like this or that
type TUserRole = "admin" | "user";

const dashboard = (role: TUserRole) => {
  if (role === "admin") {
    console.log("Admin Dashboard");
  } else if (role === "user") {
    console.log("User Dashboard");
  } else {
    console.log("Guest Dashboard");
  }
};
dashboard("admin");

// intersection works like this and that
type TMember = {
  salary: number;
  isMarried: true | false;
};

type TManager = {
  name: string;
  contact: string;
};
type TManagerMember = TMember & TManager;

const employee4: TManagerMember = {
  salary: 20000,
  isMarried: false,
  name: "shahariar",
  contact: "0151******",
};

console.log(employee4);
