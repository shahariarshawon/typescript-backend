const user = {
  name: "Shahariar",
  age: 24,
  contact: "01518*****",
  maritalStatus: {
    isMarried: false,
    wifeName: "Farzana Ahmed",
    wifeInfo: {
      fullName: "Farzana Ahmed",
      contact: "01518*****",
    },
  },
};

const {
  maritalStatus: { isMarried: biyeHoicheKina },
} = user;
console.log(biyeHoicheKina ? "Hae hoiche bhai" : "na bhai ekhono hoynai");
