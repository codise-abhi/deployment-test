const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.get("/",(req,res) => {
  res.json({
    message: "Hello world!"
  })
})

app.get("/products",(req,res) => {
  const products = [{id:1,name:"Shampoo"},{id:2,name:"Soap"},{id:3,name:"Cookies"},{id:4,name:"IPhone"}]
  res.json({
    data: {
      products: products
    }
  })
})




app.listen(port, () => {
  console.log(`SERVER RUNNING ON http://localhost:${port}`);
})