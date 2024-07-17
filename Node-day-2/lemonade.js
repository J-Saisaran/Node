const express = require("express");
const app = express();
const port= 3000;

app.get("/menu", function (req, res) {
    const item= req.query.item;
  res.send(`Menu: Small medium large,${item}`);
});

app.post("/order", (req, res) => {
    const size = req.query.size;
    res.send(`Thanks you order recieved: ${size}`);
});

app.put("/order", (req, res) => {
    const size = req.query.size;
    res.send(`your order as been updated to: ${size}`);
});

app.delete("/order", (req, res) => {
    const size = req.query.size;
    res.send(`your order as been deleted: ${size}`);
});

app.listen(3000, () => {
  console.log(`Lemonade stand listening at http://localhost:${port}`);
});