//การสร้าง module แบบ esmodule แบบที่1
const dataA = "Hello...";

function sayHi() {
  console.log("Hi...");
}

const sawaddee = (yourname) => {
  console.log(`สวัสดี ${yourname}`);
};
export { dataA, sayHi, sawaddee };
