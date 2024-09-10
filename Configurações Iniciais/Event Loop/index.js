function esperar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2");
      resolve();
    }, 0);
  });
}

async function main() {
  console.log("1");

  await esperar();

  console.log("3");
}

main()
