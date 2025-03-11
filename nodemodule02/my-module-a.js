const dataA = "Hello...";

function sayHi() {
  console.log("Hi...");
}

const sawaddee = (yourname) => {
  console.log(`สวัสดี ${yourname}`);
};

module.exports = {
  dataA,
  sayHi,
  sawaddee,
};

//หรือ
// module.exports.dataA = dataA;
// module.exports.sayHi = sayHi;
// module.exports.sawaddee = sawaddee;
