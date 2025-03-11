//การสร้าง module แบบ esmodule แบบที่2
const dataA = "Hello...";

function sayHi() {
  console.log("Hi...");
}

const sawaddee = (yourname) => {
  console.log(`สวัสดี ${yourname}`);
};
export default { dataA, sayHi, sawaddee };
