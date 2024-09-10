// console.log('1')
// console.log('2')
// const a = '3'
// console.log(a)
// console.log('4')

function esperar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve();
    }, 1000);
  });
}

async function main() {
  console.log("1");
  await esperar();
  console.log("3");
}

main();
