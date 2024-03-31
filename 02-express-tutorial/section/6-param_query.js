const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
});

//param taking paramater from url then sending data according to that

app.get("/api/products", (req, res) => {
  const newProduct = products.map((item) => {
    const { id, name, image } = item;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find((prod) => prod.id === Number(productID));

  if (!singleProduct) {
    res.status(404).send("Page Not Found");
  }
  res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewsID", (req, res) => {
  console.log(req.params);
  res.send("I Ain't no listening your shiht");
});

//query is an object containing a set of key-value pairs representing the query parameters of the URL
//syntax to send object from url -> query?name=cartel&limit=4

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  let sortedProduct = [...products];

  if (search) {
    sortedProduct = sortedProduct.filter((prod) => {
      return prod.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProduct = sortedProduct.slice(0, Number(limit));
  }
  if (sortedProduct < 1) {
    // res.status(200).send("<h2>No product matches your search</h2>");
    return res.status(200).json({ success: "true", data: [] });
  }
  res.status(200).json(sortedProduct);
});

app.listen(5, () => {
  console.log("Server listening on port 5007");
});
