// try {
//   console.log(a);
// } catch (error) {
//   console.error('Erro identificado -> ',error);}

// console.log('linha depois do erro')

function esperar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('deu ruim');
    }, 1000);
  });
}

async function main() {
  console.log("antes de esperar");

  await esperar()
    .then(() => {
      console.log("deu certo a minha função");
    })
    .catch((error) => {
      console.error("deu errado a minha função", error);
    });

  console.log("depois de esperar");
}

main();
