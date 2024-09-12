import http from "http";
import url from "url";
import fs from "fs";

const PORT = 3000;

const server = http.createServer((req, res) => {
  try {
    res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });

    const parsedURL = url.parse(req.url, true);
    const queryParams = parsedURL.query;

    if (parsedURL.pathname === "/product/query") {
      return queryProduct(res, queryParams);
    } else if (parsedURL.pathname === "/product/new") {
      return newProduct(res, queryParams);
    } else if (parsedURL.pathname === "/product/att") {
      return attProduct(res, queryParams);
    } else if (parsedURL.pathname === "/product/delete") {
      return removeProduct(res, queryParams);
    } else {
      return res.end("Escolha uma rota válida");
    }
  } catch (error) {
    res.end("Ops, tivemos um problema interno...");
  }
});

async function queryProduct(res, queryParams) {
  if (!queryParams.name) {
    return res.end("Pesquise um produto");
  }

  const db = fs.readFileSync("./db.json", "utf8");

  const database = JSON.parse(db);

  const product = database.products.find(
    (product) => product.name === queryParams.name
  );

  if (!product) {
    return res.end("Produto não encontrado");
  } else {
    return res.end(
      `O produto ${product.name} possui ${product.qtt} unidades em estoque`
    );
  }
}

function newProduct(res, queryParams) {
  if (!queryParams.name || !queryParams.qtt) {
    return res.end("Envie os dados para o cadastro do produto");
  }

  const data = fs.readFileSync("./db.json", "utf8");

  const database = JSON.parse(data);

  const product = database.products.find(
    (product) => product.name === queryParams.name
  );

  if (product) {
    return res.end(
      "Produto já existe no banco de dados, use o endpoint de atualizar"
    );
  }

  database.products.push({
    name: queryParams.name,
    qtt: Number(queryParams.qtt),
  });

  const updatedDatabase = JSON.stringify(database, null, 2);

  fs.writeFileSync("./db.json", updatedDatabase, "utf8");

  return res.end("Produto criado com sucesso!");
}

function attProduct(res, queryParams) {
  if (!queryParams.name || !queryParams.qtt) {
    return res.end("Envie os dados para o cadastro do produto");
  }

  const data = fs.readFileSync("./db.json", "utf8");

  const database = JSON.parse(data);

  const product = database.products.find(
    (product) => product.name === queryParams.name
  );

  if (!product) {
    return res.end(
      "Produto não existe no banco de dados, crie para poder atualizar"
    );
  }

  const productIndex = database.products.findIndex(
    (product) => product.name === queryParams.name
  );

  database.products[productIndex] = {
    ...database.products[productIndex],
    qtt: Number(queryParams.qtt),
  };

  const updatedDatabase = JSON.stringify(database, null, 2);

  fs.writeFileSync("./db.json", updatedDatabase, "utf8");

  return res.end("Produto atualizado com sucesso!");
}

function removeProduct(res, queryParams) {
  if (!queryParams.name) {
    return res.end("Envie o nome do produto para remove-lo");
  }

  const data = fs.readFileSync("./db.json", "utf8");

  const database = JSON.parse(data);

  const product = database.products.find(
    (product) => product.name === queryParams.name
  );

  if (!product) {
    return res.end("Produto não existe no banco de dados");
  }

  database.products = database.products.filter(
    (product) => product.name !== queryParams.name
  );

  const updatedDatabase = JSON.stringify(database);

  fs.writeFileSync("./db.json", updatedDatabase, "utf8");

  return res.end("Produto removido com sucesso!");
}

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
